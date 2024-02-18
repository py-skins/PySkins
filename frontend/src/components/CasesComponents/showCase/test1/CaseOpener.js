import React, { useState, useRef, useEffect } from "react";
import styles from "./CaseOpener.module.scss";
import Button from "../../../core/button/Button";

const RaffleRoller = (Skins) => {
  console.log(Skins.Skins);
  const containerRef = useRef(null);
  const [rolled, setRolled] = useState("rolling");
  const [transX, setTransX] = useState("0px");
  const [numCases, setNumCases] = useState(1);

  useEffect(() => {
    if (containerRef.current) {
      const width = containerRef.current.clientWidth;
      setTransX(`-${width}px`);
    }
  }, [containerRef]);

  const startRaffle = () => {
    for (let i = 1; i <= numCases; i++) {
      generate(i);
    }
  };

  const generate = (id) => {
    const randed2 = id - 1; //Math.floor(Math.random() * Skins.Skins.length);
    const raffleRollerContainer = document.getElementById(`raffle${id}`);

    raffleRollerContainer.style.transition = "sdf";
    raffleRollerContainer.style.marginLeft = "0px";
    raffleRollerContainer.innerHTML = "";

    console.log(Skins.Skins[0].skin_rarity.rarity_color);

    for (let i = 0; i < 164; i++) {
      const randed = randomInt(1, 17);
      let element = `<div id="raffle${id}-CardNumber${i}" class="${styles.item}" style="background-image:url(${Skins.Skins[randed].main_image_url}); border-bottom: 4px solid ${Skins.Skins[randed].skin_rarity.rarity_color};"></div>`;

      raffleRollerContainer.insertAdjacentHTML("beforeend", element);
    }

    setTimeout(() => {
      goRoll(
        id,
        Skins.Skins[randed2].name,
        Skins.Skins[randed2].main_image_url,
        Skins.Skins[randed2].skin_rarity.rarity_color
      );
    }, 500 * id);
  };

  const goRoll = (id, skin, skinimg, rarity) => {
    const raffleRollerContainer = document.getElementById(`raffle${id}`);
    raffleRollerContainer.style.transition = "all 8s cubic-bezier(.08,.6,0,1)";
    const winningItem = document.getElementById(`raffle${id}-CardNumber84`);
    winningItem.style.backgroundImage = `url(${skinimg})`;

    setTimeout(() => {
      winningItem.classList.add(styles["winning-item"]);
      setRolled(skin);
      const win_element = `<div class='${styles.item}' style='background-image: url(${skinimg}) ; border-bottom: 4px solid ${rarity}'></div>`;

      const inventory = document.querySelector(`.${styles.inventory}`);
      inventory.insertAdjacentHTML("beforeend", win_element);
    }, 8500);

    let width = 7370;
    raffleRollerContainer.style.marginLeft = `-${width}px`;
  };

  const randomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  };

  return (
    <div className={styles["raffle-container"]} ref={containerRef}>
      <div className={styles["raffle-roller"]}>
        {1 <= numCases && (
          <div className={styles["raffle-roller-holder"]}>
            <div
              id={`raffle1`}
              className={styles["raffle-roller-container"]}
              style={{ transform: `translateX(${transX})` }}
            ></div>
          </div>
        )}
        {2 <= numCases && (
          <div className={styles["raffle-roller-holder"]}>
            <div
              id={`raffle2`}
              className={styles["raffle-roller-container"]}
              style={{ transform: `translateX(${transX})` }}
            ></div>
          </div>
        )}

        {3 <= numCases && (
          <div className={styles["raffle-roller-holder"]}>
            <div
              id={`raffle3`}
              className={styles["raffle-roller-container"]}
              style={{ transform: `translateX(${transX})` }}
            ></div>
          </div>
        )}
      </div>
      <center>
        <span style={{ fontSize: "25px" }}>
          You winning is{" "}
          <span style={{ color: "green" }} id="rolled">
            {rolled}
          </span>
        </span>
        <br />
        <div className={styles.start}>
          <p
            className={numCases === 1 ? styles.active : ""}
            onClick={() => setNumCases(1)}
          >
            1
          </p>
          <p
            onClick={() => setNumCases(2)}
            className={numCases === 2 ? styles.active : ""}
          >
            2
          </p>
          <p
            onClick={() => setNumCases(3)}
            className={numCases === 3 ? styles.active : ""}
          >
            3
          </p>
          <Button variant="red" title="START" onClick={startRaffle} />
        </div>
      </center>
      <br />
      <div className={styles.inventory}></div>
    </div>
  );
};

export default RaffleRoller;
