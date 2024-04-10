import React from "react";
import Layout from "../../Layout/Layout";
import styles from "./NavCards.module.scss";
import SingleNavCard from "./SingleNavCard";
import { SiExpertsexchange } from "react-icons/si";
import { MdCurrencyExchange } from "react-icons/md";
import { FaHandshake } from "react-icons/fa";

const NavCards = () => {
  return (
    <Layout>
      <div className={styles.card__wrapper}>
        <SingleNavCard
          icon={SiExpertsexchange}
          title="Trade CS2 Skins"
          desc="Py-Skins allows you to trade all available skins from CS2, Rust and Dota 2 in seconds!"
          href="/"
        />
        <SingleNavCard
          icon={MdCurrencyExchange}
          title="Sell CS2 Skins"
          desc="Looking to Cash-Out your Inventory? Visit our partner SkinCashier and get paid instantly for all of your unused skins!"
          href="/"
          delayOne={true}
        />
        <SingleNavCard
          icon={FaHandshake}
          title="Buy CS2 Skins"
          desc="Grow your collection together with Py-Skins! Our huge assortment of rare collector skins will make a great fit in your inventory!"
          href="/"
          delayTwo={true}
        />
      </div>
    </Layout>
  );
};

export default NavCards;
