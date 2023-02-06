import React from "react";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import "./SideBar.css";
import SideBarOptions from "./SideBarOptions";
import MailIcon from "@mui/icons-material/Mail";
import SendIcon from "@mui/icons-material/Send";
import { useDispatch } from "react-redux";
import { mailActions } from "../store/mailSlice";

const Sidebar = () => {
  const dispatch = useDispatch();
  const composePageOpenHandler = () => {
    dispatch(mailActions.showCompose());
  };
  const showOutboxHandler = () => {
    dispatch(mailActions.showOutbox());
  };
  const showInboxHandler = () => {
    dispatch(mailActions.showInbox());
  };
  return (
    <div className="sidebar">
      <Button
        startIcon={<AddIcon />}
        className={"compose__btn"}
        onClick={composePageOpenHandler}
      >
        Compose
      </Button>
      <SideBarOptions
        Icon={<MailIcon />}
        title="Inbox"
        number="224"
        onClick={showInboxHandler}
      />
      <SideBarOptions
        Icon={<SendIcon />}
        title="Outbox"
        number="224"
        onClick={showOutboxHandler}
      />
    </div>
  );
};
export default Sidebar;
