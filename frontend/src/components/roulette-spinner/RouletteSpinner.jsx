import { useEffect, useState } from "react";
import RoulettePro from "react-roulette-pro";
import "react-roulette-pro/dist/index.css";
import { openCase } from "../../api/casesServices";

const RouletteSpinner = ({ prizes, isStarted, caseName, makeRequest }) => {
  const [start, setStart] = useState(false);
  const [prizeIndex, setPrizeIndex] = useState(0);
  const [prizeItem, setPrizeItem] = useState({});

  useEffect(() => {
    if (prizeIndex === 0) {
      return;
    }
    setStart(true);

    // Here you can trigger your socket event
  }, [prizeIndex]);

  useEffect(() => {
    if (makeRequest) {
      openCaseFetch();
    }
  }, []);

  // Socket imitation
  // useEffect(() => {
  //   if (start === false) {
  //     return;
  //   }

  //   // Server delay imitation
  //   const timeout = setTimeout(() => {
  //     const winPrizeIndex = prizes.length * 4 + 0;

  //     setPrizeIndex(winPrizeIndex);
  //     console.log("Set `prizeIndex` from socket");
  //   }, 2000);

  //   return () => {
  //     clearTimeout(timeout);
  //   };
  // }, [start]);

  async function openCaseFetch() {
    const body = { case_name: caseName };
    const data = await openCase(body);
    setPrizeItem(data);
    return data;
  }

  useEffect(() => {
    const newPrizeIndex = prizes.length / 2 + 50;
    prizes.splice(newPrizeIndex, 0, prizeItem);
    console.log(prizeItem);
    setPrizeIndex(prizes.length - newPrizeIndex);
    setPrizeIndex(newPrizeIndex);
    console.log(newPrizeIndex);
  }, [prizeItem]);

  return (
    <>
      <RoulettePro
        prizes={prizes}
        prizeIndex={prizeIndex}
        start={isStarted}
        spinningTime={3}
        // onPrizeDefined={handlePrizeDefined}
        soundWhileSpinning=""
      />
    </>
  );
};

export default RouletteSpinner;

// const reproducedPrizeList = [
//   ...prizes,
//   ...reproductionArray(prizes, prizes.length * 3),
//   ...prizes,
//   ...reproductionArray(prizes, prizes.length * 10),
//   ...prizes
// ];

// // This generates an unique id for every prize, we cant use the one comming from the server, because we duplicate the array many times
// const generateId = () =>
//   Date.now().toString(36) + Math.random().toString(36).substring(2);
// // and this applies the id to the item
// const prizeList = reproducedPrizeList.map((prize) => ({
//   ...prize,
//   id: generateId()
// }));

// useEffect(() => {
//   const newPrizeIndex = prizeList.length / 2 + 50;
//   prizeList.splice(newPrizeIndex, 0, prizeItem);
//   setPrizeIndex(prizeList.length - newPrizeIndex);
//   setPrizeIndex(newPrizeIndex);
// }, [prizeItem]);
// const reproductionArray = (array = [], length = 0) => [
//   ...Array(length)
//     .fill("_")
//     .map(() => array[Math.floor(Math.random() * array.length)])
// ];
