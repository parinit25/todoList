import React, { useEffect, useState } from "react";
import "./Inbox.css";
import { useDispatch, useSelector } from "react-redux";
import {
  getUserMailData,
  userDeleteMail,
} from "../../reducer/asyncMailReducer";
import { mailActions } from "../../store/mailSlice";
import Badge from "@mui/material/Badge";

const Inbox = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user.userData);
  const inBoxMails = useSelector((state) => state.mail.inbox);
  const [userMail, setUserMail] = useState("");

  function getName(userData) {
    const userMailToBeSplit = userData.users[0].email.replace(".", "");
    const usermail = userMailToBeSplit.split("@");
    setUserMail(usermail[0]);
    console.log(usermail[0]);
    dispatch(getUserMailData(usermail[0]));
    dispatch(getUserMailData(usermail[0]));
  }
  useEffect(() => {
    if (userData) {
      setInterval(() => {
        getName(userData);
      }, 2000);
    }
  }, []);

  const emailPageviewHandler = (mail) => {
    dispatch(mailActions.showMailPage(mail));
  };
  const mailDeleteHandler = (key, id) => {
    dispatch(mailActions.deleteInboxMail(id));
    dispatch(userDeleteMail({ email: userMail, key: key }));
  };

  return (
    <div>
      <h1>Inbox</h1>
      {inBoxMails.length == 0 ? (
        <p>No messages present</p>
      ) : (
        inBoxMails.map((item) => (
          <div className="emailbody" key={item.id}>
            <div
              className="emailbody__left"
              onClick={() => emailPageviewHandler(item)}
            >
              <h4>{item.from}</h4>

              <div>
                {item.isRead && (
                  <Badge
                    color="primary"
                    variant="dot"
                    sx={{ marginLeft: 2 }}
                  ></Badge>
                )}
              </div>
            </div>
            <div
              className="emailbody__middle"
              onClick={() => emailPageviewHandler(item)}
            >
              <div className="emailbody__middle__message">
                <p>
                  <p>{item.subject}</p>
                </p>
              </div>
            </div>
            <div className="emailbody__right">
              <p>
                {item.date}&nbsp;&nbsp;{item.timeStamp} &nbsp;&nbsp;
                <button
                  style={{
                    backgroundColor: "red",
                    color: "white",
                    border: 0,
                    outline: 0,
                    cursor: "pointer",
                  }}
                  onClick={() => mailDeleteHandler(item.key, item.id)}
                >
                  x
                </button>
              </p>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Inbox;
