import React from "react";
import CoinFlip from "../../components/Coin/CoinFlip";
import styles from "./Casino.module.scss";

const Casino = () => {
  return (
    <div className={styles.container_section}>
      <CoinFlip />
    </div>
  );
};

export default Casino;
