import { useEffect, useState } from "react";

import ShowCase from "../../components/CasesComponents/showCase/ShowCase";
import CasesPanorama from "../../components/CasesComponents/casesPanorama/CasesPanorama";

import styles from "./Cases.module.css";
import { fetchCases } from "../../api/casesServices";

const CasesContainer = () => {
  const initialCasesState = [
    {
      case_data: {
        image_url: "",
        name: "",
        price: "",
      },
    },
  ];

  const [cases, setCases] = useState(initialCasesState);
  const [isCaseClicked, setIsCaseClicked] = useState(false);
  const [clickedCase, setClickedCase] = useState({});


  useEffect(() => {
    (async () => {
      try {
        const data = await fetchCases();
        setCases(data);
      } catch (e) {
        alert(e);
      }
    })();
  }, []);

  const onCaseClick = (caseName) => {
    setIsCaseClicked(true);
    const currCase = cases.find((x) => x.case_data.name == caseName);
    setClickedCase(currCase);
  };

  const closeCase = () => {
    setIsCaseClicked(false);
    setClickedCase({});
  };

  return (
    <section className={styles.container_section}>
      <div className={styles.cases_content_wrapper}>
        <div className={styles.cases_bg_div}>
          <img src="https://convars.com/imgs/case/bg/6.jpg" alt="" />
        </div>
        <div className={styles.no_selector_img_bg}>
          <img
            src="https://convars.com/imgs/skins/containers/startup.png"
            alt=""
          />
        </div>
        {!isCaseClicked ? (
          <CasesPanorama cases={cases} onCaseClick={onCaseClick} />
        ) : (
          <ShowCase closeCase={closeCase} caseName={clickedCase.case_data.name} skinsList={clickedCase.skins} />
        )}
      </div>
    </section>
  );
};

export default CasesContainer;
