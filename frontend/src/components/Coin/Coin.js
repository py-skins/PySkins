import React, { useState } from "react";
import "./coinStyle.scss"; // Import your SCSS file

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
    <div className='container'>
      <div className={`${value > 0 ? "coin-scale" : ""}`}>
        <div
          className={`${active === true ? "active" : "inactive"} ${
            value > 0 ? (value >= 0.5 ? "spinheads" : "spintails") : ""
          } coin`}
        >
          {/* HEADS */}
          <div className="heads">
            <img src={"/img/coin-tails.png"} alt="" />
          </div>

          {/* TAILS */}
          <div className="tails">
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
