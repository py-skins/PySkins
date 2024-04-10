import React, { useEffect, useState } from "react";
import Player from "./Player";
import styles from "./CoinFlip.module.scss";
import Coin from "./Coin";
import BasicButton from "../core/button/BasicButton";

const DUMMY_DATA = {
  player1: {
    name: "Player1",
    image:
      "https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?w=740&t=st=1707335725~exp=1707336325~hmac=70ac83625b855cece28a5e6411b2a5fcd711bbd4ce29c607c9065969d61a6ae3",
  },
  player2: {
    name: "Player2",
    image:
      "https://img.freepik.com/free-vector/scary-little-blue-monster-cartoon-illustration_1284-64093.jpg?w=740&t=st=1707335767~exp=1707336367~hmac=8b406693252b55ee4c9301b58ea1ba6806a9e865d90a9e32d61ef9e7619020f1",
  },
};

const CoinFlip = () => {
  const [winner, setWinner] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const [p1ItemsCount, setp1ItemsCount] = useState(0);
  const [p1ItemsValue, setp1ItemsValue] = useState(0);
  const [p1WinChance, setp1WinChance] = useState(0);

  const [p2ItemsCount, setp2ItemsCount] = useState(0);
  const [p2ItemsValue, setp2ItemsValue] = useState(0);
  const [p2WinChance, setp2WinChance] = useState(0);

  const startNewGame = () => {
    // Generate random values for p1ItemsCount and p2ItemsCount between 1 and 5
    const randomP1ItemsCount = Math.floor(Math.random() * 5) + 1;
    const randomP2ItemsCount = Math.floor(Math.random() * 5) + 1;

    // Generate random values for p1ItemsValue and p2ItemsValue between 1 and 10 with two decimal places
    const randomP1ItemsValue = parseFloat((Math.random() * 10 + 1).toFixed(2));
    const randomP2ItemsValue = parseFloat((Math.random() * 10 + 1).toFixed(2));

    // Update the state with the random values
    setp1ItemsCount(randomP1ItemsCount);
    setp2ItemsCount(randomP2ItemsCount);
    setp1ItemsValue(randomP1ItemsValue);
    setp2ItemsValue(randomP2ItemsValue);

    // Calculate winning chances
    const totalItemsValue = randomP1ItemsValue + randomP2ItemsValue;
    const p1WinningChance = parseFloat(
      ((randomP1ItemsValue / totalItemsValue) * 100).toFixed(2)
    );
    const p2WinningChance = parseFloat(
      ((randomP2ItemsValue / totalItemsValue) * 100).toFixed(2)
    );

    // Update the state with the winning chances
    setp1WinChance(p1WinningChance);
    setp2WinChance(p2WinningChance);
  };

  const deferFn = (callback, ms) => {
    setTimeout(callback, ms);
  };

  const processResult = (result) => {
    if (result === "heads") {
      setMessage("Congratulation, You Won");
      // setHeadsCount((prev) => prev + 1);
    } else {
      setMessage("Sorry, You Lost");
      // setTailsCount((prev) => prev + 1);
    }

    setLoading(false);
  };

  const flipCoin = () => {
    setWinner(".");
    setMessage("");
    const random = parseFloat((Math.random() * 100).toFixed(2));
    const result = random <= p2WinChance ? "heads" : "tails";

    deferFn(() => {
      setLoading(true);
      deferFn(() => processResult(result), 2900);
      setWinner(result);
    }, 100);
  };

  useEffect(() => {
    startNewGame();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.playersInfo}>
        <div className={message === "Sorry, You Lost" ? `${styles.hide}` : ""}>
          <Player
            name={DUMMY_DATA.player1.name}
            image={DUMMY_DATA.player1.image}
            itemsCount={p1ItemsCount}
            itemsValue={p1ItemsValue}
            winChance={p1WinChance}
          />
        </div>

        <Coin winner={winner} />
        <div
          className={
            message === "Congratulation, You Won" ? `${styles.hide}` : ""
          }
        >
          <Player
            name={DUMMY_DATA.player2.name}
            image={DUMMY_DATA.player2.image}
            itemsCount={p2ItemsCount}
            itemsValue={p2ItemsValue}
            winChance={p2WinChance}
          />
        </div>
      </div>
      <div className={styles.buttonsContainer}>
        {loading && <div className={styles.spinner}></div>}
        {!loading && (
          <>
            <BasicButton
              onClick={flipCoin}
              variant="red"
              size="lg"
              // IconLeft={BsChevronLeft}
              title="Flip The Coin"
            />

            {/* <button className={styles.buttonLeave}>LEAVE</button>
            <button className={styles.buttonStart} onClick={flipCoin}>
              START
            </button> */}
          </>
        )}
      </div>
      <p className={styles.message}>{message}</p>
    </div>
  );
};

export default CoinFlip;
