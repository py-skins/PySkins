import React from "react";
import Container from "../../Container/Container";
import "./navCards.scss"; // Import your SCSS file
import SingleNavCard from "./SingleNavCard";
import { SiExpertsexchange } from "react-icons/si";
import { MdCurrencyExchange } from "react-icons/md";
import { FaHandshake } from "react-icons/fa";

const NavCards = () => {
  return (
    <Container>
      <div className="card__wrapper">
        <SingleNavCard
          icon={SiExpertsexchange}
          title="Trade CS:GO Skins"
          desc="Py-Skins allows you to trade all available skins from CS:GO, Rust and Dota 2 in seconds!"
          href="/"
        />
        <SingleNavCard
          icon={MdCurrencyExchange}
          title="Sell CS:GO Skins"
          desc="Looking to Cash-Out your Inventory? Visit our partner SkinCashier and get paid instantly for all of your unused skins!"
          href="/"
          delayOne={true}
        />
        <SingleNavCard
          icon={FaHandshake}
          title="Buy CS:GO Skins"
          desc="Grow your collection together with Py-Skins! Our huge assortment of rare collector skins will make a great fit in your inventory!"
          href="/"
          delayTwo={true}
        />
      </div>
    </Container>
  );
};

export default NavCards;
