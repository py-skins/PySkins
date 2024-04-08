import { useEffect, useState } from "react";

import styles from "./ShowCase.module.scss";
import SkinCard from "./SkinCard";
import BasicButton from "../../core/button/BasicButton";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { fetchCaseSkins, fetchCaseOpening } from "../../../api/casesServices";
import RaffleRoller from "./RaffleRoller";
import stylesRaffle from "./RaffleRoller.module.scss";

import dropSound from "./sounds/case_drop_01.mp3";
import openingSound from "./sounds/CaseOpeningSound.mp3";
import { useSelector } from "react-redux";

const ShowCase = ({ closeCase, caseSlug }) => {
  const [skins, setSkins] = useState([]);
  const [numRaffles, setNumRaffles] = useState(1);
  const [rolled, setRolled] = useState("");
  const [isRolling, setIsRolling] = useState(false);
  const user = useSelector((state) => state.user);

  const dropSoundAudio = new Audio(dropSound);
  const openingSoundAudio = new Audio(openingSound);

  useEffect(() => {
    (async () => {
      try {
        const data = await fetchCaseSkins(caseSlug, {
          header: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.access}`,
          },
        });
        console.log(data.skins);
        setSkins(data.skins);
      } catch (e) {
        alert(e);
      }
    })();

    dropSoundAudio.volume = 0.1;
    dropSoundAudio.play();
  }, []);

  const [isCaseOpened, setIsCaseOpened] = useState(false);
  const openCase = () => {
    setIsCaseOpened(true);
  };

  function findIndexById(array, id) {
    for (let i = 0; i < array.length; i++) {
      if (array[i].id === id) {
        return i;
      }
    }
    return -1;
  }

  const startRaffle = async () => {
    const generate = async (row) => {
      const raffleRollerContainer = document.getElementById(`raffle${row}`);
      raffleRollerContainer.style.transition = "sdf";
      raffleRollerContainer.style.marginLeft = "0px";
      raffleRollerContainer.innerHTML = "";

      function getRandomBetween(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }

      for (let i = 0; i < 100; i++) {
        // console.log(skins.length - 1);
        const randed = getRandomBetween(0, skins.length - 1);
        let element = `<div id="raffle${row}-CardNumber${i}" class="${stylesRaffle.item}" style="background-image:url(${skins[randed].preview_image_url}); border-bottom: 4px solid ${skins[randed].rarity_color};"></div>`;

        raffleRollerContainer.insertAdjacentHTML("beforeend", element);
      }

      const goRoll = (row, skin, skinimg, rarity) => {
        const raffleRollerContainer = document.getElementById(`raffle${row}`);
        raffleRollerContainer.style.transition =
          "all 8s cubic-bezier(.08,.6,0,1)";
        const winningItem = document.getElementById(
          `raffle${row}-CardNumber73`
        );
        winningItem.style.backgroundImage = `url(${skinimg})`;
        winningItem.style.borderColor = `${rarity}`;

        setTimeout(() => {
          winningItem.classList.add(stylesRaffle["winning-item"]);
          setRolled(skin);
          const win_element = `<div class='${stylesRaffle.item}' style='background-image: url(${skinimg}) ; border-bottom: 4px solid ${rarity}'></div>`;

          const inventory = document.querySelector(
            `.${stylesRaffle.inventory}`
          );
          inventory.insertAdjacentHTML("beforeend", win_element);
          // dropSoundAudio.volume = 0.1;
          // dropSoundAudio.play();

          if (row === numRaffles) {
            setIsRolling(false);
          }
        }, 9000);

        // let width = 10250;
        // let width = 5680;

        let width = 10250;
        // Check viewport width
        if (window.innerWidth <= 500) {
          width = 5680;
        }
        // console.log("Viewport:", window.innerWidth);
        raffleRollerContainer.style.marginLeft = `-${width}px`;
      };

      console.log(user.access);
      const openedSkin = await fetchCaseOpening(caseSlug, {
        header: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.access}`,
        },
      });
      const id = findIndexById(skins, openedSkin.id);

      setTimeout(() => {
        goRoll(
          row,
          skins[id].name,
          skins[id].preview_image_url,
          skins[id].rarity_color
        );
      }, 500 * row);

      setIsRolling(true);
    };

    for (let i = 1; i <= numRaffles; i++) {
      generate(i);
      openingSoundAudio.volume = 0.1;
      openingSoundAudio.play();
    }
  };

  return (
    <div className={styles.container}>
      <p className={styles.welcome_msg}>Items that might be in this case:</p>
      {isCaseOpened && (
        <RaffleRoller
          skins={skins}
          rolled={rolled}
          raffles={numRaffles}
        ></RaffleRoller>
      )}

      {!isCaseOpened && (
        <div className={styles.skinsList}>
          {skins.length > 0 &&
            skins.map((skin) => {
              return <SkinCard key={skin.id} skin={skin} />;
            })}
        </div>
      )}

      <div className={styles.actionBtns}>
        <BasicButton
          onClick={closeCase}
          variant="red"
          IconLeft={BsChevronLeft}
          title="Back to cases"
        />

        {!isRolling && (
          <div className={styles.start}>
            {isCaseOpened && (
              <>
                <p
                  className={numRaffles === 1 ? styles.active : ""}
                  onClick={() => setNumRaffles(1)}
                >
                  1
                </p>
                <p
                  onClick={() => setNumRaffles(2)}
                  className={numRaffles === 2 ? styles.active : ""}
                >
                  2
                </p>
                <p
                  onClick={() => setNumRaffles(3)}
                  className={numRaffles === 3 ? styles.active : ""}
                >
                  3
                </p>
              </>
            )}

            {!isCaseOpened && (
              <BasicButton
                onClick={openCase}
                variant="red"
                IconRight={BsChevronRight}
                title="Open container"
              />
            )}

            {isCaseOpened && (
              <BasicButton
                onClick={startRaffle}
                variant="red"
                IconRight={BsChevronRight}
                title="Open container"
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ShowCase;
