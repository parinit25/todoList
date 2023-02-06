import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiMailService } from "../services/asyncMailServices";

export const saveInboxEmail = createAsyncThunk(
  "saveUserEmail",
  async (userEmailDetails, thunkApi) => {
    const response = await apiMailService.inboxEails(userEmailDetails);
    console.log(response);
  }
);
export const saveOutboxEmail = createAsyncThunk(
  "saveOutboxEmail",
  async (userEmailDetails, thunkApi) => {
    const response = await apiMailService.outboxEmails(userEmailDetails);
    console.log(response);
  }
);
export const getUserMailData = createAsyncThunk(
  "getUserMailData",
  async (userEmail, thunkApi) => {
    const response = await apiMailService.getUserMails(userEmail);
    console.log(response);
    return response;
  }
);
export const userChangeMailReadStatus = createAsyncThunk(
  "userChangeMailReadStatus",
  async (obj, thnkApi) => {
    const response = await apiMailService.changeMailReadStatus(obj);
  }
);
export const userDeleteMail = createAsyncThunk(
  "userDeleteMail",
  async (obj) => {
    const response = await apiMailService.deleteInboxMail(obj);
  }
);
export const userOutboxDeleteMail = createAsyncThunk(
  "userOutboxDeleteMail",
  async (obj) => {
    const response = await apiMailService.deleteOutboxMail(obj);
  }
);
