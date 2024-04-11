import React, { useRef, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./CaseOpening.module.scss";
import SkinCard from "./SkinCard";
import BasicButton from "../../core/button/BasicButton";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { fetchCaseSkins, fetchCaseOpening } from "../../../api/casesServices";
import dropSound from "./sounds/case_drop_01.mp3";
import { Toast } from "primereact/toast";

import { useSelector } from "react-redux";
import RaffleRoller from "./RaffleRoller";

const CaseOpening = () => {
  const { id: caseSlug } = useParams();
  const user = useSelector((state) => state.user);
  const dropSoundAudio = new Audio(dropSound);

  const toast = useRef(null);
  const navigate = useNavigate();

  const [caseInfo, setCaseInfo] = useState(null);
  const [skins, setSkins] = useState([]);
  const [numRaffles, setNumRaffles] = useState(1);
  const [openedSkin, setOpenedSkin] = useState({});
  const [RaffleComponent, setRaffleComponent] = useState(false);

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

    const openedSkin = await fetchCaseOpening(caseSlug, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.access}`,
      },
    });

    // console.log(openedSkin);
    // const openedSkin = {
    //   id: 9,
    //   name: "P90 Neoqueen Large Rendering",
    //   image_url:
    //     "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_p90_gs_p90_neoqueen_light_large.fa2a81f8c7906b2683b5eb4b562edd2529ad2cf0.png",
    //   rarity_color: "#8847FF",
    //   weapon_type: "SMG",
    //   preview_image_url:
    //     "https://csgostash.com/storage/img/skin_sideview/s1545.png?id=eb65a96c0e7dbd8fd4247e1949b97b90",
    //   case_container: 1,
    // };

    setOpenedSkin(openedSkin);
    setRaffleComponent(true);
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
      </div>
    </>
  );
};

export default React.memo(CaseOpening);
