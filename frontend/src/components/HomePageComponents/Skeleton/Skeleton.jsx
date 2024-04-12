import React from "react";
import styles from "./Skeleton.module.scss";

export default function Skeleton({ type }) {
  const CarouselSkeleton = () => (
    <div className={styles[`card__sk`]}>
      <div className={styles[`imgBox__sk`]}></div>
      <div className={styles[`content__sk`]}></div>
    </div>
  );
  if (type === "carousel") return <CarouselSkeleton />;
}
