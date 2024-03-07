import React, { useState } from "react";
import styles from "./LoginModal.module.scss";
import Login from "./Login";
import SignUp from "./SignUp";

const LoginModal = ({ onClose }) => {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div className={styles.modal}>
      <div className={styles.overlay} onClick={onClose}></div>
      <div className={styles.container_section}>
        {showLogin && (
          <Login
            changeState={() => {
              setShowLogin(false);
            }}
          />
        )}
        {!showLogin && (
          <SignUp
            changeState={() => {
              setShowLogin(true);
            }}
          />
        )}
      </div>
    </div>
  );
};

export default LoginModal;
