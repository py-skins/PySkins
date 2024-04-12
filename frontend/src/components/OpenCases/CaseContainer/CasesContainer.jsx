import React, { useEffect, useState } from "react";
import { fetchCases } from "../../../api/casesServices";
import styles from "./CasesContainer.module.scss";
import CaseCard from "./CaseCard";

const CasesContainer = () => {
  const [cases, setCases] = useState([]);

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

  return (
    <div className={styles.cases_container}>
      <p className={styles.welcome_msg}>
        Welcome to CS2 Case Simulator! Choose a container to open:
      </p>
      <div className={styles.cases_wrapper}>
        {cases.map((caseData, index) => {
          return <CaseCard key={index} caseData={caseData} />;
        })}
      </div>
    </div>
  );
};

export default React.memo(CasesContainer);
