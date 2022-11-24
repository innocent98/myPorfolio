import { useContext } from "react";
import { logout } from "./context/apiCalls";
import { AuthContext } from "./context/AuthContext";
import "./style.scss";

function Home() {
  const { user, dispatch } = useContext(AuthContext);
  const PF = "http://localhost:8300/images/";
  // console.log(PF)

  const handleLogout = () => {
    logout(dispatch);
  };
  return (
    <div className="home">
      <div className="container">
        <img className="img" src={PF + user.picture} alt="" />
        <div className="row">
          <div className="col">
            <input type="text" placeholder="name" readOnly value={user.name} />
          </div>
          <div className="col">
            <input
              type="text"
              placeholder="username"
              readOnly
              value={user.username}
            />
          </div>
          <div className="col">
            <button className="logout" onClick={handleLogout}>Logout</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
