import React from "react";

import styles from './CasesPanorama.module.css'
import CaseCard from "../caseCard/CaseCard";

const CasesPanorama = ({ cases, onCaseClick }) => (
  <div className={styles.cases_panorama}>
    <h2 className={styles.welcome_msg}>
      Welcome to CS:GO Case Simulator! Choose a container to open:
    </h2>
    <div className={styles.cases_container}>
      {cases.map((x, index) => (
        <CaseCard key={index} caseData={x.case_data} onClick={onCaseClick} />
      ))}
    </div>
  </div>
);


export default React.memo(CasesPanorama);