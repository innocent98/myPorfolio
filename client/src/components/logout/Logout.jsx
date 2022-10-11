import { useContext } from "react";
import { Context } from "../../context/Context";
import "./logout.scss";

export default function Logout() {
  const { user, dispatch } = useContext(Context);
  const handleLogout = async () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className="logout">
      <button className="logout-button" onClick={handleLogout}>
        {user && "Logout"}
      </button>
    </div>
  );
}
