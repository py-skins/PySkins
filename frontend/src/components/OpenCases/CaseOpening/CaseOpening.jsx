import React, { useRef, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./CaseOpening.module.scss";
import SkinCard from "./SkinCard";
import BasicButton from "../../core/button/BasicButton";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { fetchCaseSkins, fetchCaseOpening } from "../../../api/casesServices";
import dropSound from "./sounds/case_drop_01.mp3";
import { Toast } from "primereact/toast";

import { logout } from "../../../app/features/userSlice";

import { useSelector } from "react-redux";
import RaffleRoller from "./RaffleRoller";

const CaseOpening = () => {
  const { id: caseSlug } = useParams();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const dropSoundAudio = new Audio(dropSound);

  const toast = useRef(null);
  const navigate = useNavigate();

  const [caseInfo, setCaseInfo] = useState(null);
  const [skins, setSkins] = useState([]);
  const [numRaffles, setNumRaffles] = useState(1);
  const [openedSkin, setOpenedSkin] = useState({});
  const [RaffleComponent, setRaffleComponent] = useState(false);
  const [isRolling, setIsRolling] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const data = await fetchCaseSkins(caseSlug, {});
        setCaseInfo(data);
        setSkins(data.skins);
      } catch (e) {
        alert(e);
      }
    })();

    dropSoundAudio.volume = 0.1;
    dropSoundAudio.play();
  }, []);

  const startRaffle = async () => {
    if (!user.isAuthenticated) {
      toast.current.show({
        severity: "warn",
        summary: "Attention",
        detail: "You are not Logged In!",
        life: 2000,
      });
      return;
    }

    setRaffleComponent(false);

    try {
      const openedSkin = await fetchCaseOpening(caseSlug, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.access}`,
        },
      });

      setOpenedSkin(openedSkin);
      setRaffleComponent(true);
    } catch (error) {
      toast.current.show({
        severity: "warn",
        summary: error?.messages[0]?.message,
        detail: "You are automatically Logged Out",
        life: 2000,
      });

      dispatch(logout());
    }
  };

  return (
    <>
      <div className={styles.caseopening_container}>
        <Toast ref={toast} position="top-center" />
        <div className={styles.upper}>
          {RaffleComponent && (
            <RaffleRoller
              caseInfo={caseInfo}
              raffles={numRaffles}
              openedSkin={openedSkin}
              close={() => setRaffleComponent(false)}
              rolling={isRolling}
              setRolling={(state) => setIsRolling(state)}
            />
          )}
          <div className={styles.caseInfo}>
            {caseInfo && (
              <>
                <p className={styles.welcome_msg}>
                  Unlock Container <span>{caseInfo.name}</span>
                </p>
                <img src={caseInfo.image_url} alt="case-img" />
              </>
            )}
          </div>
          <div className={styles.skinsList}>
            {skins.length > 0 &&
              skins.map((skin) => {
                return <SkinCard key={skin.id} skin={skin} />;
              })}
          </div>
        </div>

        {!isRolling && (
          <div className={styles.actionBtns}>
            <BasicButton
              onClick={() => {
                navigate(-1);
              }}
              variant="red"
              IconLeft={BsChevronLeft}
              title="Back to cases"
            />

            <BasicButton
              onClick={startRaffle}
              variant="red"
              IconRight={BsChevronRight}
              title="Open container"
            />
          </div>
        )}

        {isRolling && <p className={styles.placeholder}>{""}</p>}
      </div>
    </>
  );
};

export default React.memo(CaseOpening);
