import { useState } from "react";
import { Link } from "react-router-dom";
// import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import "./topbar.scss";

const Topbar = ({ explore, setExplore }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearch, setIsSearch] = useState(false)

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  console.log(isScrolled);

  return (
    <div className="topbar">
      <div className="left">
        <div className="logo">
          {/* <img
            src="/assets/img/friendkit-bold.svg"
            alt=""
            className="img-fluid"
          /> */}
          SOCIAL
        </div>
        <div className="icons">
          <span
            onClick={() => setExplore(!explore)}
            className="material-icons right-icons"
          >
            apps
          </span>
          {/* <span className="material-icons heart">favorite_border</span> */}
          <span className="material-icons">
            <i className="fa-regular fa-bell"></i>
          </span>
          {/* <span className="material-icons active">
            <i className="fa-regular fa-envelope"></i>
          </span> */}
          <Link to="/chat">
            <span className="material-icons right-icons active">
              <div className="circle"></div>
              <i className="fa-regular fa-message"></i>
            </span>
          </Link>
        </div>
      </div>

      <div className="right">
        <i className="fa-sharp fa-solid fa-magnifying-glass search" onClick={()=>setIsSearch(!isSearch)}></i>
        <input type="search" name="" id="" placeholder="Search" className={isSearch && "isSearch"} />
        {/* <span className="material-icons">
          <div className="circle"></div>
          <i className=""><ShoppingCartOutlinedIcon/></i>
        </span> */}
        <div className="img">
          <div className="circle"></div>
          <img src="/assets/img/jenna.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
