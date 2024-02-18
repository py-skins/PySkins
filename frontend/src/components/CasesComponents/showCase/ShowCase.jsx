import { useEffect, useState } from "react";

import styles from "./ShowCase.module.css";
import SkinCard from "./SkinCard";
import Button from "../../core/button/Button";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import RouletteSpinner from "../../roulette-spinner/RouletteSpinner";
import { fetchCaseSkins } from "../../../api/casesServices";

import CaseOpener from "./test1/CaseOpener";
import dropSound from "./sounds/case_drop_01.mp3";

const ShowCase = ({ closeCase, caseName }) => {
  const [skins, setSkins] = useState([]);

  const dropSoundAudio = new Audio(dropSound);

  useEffect(() => {
    (async () => {
      try {
        const data = await fetchCaseSkins(caseName);

        setSkins(data.data.skins);
      } catch (e) {
        alert(e);
      }
    })();

    dropSoundAudio.volume = 0.1;
    dropSoundAudio.play();
  }, []);

  const [isCaseOpened, setIsCaseOpened] = useState(false);
  const openCase = () => {
    setIsCaseOpened(true);
  };

  const prizes = skins.map((skin) => ({
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

  const generateId = () =>
    Date.now().toString(36) + Math.random().toString(36).substring(2);

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
    <div className={styles.container}>
      <p className={styles.welcome_msg}>Items that might be in this case:</p>

      {/* {isCaseOpened && (
        <div className={styles.rouletteWrapper}>
          <div className={styles.roulette}>
            <div className={styles.blurredRoulette}>{roulette2}</div>
            <div className={styles.circleRoulette}>{roulette}</div>
          </div>
        </div>
      )} */}

      {isCaseOpened && <CaseOpener Skins={skins}></CaseOpener>}

      {!isCaseOpened && (
        <div className={styles.skinsList}>
          {skins.map((skin) => (
            <SkinCard key={skin.id} skin={skin} />
          ))}
        </div>
      )}

      <div className={styles.actionBtns}>
        <Button
          onClick={closeCase}
          variant="red"
          IconLeft={BsChevronLeft}
          title="Back to cases"
        />
        <Button
          onClick={openCase}
          variant="red"
          IconRight={BsChevronRight}
          title="Open container"
        />
      </div>
    </div>
  );
};

export default ShowCase;
