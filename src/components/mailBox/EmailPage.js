import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import { mailActions } from "../../store/mailSlice";
import { userChangeMailReadStatus } from "../../reducer/asyncMailReducer";

export default function EmailPage() {
  const dispatch = useDispatch();
  const mailPageboolean = useSelector((state) => state.mail.showMailPage);
  const mail = useSelector((state) => state.mail.oneMail);
  const userData = useSelector((state) => state.user.userData);
  console.log(userData);
  const userEmailToBeSplit = userData.users[0].email.replace(".", "");
  const email = userEmailToBeSplit.split("@");
  console.log(email[0]);
  const key = mail.key;
  console.log(key);

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = () => {
    dispatch(mailActions.hideMailPage());
  };

  const handleClose = () => {
    dispatch(mailActions.hideMailPage());
  };

  if (mail.from) {
    setTimeout(() => {
      dispatch(userChangeMailReadStatus({ email: email[0], key: key }));
    }, 2000);
  }

  return (
    <div>
      <Dialog
        fullScreen={fullScreen}
        open={mailPageboolean}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          Subject &nbsp; : <small>&nbsp;{mail.subject}</small>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Message &nbsp; : &nbsp; {mail.message}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <DialogContent>
            {mail.from && (
              <DialogContentText>
                From &nbsp;: &nbsp;{mail.from}
              </DialogContentText>
            )}
          </DialogContent>
          <DialogContent>
            {mail.to && (
              <DialogContentText>To &nbsp; : &nbsp;{mail.to}</DialogContentText>
            )}
          </DialogContent>
          <DialogContent>
            <DialogContentText>{mail.date}</DialogContentText>
          </DialogContent>
          <DialogContent>
            <DialogContentText>{mail.timeStamp}</DialogContentText>
          </DialogContent>
          <Button autoFocus onClick={handleClose}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
