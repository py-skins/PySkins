import React, { useState, useEffect } from "react";
import styles from "./RaffleRoller.module.scss";
import openingSound from "./sounds/CaseOpeningSound.mp3";
import dropSound from "./sounds/case_drop_01.mp3";
import Layout from "../../Layout/Layout";

function findIndexById(array, id) {
  for (let i = 0; i < array.length; i++) {
    if (array[i].id === id) {
      return i;
    }
  }
  return -1;
}

const RaffleRoller = ({
  caseInfo,
  raffles,
  openedSkin,
  close,
  rolling,
  setRolling,
}) => {
  const openingSoundAudio = new Audio(openingSound);
  const dropSoundAudio = new Audio(dropSound);

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
        const randed = getRandomBetween(0, caseInfo.skins.length - 1);
        let element = `<div id="raffle${row}-CardNumber${i}" class="${styles.item}" style="background-image:url(${caseInfo.skins[randed].preview_image_url}); border-bottom: 4px solid ${caseInfo.skins[randed].rarity_color};"></div>`;

        raffleRollerContainer.insertAdjacentHTML("beforeend", element);
      }

      const goRoll = (row, skinName, skinimg, rarity) => {
        setRolling(true);
        const raffleRollerContainer = document.getElementById(`raffle${row}`);
        raffleRollerContainer.style.transition =
          "all 8s cubic-bezier(.08,.6,0,1)";
        const winningItem = document.getElementById(
          `raffle${row}-CardNumber73`
        );
        winningItem.style.backgroundImage = `url(${skinimg})`;
        winningItem.style.borderColor = `${rarity}`;

        setTimeout(() => {
          winningItem.classList.add(styles["winning-item"]);
          dropSoundAudio.volume = 0.1;
          dropSoundAudio.play();

          if (row === raffles) {
            setRolling(false);
          }
        }, 9000);

        let width = 10480;
        // Check viewport width
        if (window.innerWidth <= 500) {
          width = 5680;
        }
        raffleRollerContainer.style.marginLeft = `-${width}px`;
      };

      const id = findIndexById(caseInfo.skins, openedSkin.id);

      setTimeout(() => {
        goRoll(
          row,
          caseInfo.skins[id].name,
          caseInfo.skins[id].preview_image_url,
          caseInfo.skins[id].rarity_color
        );
      }, 500 * row);

      setRolling(true);
    };

    for (let i = 1; i <= raffles; i++) {
      generate(i);
      openingSoundAudio.volume = 0.1;
      openingSoundAudio.play();
    }
  };

  useEffect(() => {
    startRaffle();
  }, []);

  return (
    <>
      <div className={styles["raffle-container"]}>
        <div
          className={styles.backDrop}
          onClick={() => {
            !rolling && close();
          }}
        ></div>

        <div
          className={styles.caseInfo}
          onClick={() => {
            !rolling && close();
          }}
        >
          {rolling ? (
            <>
              <p className={styles.welcome_msg}>
                Opening Container <span>{caseInfo.name}</span>
              </p>
              <img src={caseInfo.image_url} alt="case-img" />
            </>
          ) : (
            <>
              <p className={styles.welcome_msg}>
                Opened Skin <span>{openedSkin.name}</span>
              </p>
              <img src={openedSkin.image_url} alt="case-img" />
            </>
          )}
        </div>
        <div className={styles["raffle-roller"]}>
          {1 <= raffles && (
            <div className={styles["raffle-roller-holder"]}>
              <div
                id={`raffle1`}
                className={styles["raffle-roller-container"]}
              ></div>
            </div>
          )}
          {2 <= raffles && (
            <div className={styles["raffle-roller-holder"]}>
              <div
                id={`raffle2`}
                className={styles["raffle-roller-container"]}
              ></div>
            </div>
          )}
          {3 <= raffles && (
            <div className={styles["raffle-roller-holder"]}>
              <div
                id={`raffle3`}
                className={styles["raffle-roller-container"]}
              ></div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default RaffleRoller;
