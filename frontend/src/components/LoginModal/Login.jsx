import React, { useState } from "react";
import styles from "./Login.module.scss";
import Button from "../core/button/Button";
import { useDispatch } from "react-redux";
import { userLogin } from "../../api/userServices";
import { login } from "../../app/features/userSlice";
import "primeicons/primeicons.css";

const Login = ({ changeState, CloseForm }) => {
  const [errors, setErrors] = useState({
    details: [],
    email: [],
    password: [],
  });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);

    if (event.target.value.length >= 5) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: [],
      }));
    }
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);

    if (event.target.value.length >= 8) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: [],
      }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    let errorsTemp = {
      details: [],
      email: [],
      password: [],
    };

    if (!validateEmail(email)) {
      errorsTemp.email.push("Invalid email format");
    }

    if (password.length < 8) {
      errorsTemp.password.push("Password must be at least 8 characters long");
    }

    setErrors(errorsTemp);

    if (errorsTemp.email.length === 0 && errorsTemp.password.length === 0) {
      const body = {
        email: email.toLowerCase(),
        password: password,
        password2: password,
      };

      try {
        const data = await userLogin(body);
        const userData = {
          email,
          isAuthenticated: true,
          ...data,
        };

        dispatch(login(userData));
        CloseForm();
      } catch (error) {
        error?.detail &&
          setErrors((prevErrors) => ({
            ...prevErrors,
            details: error.detail,
          }));
        error?.email &&
          setErrors((prevErrors) => ({
            ...prevErrors,
            email: error.email,
          }));
        error?.password &&
          setErrors((prevErrors) => ({
            ...prevErrors,
            password: error.password,
          }));
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
                setErrors((prevErrors) => ({
                  ...prevErrors,
                  email: [],
                  details: [],
                }));
              }}
              onChange={handleEmailChange}
            />
          </span>
          {errors.email.length > 0 &&
            errors.email.map((error, index) => {
              return (
                <p key={index} className={styles.error}>
                  {error}
                </p>
              );
            })}
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
                setErrors((prevErrors) => ({
                  ...prevErrors,
                  password: [],
                  details: [],
                }));
              }}
              onChange={handlePasswordChange}
            />
          </span>
          {errors.password.length > 0 &&
            errors.password.map((error, index) => {
              return (
                <p key={index} className={styles.error}>
                  {error}
                </p>
              );
            })}
        </div>

        <div className={styles.buttonContainer}>
          <Button type="submit" size="md" variant="red" title="Log In" />
        </div>

        {errors.details.length > 0 &&
          errors.details.map((error, index) => {
            return (
              <p key={index} className={styles.error}>
                {error}
              </p>
            );
          })}
      </form>
    </div>
  );
};

export default Login;
