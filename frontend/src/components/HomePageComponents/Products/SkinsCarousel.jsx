import React from "react";
import styles from "./Products.module.scss";
import { FiArrowUpRight } from "react-icons/fi";

const SkinsCarousel = ({ product }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imgBox}>
        <img src={product.main_image_url} alt="" />
      </div>
      <div className={styles.content}>
        <div className={styles[`card-title`]}>
          <p>{product.name}</p>
        </div>

        <div className={styles[`card-trade`]}>
          <span>Trade Now</span>
          <FiArrowUpRight size={20} />
        </div>
      </div>
    </div>
  );
};

export default SkinsCarousel;
