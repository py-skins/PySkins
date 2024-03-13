import React from "react";
import styles from "./Casino.module.scss";
import CoinFlip from "../../components/CoinFlip/CoinFlip";
import CoinFlipOld from "../../components/Coin/CoinFlipOld";

const Casino = () => {
  return (
    <div className={styles.container_section}>
      <CoinFlip />
      <CoinFlipOld />
    </div>
  );
};

export default Casino;
