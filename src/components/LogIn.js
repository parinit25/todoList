import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logIn } from "../reducer/asyncAuthReducer";
import styles from "./LogIn.module.css";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };
  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const userDetails = {
      email: email,
      password: password,
    };
    dispatch(logIn(userDetails));
    if (
      localStorage.getItem("localID") != "" &&
      localStorage.getItem("idToken") != ""
    ) {
      navigate("/");
    }
  };
  const signUpFormOpenHandler = () => {
    navigate("/signup");
  };

  return (
    <form onSubmit={handleSubmit} className={styles.loginForm}>
      <h3>Log In</h3>
      <h6>Enter Credentials To Log-in To Your Account</h6>
      <label>
        Email:
        <input
          type="text"
          name="username"
          onChange={emailChangeHandler}
          value={email}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          name="password"
          onChange={passwordChangeHandler}
          value={password}
        />
      </label>
      <button type="submit" className={styles.button}>
        Log In
      </button>
      <p onClick={signUpFormOpenHandler}>Create new Account</p>
    </form>
  );
};

export default LogIn;
