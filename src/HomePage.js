import React from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import LogIn from "./components/LogIn";
import ComposeEmail from "./components/mailBox/ComposeEmail";
import MailBoxClient from "./components/MailBoxClient";
import ProfilePage from "./components/ProfilePage";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import SignUp from "./components/SignUp";
import UpdateProfile from "./components/UpdateProfile";

const HomePage = () => {
  const userData = useSelector((state) => state.user.userData);
  return (
    <div>
      <div>
        <ResponsiveAppBar />
        <Routes>
          <Route path="/" element={<MailBoxClient />}></Route>
          <Route path="login" element={<LogIn />}></Route>
          <Route path="signup" element={<SignUp />}></Route>
          <Route path="profile" element={<ProfilePage />}></Route>
          <Route path="updateprofile" element={<UpdateProfile />}></Route>
        </Routes>
      </div>
    </div>
  );
};

export default HomePage;
