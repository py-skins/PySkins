import React from "react";
import styles from "./BasicButton.module.scss";

const BasicButton = ({
  title,
  type,
  IconLeft,
  IconRight,
  onClick,
  variant,
  size,
  reverse,
  hover,
  opacity,
}) => {
  return (
    <div className={styles[`btn-wrapper`]}>
      <button
        onClick={onClick}
        className={`
        ${styles[`btn`]}
        ${variant === "red" ? [styles[`red`]] : null}
        ${variant === "outline" ? [styles[`outline`]] : null}
        ${variant === "white" ? [styles[`white`]] : null}
        ${size === "sm" ? [styles[`sm`]] : null}
        ${size === "md" ? [styles[`md`]] : null}
        ${size === "lg" ? [styles[`lg`]] : null}
        ${reverse ? [styles[`reverse`]] : null}
        ${hover ? [styles[`hover`]] : null}
        ${opacity ? [styles[`opacity`]] : null}
        
        `}
      >
        {IconLeft && (
          <div className={styles.icon}>
            <IconLeft size={18} />
          </div>
        )}
        {title}
        {IconRight && (
          <div className={styles.icon}>
            <IconRight size={18} />
          </div>
        )}
      </button>
    </div>
  );
};

export default BasicButton;
