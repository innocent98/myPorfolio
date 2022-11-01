import { useState } from "react";
import "./login.scss";
import { ClipLoader } from "react-spinners";

const Login = () => {
  const [loading, setLoading] = useState(false);

  const handeClick = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="login">
      <div className="left">
        <h1>Join an Exciting Social Experience.</h1>
      </div>

      <div className="center">
        <img src="/assets/img/friendkit-white.svg" alt="" />
      </div>

      <div className="right">
        <form className="row g-3">
          <div className="col-md-4">
            <div className="img">
              <div>
                <img src="/assets/img/jenna.png" alt="" />
              </div>
            </div>
            <span class="material-icons verified">verified_user</span>
          </div>
          <div className="col-md-4">
            <span class="material-icons account">account_circle</span>
            <input type="email" placeholder="johndoe@gmail" />
          </div>
          <div className="col-md-4">
            <span class="material-icons lock">lock</span>
            <input type="password" placeholder="********" id="" />
          </div>
          <div className="col-md-4">
            <button className="submit-button" onClick={handeClick}>
              {loading ? (
                <div className="spin">
                  <ClipLoader
                    color="#fff"
                    loading={loading}
                    size={15}
                    className="spin"
                  />
                </div>
              ) : (
                "Login"
              )}
            </button>
          </div>
        </form>
        <a href="/">Forgot password?</a>
      </div>
    </div>
  );
};

export default Login;
