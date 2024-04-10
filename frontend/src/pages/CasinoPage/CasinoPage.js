import React from "react";
import styles from "./CasinoPage.module.scss";
import CoinFlip from "../../components/CoinFlip/CoinFlip";
import CoinFlipOld from "../../components/Coin/CoinFlipOld";

const CasinoPage = () => {
  return (
    <div className={styles.container_section}>
      <CoinFlip />
      <CoinFlipOld />
    </div>
  );
};

export default CasinoPage;
