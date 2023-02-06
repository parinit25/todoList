import React, { useState } from "react";
import "./ComposeEmail.css";
import { useDispatch, useSelector } from "react-redux";
import {
  saveInboxEmail,
  saveOutboxEmail,
} from "../../reducer/asyncMailReducer";
import SendIcon from "@mui/icons-material/Send";
import { useNavigate } from "react-router-dom";
import { mailActions } from "../../store/mailSlice";

const ComposeEmail = () => {
  const [reciever, setReciever] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((state) => state.user.userData);
  const toBeSplitSenderMail = userData.users[0].email.replace(".", "");
  const senderMail = toBeSplitSenderMail.split("@");
  var currentTime = new Date();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var suffix = "AM";

  if (hours >= 12) {
    suffix = "PM";
    hours = hours - 12;
  }
  if (hours == 0) {
    hours = 12;
  }

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  var currentTimeString = hours + ":" + minutes + " " + suffix;
  let date = new Date();
  let options = { year: "numeric", month: "long", day: "numeric" };
  let formattedDate = date.toLocaleDateString("en-US", options);

  const recieverChangeHandler = (event) => {
    setReciever(event.target.value);
  };
  const subjectChangeHandler = (event) => {
    setSubject(event.target.value);
  };
  const messageChangeHandler = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const toBeSplitReceiverMail = reciever.replace(".", "");
    const recieverMail = toBeSplitReceiverMail.split("@");
    const newEmail = {
      id: Math.random(),
      from: senderMail[0],
      reciever: recieverMail[0],
      subject: subject,
      message: message,
      timeStamp: currentTimeString,
      date: formattedDate,
      isRead: true,
    };
    setMessage("");
    setReciever("");
    setSubject("");
    dispatch(saveInboxEmail(newEmail));
    dispatch(saveOutboxEmail(newEmail));
  };
  const closeComposeFormHandler = () => {
    dispatch(mailActions.showCompose());
  };

  return (
    <div className="compose">
      <div className="compose__header">
        <div className="compose__header__left">
          <span>New Message</span>
        </div>
        <div className="compose__header__right">
          <button onClick={closeComposeFormHandler}>x</button>
        </div>
      </div>
      <div className="compose__body">
        <div className="compose__bodyForm">
          <input
            type="email"
            placeholder="Reciepents"
            onChange={recieverChangeHandler}
            value={reciever}
          />
          <input
            type="text"
            placeholder="Subject"
            onChange={subjectChangeHandler}
            value={subject}
          />
          <textarea
            rows="20"
            onChange={messageChangeHandler}
            value={message}
            placeholder="Message"
          />
        </div>
      </div>
      <div className="compose__footer">
        <div className="compose__footerLeft">
          <button type="submit" onClick={handleSubmit}>
            <SendIcon sx={{ fontSize: "small" }} />
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ComposeEmail;
