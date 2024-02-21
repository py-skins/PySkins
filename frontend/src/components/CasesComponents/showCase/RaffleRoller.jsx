import React, { useState, useRef, useEffect } from "react";
import styles from "./RaffleRoller.module.scss";
// import Button from "../../core/button/Button";

const RaffleRoller = ({ skins, rolled, raffles }) => {
  console.log(skins);
  console.log(raffles);
  const containerRef = useRef(null);
  const [transX, setTransX] = useState("0px");

  useEffect(() => {
    if (containerRef.current) {
      const width = window.innerWidth;
      console.log(width);

      /*
      1870 Desktop

      let width = -10250;

        .raffle-roller-container {
          width: 15000px;
          max-width: 15000px;
          height: 150px;
            }

        Item {
          width: 150px;
          height: 135px;
        }

        .raffle-roller {
          width: 1480px;
        }

      500 Mobile

        .raffle-roller-container {
          width: 8000px;
          max-width: 8000px;
          height: 90px;
            }

        Item {
          width: 90px;
          height: 80px;
        }

        .raffle-roller {
          width: 400px;
        }


      */

      setTransX(`-${width}px`);
    }
  }, [containerRef]);

  return (
    <div className={styles["raffle-container"]} ref={containerRef}>
      <div className={styles["raffle-roller"]}>
        {1 <= raffles && (
          <div className={styles["raffle-roller-holder"]}>
            <div
              id={`raffle1`}
              className={styles["raffle-roller-container"]}
              // style={{ transform: `translateX(${transX})` }}
            ></div>
          </div>
        )}
        {2 <= raffles && (
          <div className={styles["raffle-roller-holder"]}>
            <div
              id={`raffle2`}
              className={styles["raffle-roller-container"]}
              // style={{ transform: `translateX(${transX})` }}
            ></div>
          </div>
        )}

        {3 <= raffles && (
          <div className={styles["raffle-roller-holder"]}>
            <div
              id={`raffle3`}
              className={styles["raffle-roller-container"]}
              // style={{ transform: `translateX(${transX})` }}
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
