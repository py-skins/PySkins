import React from "react";
import "./Player.scss";

const Player = ({ name, image, itemsCount, itemsValue, winChance }) => {
  return (
    <div className="container">
      <p>{name}</p>
      <img src={image} alt={name} />
      <p style={{ color: "var(--paragraph-color)" }}>{itemsCount} ITEMS</p>
      <p>
        Value: <span style={{ color: "yellow" }}>${itemsValue}</span>
      </p>
      <p>Chance: {winChance}%</p>
    </div>
  );
};

export default Player;
