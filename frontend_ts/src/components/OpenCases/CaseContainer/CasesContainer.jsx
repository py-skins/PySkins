import React, { useEffect, useState } from "react";
import { fetchCases } from "../../../api/casesServices";
import styles from "./CasesContainer.module.scss";
import CaseCard from "./CaseCard";
import Layout from "../../Layout/Layout";
import { Paginator } from "primereact/paginator";

const CasesContainer = () => {
  const [cases, setCases] = useState([]);
  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(21);

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

  const onPageChange = (event) => {
    setFirst(event.first);
    setRows(event.rows);
  };
  return (
    <div className={styles.cases_container}>
      <Layout>
        <p className={styles.welcome_msg}>
          Welcome to CS2 Case Simulator! Choose a container to open:
        </p>
        <div className={styles.cases_wrapper}>
          {cases.map((caseData, index) => {
            let startIndex = first;
            let endIndex = first + rows - 1;

            if (startIndex <= index && index <= endIndex)
              return <CaseCard key={index} caseData={caseData} />;
          })}
        </div>
        <Paginator
          first={first}
          rows={rows}
          totalRecords={cases.length}
          template={{ layout: "PrevPageLink PageLinks NextPageLink" }}
          onPageChange={onPageChange}
        />
      </Layout>
    </div>
  );
};

export default React.memo(CasesContainer);
