import React from "react";
import styles from "./PageNotFound.module.css";
import { useNavigate } from "react-router-dom";
import BasicButton from "../../components/core/button/BasicButton";

const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>404</h1>
      <BasicButton
        title="Back To Homepage"
        className="btn"
        variant="red"
        size="md"
        hover
        onClick={() => {
          navigate("/");
        }}
      />
    </div>
  );
};

export default PageNotFound;
