import { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { updateProfile } from "../reducer/asyncAuthReducer";
import Card from "./ui/Card";
import styles from "./UpdateProfile.module.css";

const UpdateProfile = () => {
  const dispatch = useDispatch();
  const [enteredName, setEnteredName] = useState("");
  const [enteredPicUrl, setEnteredPicUrl] = useState("");

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };
  const picUrlChangeHandler = (event) => {
    setEnteredPicUrl(event.target.value);
  };
  const updateProfileHandler = (event) => {
    event.preventDefault();
    dispatch(
      updateProfile({
        name: enteredName,
        picUrl: enteredPicUrl,
      })
    );
    setEnteredName("");
    setEnteredPicUrl("");
  };

  return (
    <Fragment>
      <Card>
        <form onSubmit={updateProfileHandler}>
          <label className={styles.label} htmlFor="name">
            Enter Your Name
          </label>
          <input
            className={styles.input}
            type="text"
            id="name"
            value={enteredName}
            onChange={nameChangeHandler}
          />
          <label className={styles.label} htmlFor="photo">
            Enter Your Photo Url
          </label>
          <input
            className={styles.input}
            type="text"
            id="photo"
            value={enteredPicUrl}
            onChange={picUrlChangeHandler}
          />
          <button className={styles.addExpenseButton} type="submit">
            Submit
          </button>
        </form>
      </Card>
    </Fragment>
  );
};
export default UpdateProfile;
