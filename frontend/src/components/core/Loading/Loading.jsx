import React from "react";
import "./Loading.module.scss";
import { ProgressSpinner } from "primereact/progressspinner";

const Loading = () => {
  return (
    <ProgressSpinner
    // style={{ width: "50px", height: "50px" }}
    // strokeWidth="8"
    // fill="var(--surface-ground)"
    // animationDuration=".5s"
    />
  );
};

export default Loading;
