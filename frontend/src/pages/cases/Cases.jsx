import { useEffect, useState, Suspense } from "react";
import ShowCase from "../../components/CasesComponents/showCase/ShowCase";
import CasesPanorama from "../../components/CasesComponents/casesPanorama/CasesPanorama";
import styles from "./Cases.module.css";
import { fetchCases } from "../../api/casesServices";
import Loading from "../../components/core/Loading/Loading";

const CasesContainer = () => {
  const initialCasesState = [];

  const [cases, setCases] = useState(initialCasesState);
  const [isCaseClicked, setIsCaseClicked] = useState(false);
  const [clickedCaseName, setClickedCaseName] = useState("");

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

  const onCaseClick = (caseSlug) => {
    setClickedCaseName(caseSlug);
    setIsCaseClicked(true);
  };

  const closeCase = () => {
    setIsCaseClicked(false);
    setClickedCaseName("");
  };

  return (
    <section className={styles.container_section}>
      <div className={styles.cases_content_wrapper}>
        {/* <CasesPanorama cases={cases} onCaseClick={onCaseClick} /> */}

        {!isCaseClicked && (
          <CasesPanorama cases={cases} onCaseClick={onCaseClick} />
        )}
        {isCaseClicked && (
          <ShowCase closeCase={closeCase} caseSlug={clickedCaseName} />
        )}
      </div>
    </section>
  );
};

export default CasesContainer;
