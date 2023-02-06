import { createSlice } from "@reduxjs/toolkit";
import { getUserMailData } from "../reducer/asyncMailReducer";

const mailSlice = createSlice({
  name: "mail",
  initialState: {
    inboxShow: true,
    composeShow: false,
    outboxShow: false,
    showMailPage: false,
    oneMail: undefined,
    inbox: [],
    outbox: [],
  },
  reducers: {
    showCompose(state, action) {
      state.composeShow = !state.composeShow;
    },
    showOutbox(state, action) {
      state.outboxShow = true;
      state.inboxShow = false;
    },
    showInbox(state, action) {
      state.inboxShow = true;
      state.outboxShow = false;
    },
    showMailPage(state, action) {
      state.showMailPage = true;
      const mail = action.payload;
      state.oneMail = mail;
    },
    hideMailPage(state, action) {
      state.showMailPage = false;
    },
    deleteInboxMail(state, action) {
      const id = action.payload;
      state.inbox = state.inbox.filter((item) => item.id != id);
    },
    deleteOutboxMail(state, action) {
      const id = action.payload;
      state.outbox = state.outbox.filter((item) => item.id != id);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUserMailData.fulfilled, (state, action) => {
      const response = action.payload;
      const outBoxData = response.outbox;
      const inBoxData = response.inbox;
      const outBoxMailList = [];
      const inBoxMailList = [];
      state.inbox = [];
      state.outbox = [];
      for (const key in outBoxData) {
        const newMail = outBoxData[key];
        outBoxMailList.push({
          key: key,
          id: newMail.id,
          message: newMail.message,
          subject: newMail.subject,
          to: newMail.to,
          timeStamp: newMail.timeStamp,
          date: newMail.date,
          from: newMail.from,
        });
      }
      state.outbox = outBoxMailList;
      for (const key in inBoxData) {
        const newMail = inBoxData[key];
        inBoxMailList.push({
          key: key,
          id: newMail.id,
          message: newMail.message,
          subject: newMail.subject,
          from: newMail.from,
          timeStamp: newMail.timeStamp,
          date: newMail.date,
          isRead: newMail.isRead,
        });
      }
      state.inbox = inBoxMailList;
      console.log(outBoxMailList, inBoxMailList);
    });
  },
});
export default mailSlice;
export const mailActions = mailSlice.actions;
