import React from "react";
import styles from "./Backdrop.module.scss";

const BackDrop = ({ onClick }) => {
  return <div onClick={onClick} className={styles.backdrop__main}></div>;
};

export default BackDrop;
