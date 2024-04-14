import React, { useState } from "react";
import styles from "./coin.module.scss";

const Coin = () => {
  const [value, setValue] = useState(-1);
  const [active, setActive] = useState(true);

  const flipCoin = () => {
    setActive(false);
    setValue(-1);
    setTimeout(() => {
      setValue(Math.random());
    }, 50);

    setTimeout(() => {
      setActive(true);
    }, 1700);
  };

  return (
    <div className={styles.container}>
      <div className={`${value > 0 ? "coin-scale" : ""}`}>
        <div
          className={`${active === true ? styles.active : styles.inactive} ${
            value > 0
              ? value >= 0.5
                ? styles.spinheads
                : styles.spintails
              : ""
          } ${styles.coin}`}
        >
          {/* HEADS */}
          <div className={styles.heads}>
            <img src={"/img/coin-tails.png"} alt="" />
          </div>

          {/* TAILS */}
          <div className={styles.tails}>
            <img src={"/img/swords_icon.png"} alt="" />
          </div>
        </div>
      </div>
      {/* TREASURE CASE */}
      <div className="">
        <button className={``} onClick={() => flipCoin()}>
          Open
        </button>
      </div>
    </div>
  );
};

export default Coin;
