import { useEffect, useState } from "react";

import ShowCase from "../../components/CasesComponents/showCase/ShowCase";
import CasesPanorama from "../../components/CasesComponents/casesPanorama/CasesPanorama";

import styles from "./Cases.module.css";
import { fetchCases } from "../../api/casesServices";

const CasesContainer = () => {
  const initialCasesState = [];

  const [cases, setCases] = useState(initialCasesState);
  const [isCaseClicked, setIsCaseClicked] = useState(false);
  const [clickedCaseName, setClickedCaseName] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const data = await fetchCases();

        const dataArray = [];
        for (const key in data.data) {
          const { name, image_url, price } = data.data[key];
          dataArray.push({ name, image_url, price });
        }

        setCases(dataArray);
      } catch (e) {
        alert(e);
      }
    })();
  }, []);

  const onCaseClick = (caseName) => {
    setClickedCaseName(caseName);
    setIsCaseClicked(true);
    // const currCase = cases.find((x) => x.name === caseName);
  };

  const closeCase = () => {
    setIsCaseClicked(false);
    setClickedCaseName("");
  };

  return (
    <section className={styles.container_section}>
      <div className={styles.cases_content_wrapper}>
        {!isCaseClicked && (
          <CasesPanorama cases={cases} onCaseClick={onCaseClick} />
        )}
        {isCaseClicked && (
          <ShowCase closeCase={closeCase} caseName={clickedCaseName} />
        )}
      </div>
    </section>
  );
};

export default CasesContainer;
