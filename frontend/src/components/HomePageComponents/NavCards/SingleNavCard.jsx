import React from "react";
import styles from "./NavCards.module.scss";
import { Link } from "react-router-dom";

const SingleNavCard = ({
  title,
  desc,
  icon: Icon,
  href,
  delayOne,
  delayTwo,
}) => {
  return (
    <div className={styles.nav__card}>
      {/* ICON */}
      <div className={styles[`nav__card-icon`]}>
        {Icon && <Icon size={34} />}
      </div>

      {/* TITLE */}
      <div className={styles[`nav__card-title`]}>
        <h2>{title}</h2>
      </div>
      {/* DESC */}
      <div className={styles[`nav__card-desc`]}>
        <p>{desc}</p>
      </div>
      {/* NAVIGATION */}
      <div className={styles[`nav__card-navigate`]}>
        <Link
          to={href}
          className={`${styles[`nav__card-link `]}
                ${delayOne ? [styles[`nav__card-delayOne`]] : null} 
                ${delayTwo ? [styles[`nav__card-delayTwo`]] : null}
                `}
        >
          Trade Instantly
          <span
            style={{
              fontSize: "30px",
              paddingBottom: "2px",
              fontWeight: "100",
            }}
          >
            &raquo;
          </span>
        </Link>
      </div>
    </div>
  );
};

export default SingleNavCard;
