import React from "react";
import styles from "./Coin.module.scss";

const Coin = ({ winner }) => {
  return (
    <div className={styles.container}>
      {winner && (
        <div className={`${styles.coin} ${styles[winner]}`}>
          <div className={styles.side}></div>
          <div className={styles.side}></div>
        </div>
      )}
      <p>VS</p>
    </div>
  );
};

export default Coin;
