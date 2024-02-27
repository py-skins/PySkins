import React from "react";
import styles from "./RaffleRoller.module.scss";

const RaffleRoller = ({ skins, rolled, raffles }) => {
  return (
    <div className={styles["raffle-container"]}>
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
      <center>
        <span style={{ fontSize: "25px" }}>
          You winning is{" "}
          <span style={{ color: "green" }} id="rolled">
            {rolled}
          </span>
        </span>
      </center>
      <br />
      <div className={styles.inventory}></div>
    </div>
  );
};

export default RaffleRoller;
