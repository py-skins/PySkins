import { useEffect, useState } from "react";

import styles from "./ShowCase.module.css";
import SkinCard from "./SkinCard";
import Button from "../../core/button/Button";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { fetchCaseSkins } from "../../../api/casesServices";
import RaffleRoller from "./RaffleRoller";
import stylesRaffle from "./RaffleRoller.module.scss";

import dropSound from "./sounds/case_drop_01.mp3";
import openingSound from "./sounds/CaseOpeningSound.mp3";

const ShowCase = ({ closeCase, caseName }) => {
  const [skins, setSkins] = useState([]);
  const [numRaffles, setNumRaffles] = useState(1);
  const [rolled, setRolled] = useState("");
  const [isRolling, setIsRolling] = useState(false);

  const dropSoundAudio = new Audio(dropSound);
  const openingSoundAudio = new Audio(openingSound);

  useEffect(() => {
    (async () => {
      try {
        const data = await fetchCaseSkins(caseName);

        setSkins(data.data.skins);
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

  const startRaffle = () => {
    const generate = (id) => {
      const randed2 = id - 1;
      const raffleRollerContainer = document.getElementById(`raffle${id}`);

      raffleRollerContainer.style.transition = "sdf";
      raffleRollerContainer.style.marginLeft = "0px";
      raffleRollerContainer.innerHTML = "";

      console.log(skins[0].skin_rarity.rarity_color);

      const randomInt = (min, max) => {
        return Math.floor(Math.random() * (max - min)) + min;
      };

      for (let i = 0; i < 100; i++) {
        const randed = randomInt(1, 17);
        let element = `<div id="raffle${id}-CardNumber${i}" class="${stylesRaffle.item}" style="background-image:url(${skins[randed].main_image_url}); border-bottom: 4px solid ${skins[randed].skin_rarity.rarity_color};"></div>`;

        raffleRollerContainer.insertAdjacentHTML("beforeend", element);
      }

      const goRoll = (id, skin, skinimg, rarity) => {
        const raffleRollerContainer = document.getElementById(`raffle${id}`);
        raffleRollerContainer.style.transition =
          "all 8s cubic-bezier(.08,.6,0,1)";
        const winningItem = document.getElementById(`raffle${id}-CardNumber84`);
        winningItem.style.backgroundImage = `url(${skinimg})`;

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

          if (id === numRaffles) {
            setIsRolling(false);
          }
        }, 9000);

        let width = 10250;
        raffleRollerContainer.style.marginLeft = `-${width}px`;
      };

      setTimeout(() => {
        goRoll(
          id,
          skins[randed2].name,
          skins[randed2].main_image_url,
          skins[randed2].skin_rarity.rarity_color
        );
      }, 500 * id);

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
          {skins.map((skin) => (
            <SkinCard key={skin.id} skin={skin} />
          ))}
        </div>
      )}

      <div className={styles.actionBtns}>
        <Button
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
              <Button
                onClick={openCase}
                variant="red"
                IconRight={BsChevronRight}
                title="Open container"
              />
            )}

            {isCaseOpened && (
              <Button
                onClick={startRaffle}
                variant="red"
                IconRight={BsChevronRight}
                title="Open container"
              />
            )}

            {/* <Button variant="red" title="START" onClick={startRaffle} /> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default ShowCase;
