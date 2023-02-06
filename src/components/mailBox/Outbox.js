import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { userOutboxDeleteMail } from "../../reducer/asyncMailReducer";
import { mailActions } from "../../store/mailSlice";
import "./Inbox.css";
const OutBox = () => {
  const dispatch = useDispatch();
  const outBoxMails = useSelector((state) => state.mail.outbox);
  const emailPageOpenHandler = (item) => {
    dispatch(mailActions.showMailPage(item));
  };
  const mailDeleteHandler = (email, key, id) => {
    dispatch(mailActions.deleteOutboxMail(id));
    const emailToBeSplit = email.replace(".", "");
    const userEmail = emailToBeSplit.split("@");
    console.log(userEmail[0],key);
    dispatch(userOutboxDeleteMail({ email: userEmail[0], key: key }));
  };
  return (
    <div>
      <h1>Outbox</h1>
      {outBoxMails.length == 0 ? (
        <p>No Sent Messages</p>
      ) : (
        outBoxMails.map((item) => (
          <div className="emailbody" key={item.id}>
            <div
              className="emailbody__left"
              onClick={() => emailPageOpenHandler(item)}
            >
              <h4>{item.to}</h4>
            </div>
            <div
              className="emailbody__middle"
              onClick={() => emailPageOpenHandler(item)}
            >
              <div className="emailbody__middle__message">
                <p>
                  <b>{item.message}</b>
                </p>
              </div>
            </div>
            <div className="emailbody__right">
              <p>
                {item.date}&nbsp;<b>{item.timeStamp}</b>
              </p>
              <button
                style={{
                  backgroundColor: "red",
                  color: "white",
                  border: 0,
                  outline: 0,
                  cursor: "pointer",
                  marginLeft: 10,
                }}
                onClick={() => mailDeleteHandler(item.from, item.key, item.id)}
              >
                x
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default OutBox;
