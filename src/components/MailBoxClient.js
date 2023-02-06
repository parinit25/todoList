import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SideBar from "./SideBar";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Inbox from "./mailBox/Inbox";
import ComposeEmail from "./mailBox/ComposeEmail";
import "./MailBoxClient.css";
import OutBox from "./mailBox/Outbox";
import EmailPage from "./mailBox/EmailPage";
import { userProfile } from "../reducer/asyncAuthReducer";
import Card from "./ui/Card";

const MailBoxClient = () => {
  const userData = useSelector((state) => state.user.userData);
  const userLogIn = useSelector((state) => state.user.isLoggedIn);
  const showInbox = useSelector((state) => state.mail.inboxShow);
  const showOutbox = useSelector((state) => state.mail.outboxShow);
  const showCompose = useSelector((state) => state.mail.composeShow);
  const mailPageBoolean = useSelector((state) => state.mail.showMailPage);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loginPageHandler = () => {
    navigate("/login");
  };
  useEffect(() => {
    if (userLogIn == true || userData == undefined) {
      dispatch(userProfile());
    }
  }, []);

  return (
    <Box>
      {userLogIn == true || userData !== undefined ? (
        <div className="app__body">
          <SideBar />
          {showInbox && <Inbox />}
          {showCompose && <ComposeEmail />}
          {showOutbox && <OutBox />}
          {mailPageBoolean && <EmailPage />}
        </div>
      ) : (
        <Card>
          <h1> Log-in Or Sign-up To Continue</h1>
          <button
            onClick={loginPageHandler}
            style={{
              display: "flex",
              margin: "auto",
              backgroundColor: "#8787ff",
              border: 0,
              borderRadius: "2px",
              cursor: "pointer",
            }}
          >
            Log-in/sign-up
          </button>
        </Card>
      )}
    </Box>
  );
};

export default MailBoxClient;
