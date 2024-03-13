import React from "react";
import styles from "./Button.scss"; // Import your SCSS

const Button = ({
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
    <div className="btn-wrapper">
      <button
        onClick={onClick}
        className={`
        btn
        ${variant === "red" ? "red" : null}
        ${variant === "outline" ? "outline" : null}
        ${variant === "white" ? "white" : null}
        ${size === "sm" ? "sm" : null}
        ${size === "md" ? "md" : null}
        ${size === "lg" ? "lg" : null}
        ${reverse ? "reverse" : null}
        ${hover ? "hover" : null}
        ${opacity ? "opacity" : null}
        
        `}
      >
        {IconLeft && (
          <div className="icon">
            <IconLeft size={18} />
          </div>
        )}
        {title}
        {IconRight && (
          <div className="icon">
            <IconRight size={18} />
          </div>
        )}
      </button>
    </div>
  );
};

export default Button;
