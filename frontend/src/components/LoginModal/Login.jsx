import React, { useState } from "react";
import styles from "./Login.module.scss";
import Button from "../core/button/Button";
import { userLogin } from "../../api/userServices";

import "primeicons/primeicons.css";

const Login = ({ changeState }) => {
  const [errorShow, setErrorShow] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validateEmail = (email) => {
    // Regular expression for email validation
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);

    if (event.target.value.length >= 5) {
      setEmailError("");
    }
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);

    if (event.target.value.length >= 8) {
      setPasswordError("");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validateEmail(email)) {
      setEmailError("Invalid email format");
    } else {
      setEmailError("");
    }

    if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters long");
    } else {
      setPasswordError("");
    }

    if (emailError === "" && passwordError === "") {
      try {
        const data = await userLogin();
        console.log(data);
      } catch (e) {
        alert(e);
      }
    }
  };

  return (
    <div className={styles.container}>
      <p className={styles.title}>
        Don't have an account?{"  "}
        <span className={styles.link} onClick={changeState}>
          Sign up here
        </span>
      </p>

      <form onSubmit={handleSubmit}>
        <div className={styles.inputBox}>
          <span className={styles["p-input-icon-left"]}>
            <i className={`${styles.pi} pi-user`} />
            <input
              className={styles.inputText}
              placeholder="Email"
              type="email"
              id="email"
              value={email}
              onFocus={() => {
                setErrorShow("");
              }}
              onChange={handleEmailChange}
            />
          </span>
          <p className={styles.error}>{emailError}</p>
        </div>

        <div className={styles.inputBox}>
          <span className={styles["p-input-icon-left"]}>
            <i className={`${styles.pi} pi-lock`} />
            <input
              className={styles.inputText}
              placeholder="Password"
              type="password"
              id="password"
              value={password}
              onFocus={() => {
                setErrorShow("");
              }}
              onChange={handlePasswordChange}
            />
          </span>
          <p className={styles.error}>{passwordError}</p>
        </div>

        <div className={styles.buttonContainer}>
          <Button type="submit" size="md" variant="red" title="Log In" />
        </div>

        {errorShow && <span className={styles.error}>{errorShow}</span>}
      </form>
    </div>
  );
};

export default Login;
