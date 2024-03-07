import React, { useState } from "react";
import styles from "./SignUp.module.scss";
import Button from "../core/button/Button";

const SignUp = ({ changeState }) => {
  const [errorShow, setErrorShow] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

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

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);

    if (event.target.value === password) {
      setConfirmPasswordError("");
    } else {
      setConfirmPasswordError("Passwords do not match");
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

    if (confirmPassword !== password) {
      setConfirmPasswordError("Passwords do not match");
    } else {
      setConfirmPasswordError("");
    }

    if (
      email.length >= 5 &&
      password.length >= 8 &&
      confirmPassword === password
    ) {
      // Form submission logic
    }
  };

  return (
    <div className={styles.container}>
      <p className={styles.title}>Sign Up</p>
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

        <div className={styles.inputBox}>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onFocus={() => {
              setErrorShow("");
            }}
            onChange={handleConfirmPasswordChange}
          />
          <p className={styles.error}>{confirmPasswordError}</p>
        </div>

        <div className={styles.buttonContainer}>
          <Button type="submit" variant="red" title="Sign Up" />

          <p onClick={changeState}>Log In</p>
        </div>

        {errorShow && <span className={styles.error}>{errorShow}</span>}
      </form>
    </div>
  );
};

export default SignUp;
