import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import HomePage from "./HomePage";
import { userProfile } from "./reducer/asyncAuthReducer";

function App() {
  const userData = useSelector((state) => state.user.userData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userProfile());
  }, []);
  return (
    <>
      <HomePage />
    </>
  );
}

export default App;
