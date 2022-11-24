import { useContext, useState } from "react";
import "./style.scss";
import axios from "axios";
import { loginCall } from "./context/apiCalls";
import { AuthContext } from "./context/AuthContext";

function RegisterScreen({ setRegisterScreen }) {
  const [picture, setPicture] = useState("");
  const [inputs, setInputs] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleTextChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (picture) {
      const data = new FormData();
      const fileName = Date.now() + picture.name;
      data.append("name", fileName);
      data.append("file", picture);
      inputs.picture = fileName;
      // console.log(inputs);
      try {
        await axios.post("https://tgwapi.herokuapp.com/api/upload", data);
      } catch (err) {}
    }
    try {
      await axios.post("https://tgwapi.herokuapp.com/api/auth/register", {
        ...inputs,
      });
      setIsLoading(false);
      setRegisterScreen(false);
    } catch (error) {
      alert(error.response.data);
    }
  };

  return (
    <div className="register">
      <div className="container">
        <span class="material-icons">person</span>
        <p className="sign-in">Sign up</p>
        <form className="row" onSubmit={handleSubmit}>
          <div className="col">
            <input
              type="text"
              placeholder="name"
              name="name"
              onChange={handleTextChange}
            />
          </div>
          <div className="col">
            <input
              type="text"
              placeholder="username"
              name="username"
              onChange={handleTextChange}
            />
          </div>
          <div className="col">
            <label htmlFor="picture">Profile picture</label>
            <input
              type="file"
              id="picture"
              accept="image/jpg,image/jpeg,image/png"
              style={{ display: "none" }}
              name="picture"
              onChange={(e) => setPicture(e.target.files[0])}
            />
          </div>
          <div className="col">
            <input
              type="password"
              placeholder="password"
              name="password"
              onChange={handleTextChange}
            />
          </div>
          <div className="col">
            <button className="submit" type="submit" disabled={isLoading}>
              {isLoading ? "Please wait..." : "Sign up"}
            </button>
          </div>
        </form>
        <p className="member">
          Already a member?{" "}
          <span onClick={() => setRegisterScreen(false)}>Login</span>
        </p>
      </div>
    </div>
  );
}

function LoginScreen({ setRegisterScreen }) {
  const [inputs, setInputs] = useState({});
  const { isFetching, dispatch } = useContext(AuthContext);

  const handleTextChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    loginCall( inputs , dispatch);
  };

  return (
    <div className="login">
      <div className="container">
        <span class="material-icons">person</span>
        <p className="sign-in">Sign in</p>
        <form onSubmit={handleSubmit} className="row">
          <div className="col">
            <input
              type="text"
              placeholder="username"
              name="username"
              onChange={handleTextChange}
            />
          </div>
          <div className="col">
            <input
              type="password"
              placeholder="password"
              name="password"
              onChange={handleTextChange}
            />
          </div>
          <div className="col">
            <button className="submit" type="submit" disabled={isFetching}>
              {isFetching ? "Please wait..." : "Sign in"}
            </button>
          </div>
        </form>
        <p className="member">
          Not a member?{" "}
          <span onClick={() => setRegisterScreen(true)}>Register</span>
        </p>
      </div>
    </div>
  );
}

function Login() {
  const [registerScreen, setRegisterScreen] = useState(false);
  return (
    <div className="login">
      {registerScreen ? (
        <RegisterScreen setRegisterScreen={setRegisterScreen} />
      ) : (
        <LoginScreen setRegisterScreen={setRegisterScreen} />
      )}
    </div>
  );
}

export default Login;
