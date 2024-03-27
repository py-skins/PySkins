import React, { useState } from "react";
import styles from "./SignUp.module.scss";
import Button from "../core/button/Button";
import { userRegister } from "../../api/userServices";

const SignUp = ({ changeState }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({
    details: [],
    email: [],
    password: [],
    confirmPassword: [],
  });

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  function isNumericPassword(password) {
    return /^\d+$/.test(password);
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: [] }); // Clearing errors when input changes
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password, confirmPassword } = formData;
    const newErrors = {
      email: [],
      password: [],
      confirmPassword: [],
    };

    if (!validateEmail(email)) {
      newErrors.email.push("Invalid email format");
    }

    if (password.length < 8) {
      newErrors.password.push("Password must be at least 8 characters long");
    }

    if (password.length > 8 && isNumericPassword(password)) {
      newErrors.password.push("The password cannot be entirely numeric.");
    }

    if (confirmPassword !== password) {
      newErrors.confirmPassword.push("Passwords do not match");
    }

    if (Object.keys(newErrors).every((key) => newErrors[key].length === 0)) {
      const body = {
        email: formData.email.toLowerCase(),
        password: formData.password,
        password2: formData.confirmPassword,
      };

      try {
        const data = await userRegister(body);
        console.log(data);
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
        error?.confirmpassword &&
          setErrors((prevErrors) => ({
            ...prevErrors,
            confirmpassword: error.confirmpassword,
          }));
      }
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className={styles.container}>
      <p className={styles.title}>
        Have an account?{" "}
        <span className={styles.link} onClick={changeState}>
          Sign in here
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
              name="email"
              value={formData.email}
              onChange={handleInputChange}
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
              name="password"
              value={formData.password}
              onChange={handleInputChange}
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

        <div className={styles.inputBox}>
          <span className={styles["p-input-icon-left"]}>
            <i className={`${styles.pi} pi-lock`} />
            <input
              className={styles.inputText}
              placeholder="Confirm Password"
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
            />
          </span>

          {errors.confirmPassword.length > 0 &&
            errors.confirmPassword.map((error, index) => {
              return (
                <p key={index} className={styles.error}>
                  {error}
                </p>
              );
            })}
        </div>

        <div className={styles.buttonContainer}>
          <Button type="submit" size="md" variant="red" title="Sign Up" />
        </div>
      </form>
    </div>
  );
};

export default SignUp;
