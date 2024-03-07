import React, { useState } from "react";
import styles from "./Login.module.scss";
import Button from "../core/button/Button";

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

  const handleSubmit = (event) => {
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

    if (email.length >= 5 && password.length >= 8) {
      //   fetchData();
    }
  };

  return (
    <div className={styles.container}>
      <p className={styles.title}>Log In</p>
      <form onSubmit={handleSubmit}>
        <div className={styles.inputBox}>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            value={email}
            onFocus={() => {
              setErrorShow("");
            }}
            onChange={handleEmailChange}
          />
          <p className={styles.error}>{emailError}</p>
        </div>

        <div className={styles.inputBox}>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onFocus={() => {
              setErrorShow("");
            }}
            onChange={handlePasswordChange}
          />
          <p className={styles.error}>{passwordError}</p>
        </div>

        <div className={styles.buttonContainer}>
          <Button type="submit" variant="red" title="Log In" />

          <p onClick={changeState}> Sign Up</p>
        </div>

        {errorShow && <span className={styles.error}>{errorShow}</span>}
      </form>
    </div>
  );
};

export default Login;
