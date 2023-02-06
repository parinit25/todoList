class apiMailServices {
  static getinstance() {
    return new apiMailServices();
  }
  outboxEmails = async (emailDetails) => {
    console.log(emailDetails);
    const response = await fetch(
      `https://mail-box-client-aabec-default-rtdb.firebaseio.com/${emailDetails.from}/outbox/.json`,
      {
        method: "POST",
        body: JSON.stringify({
          id: emailDetails.id,
          to: emailDetails.reciever,
          subject: emailDetails.subject,
          message: emailDetails.message,
          timeStamp: emailDetails.timeStamp,
          date: emailDetails.date,
          from:emailDetails.from
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.ok) {
      return response.json().then((data) => {
        return data;
      });
    }
  };
  inboxEails = async (emailDetails) => {
    const response = await fetch(
      `https://mail-box-client-aabec-default-rtdb.firebaseio.com/${emailDetails.reciever}/inbox/.json`,
      {
        method: "POST",
        body: JSON.stringify({
          id: emailDetails.id,
          from: emailDetails.from,
          subject: emailDetails.subject,
          message: emailDetails.message,
          timeStamp: emailDetails.timeStamp,
          date: emailDetails.date,
          isRead: emailDetails.isRead,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.ok) {
      return response.json().then((data) => {
        return data;
      });
    }
  };
  getUserMails = async (userMail) => {
    const response = await fetch(
      `https://mail-box-client-aabec-default-rtdb.firebaseio.com/${userMail}/.json`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.ok) {
      return response.json().then((data) => {
        return data;
      });
    }
  };
  changeMailReadStatus = async (obj) => {
    const response = await fetch(
      `https://mail-box-client-aabec-default-rtdb.firebaseio.com/${obj.email}/inbox//${obj.key}.json`,
      {
        method: "PATCH",
        body: JSON.stringify({
          isRead: false,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  };
  deleteInboxMail = async (obj) => {
    const response = await fetch(
      `https://mail-box-client-aabec-default-rtdb.firebaseio.com/${obj.email}/inbox/${obj.key}.json`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  };
  deleteOutboxMail = async (obj) => {
    const response = await fetch(
      `https://mail-box-client-aabec-default-rtdb.firebaseio.com/${obj.email}/outbox/${obj.key}.json`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  };
}
export const apiMailService = apiMailServices.getinstance();
