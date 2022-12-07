import { Link } from "react-router-dom";
import "./global.css";

function Topbar() {
  return (
    <div className="topbar">
      <div className="topLeft">
        <img src="king.png" alt="" className="logo" />
      </div>
      <div className="topRight">
        <ul className="topRightUl">
          <li><Link to='/' className="link">Coach</Link></li>
          <li><Link to='/support' className="link">Support</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Topbar;
