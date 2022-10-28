// import axios from "axios";
import { useState, useRef, useContext } from "react";
import { Context } from "../../context/Context";
import { CircularProgress } from "@material-ui/core";
import "./login.scss";
import { axiosInstance } from "../../config";

export default function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axiosInstance.post("/auth/login", {
        email: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err });
      setError(true);
    }
  };
  
  return (
    <div className="login">
      <form className="row g-3" onSubmit={handleSubmit}>
        <div className="col-md-4">
          <label htmlFor="email" className="form-label"></label>
          <input
            type="text"
            className="form-control shadow-none"
            id="email"
            required
            placeholder="email"
            ref={userRef}
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="password" className="form-label"></label>
          <input
            type="password"
            className="form-control shadow-none"
            id="password"
            required
            placeholder="password"
            ref={passwordRef}
          />
        </div>
        <button className="submit-button" type="submit" disabled={isFetching}>
          {isFetching ? <CircularProgress /> : "Login"}
        </button>
      </form>
      {error && (
        <span style={{ color: "red", textAlign: "center", marginTop: "20px" }}>
          Email or password incorrect
        </span>
      )}
    </div>
  );
}
