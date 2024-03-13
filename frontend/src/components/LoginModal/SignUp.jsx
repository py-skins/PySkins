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
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Clear error when input changes
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password, confirmPassword } = formData;
    const newErrors = {};

    if (!validateEmail(email)) {
      newErrors.email = "Invalid email format";
    }

    if (password.length < 8) {
      newErrors.password = "Password must be at least 8 characters long";
    }

    if (confirmPassword !== password) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (Object.keys(newErrors).length === 0) {
      try {
        const data = await userRegister(formData);
        console.log(data);
      } catch (error) {
        alert(error);
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
          <p className={styles.error}>{errors.email}</p>
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
          <p className={styles.error}>{errors.password}</p>
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
          <p className={styles.error}>{errors.confirmPassword}</p>
        </div>

        <div className={styles.buttonContainer}>
          <Button type="submit" size="md" variant="red" title="Sign Up" />
        </div>
      </form>
    </div>
  );
};

export default SignUp;
