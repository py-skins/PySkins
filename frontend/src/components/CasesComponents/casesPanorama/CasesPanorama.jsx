import React from "react";

import styles from "./CasesPanorama.module.css";
import CaseCard from "../caseCard/CaseCard";

const CasesPanorama = ({ cases, onCaseClick }) => {
  return (
    <div className={styles.cases_panorama}>
      <p className={styles.welcome_msg}>
        Welcome to CS:GO Case Simulator! Choose a container to open:
      </p>
      <div className={styles.cases_container}>
        {cases.map((caseData, index) => {
          return (
            <CaseCard key={index} caseData={caseData} onClick={onCaseClick} />
          );
        })}
      </div>
    </div>
  );
};

export default React.memo(CasesPanorama);
