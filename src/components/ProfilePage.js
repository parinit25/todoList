import { Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";
import styles from "./ProfilePage.module.css";
import Card from "./ui/Card";
import { useNavigate } from "react-router-dom";
import { userActions } from "../store/userSlice";
import { useSelector } from "react-redux";
import { userProfile } from "../reducer/asyncAuthReducer";

const ProfilePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.userData);
  const updateProfilePageOpenHandler = () => {
    navigate("/updateprofile");
  };
  useEffect(() => {
    dispatch(userProfile);
  }, []);
  const logOutHandler = () => {
    dispatch(userActions.userLogOut());
    navigate("/");
  };

  return (
    <Fragment>
      {user ? (
        <div className={styles.backgroundimage}>
          <Card>
            <img className={styles.img} src={user.users[0].photoUrl} />
            <div className={styles.userprofiletext}>
              Name - {user.users[0].displayName}
            </div>
            <div className={styles.userprofiletext}>
              E-mail address - {user.users[0].email}
            </div>
            <button
              onClick={updateProfilePageOpenHandler}
              className={styles.updateprofilebutton}
            >
              Update Profile
            </button>
            <button onClick={logOutHandler} className={styles.userlogoutbutton}>
              Log Out
            </button>
          </Card>
        </div>
      ) : (
        <div>Kindly log in</div>
      )}
    </Fragment>
  );
};
export default ProfilePage;
