import { useEffect, useState } from "react";

import styles from "./ShowCase.module.css";
import SkinCard from "./SkinCard";
import Button from "../../core/button/Button";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import RouletteSpinner from "../../roulette-spinner/RouletteSpinner";

import dropSound from "./sounds/case_drop_01.mp3";

const ShowCase = ({ skinsList, closeCase, caseName }) => {
  const dropSoundAudio = new Audio(dropSound);
  useEffect(() => {
    dropSoundAudio.volume = 0.1;
    dropSoundAudio.play();
  }, []);

  const [isCaseOpened, setIsCaseOpened] = useState(false);
  const openCase = () => {
    setIsCaseOpened(true);
  };

  const prizes = skinsList.map((skin) => ({
    image: skin.main_image_url,
    text: skin.name,
  }));

  const reproductionArray = (array = [], length = 0) => [
    ...Array(length)
      .fill("_")
      .map(() => array[Math.floor(Math.random() * array.length)]),
  ];

  const reproducedPrizeList = [
    ...prizes,
    ...reproductionArray(prizes, prizes.length * 3),
    ...prizes,
    ...reproductionArray(prizes, prizes.length * 10),
    ...prizes,
  ];

  // This generates an unique id for every prize, we cant use the one comming from the server, because we duplicate the array many times
  const generateId = () =>
    Date.now().toString(36) + Math.random().toString(36).substring(2);
  // and this applies the id to the item
  const prizeList = reproducedPrizeList.map((prize) => ({
    ...prize,
    id: generateId(),
  }));

  const roulette = (
    <RouletteSpinner
      prizes={prizeList}
      makeRequest={true}
      caseName={caseName}
      isStarted={isCaseOpened}
    />
  );
  const roulette2 = (
    <RouletteSpinner
      prizes={prizeList}
      makeRequest={false}
      caseName={caseName}
      isStarted={isCaseOpened}
    />
  );

  return (
    <div className={styles.showCase}>
      <div className={styles.container}>
        <h2 className={styles.welcome_msg}>
          Items that might be in this case:
        </h2>

        {isCaseOpened ? (
          <div className={styles.rouletteWrapper}>
            <div className={styles.roulette}>
              <div className={styles.blurredRoulette}>{roulette2}</div>
              <div className={styles.circleRoulette}>{roulette}</div>
            </div>
          </div>
        ) : (
          <div className={styles.skinsList}>
            {skinsList.map((skin) => (
              <SkinCard key={skin.id} skin={skin} />
            ))}
          </div>
        )}
        <div className={styles.actionBtns}>
          <Button
            onClick={closeCase}
            variant="red"
            icon={BsChevronLeft}
            title="Back to cases"
          />
          <Button
            onClick={openCase}
            variant="red"
            icon={BsChevronRight}
            title="Open container"
          />
        </div>
      </div>
    </div>
  );
};

export default ShowCase;
