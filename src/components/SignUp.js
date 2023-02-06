import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signUp } from "../reducer/asyncAuthReducer";
import styles from "./SignUp.module.css";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const userDetails = {
      email: email,
      password: password,
    };
    dispatch(signUp(userDetails));
  };

  const logInPageOpenHandler = () => {
    navigate("/login");
  };
  return (
    <form className={styles.signupForm} onSubmit={handleSubmit}>
      <h3>Sign Up</h3>
      <h6>Enter Credentials To Create New Account</h6>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
      <button type="submit">Sign Up</button>
      <p onClick={logInPageOpenHandler}>Log In To Existing Account</p>
    </form>
  );
}
