import { useState } from "react";
import { Link } from "react-router-dom";
import "./friendList.scss";
import {PuffLoader} from "react-spinners";


const FiendList = ({ d }) => {
  const [loading, setLoading] = useState(false);

  const [dat, setD] = useState({});
  const handleMouseOver = () => {
    setLoading(true);
    setD(d);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  const handleMouseOut = () => {
    setD({});
  };

  return (
    <div className="fiendList">
      <div className="wrapper">
        <Link to="/profile"><div
          className="img"
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          <img src={d.pp} alt="" />
        </div></Link>
        <i className="fa-solid fa-comment icon"></i>
        <Link to="" className="link">
          <div className="name">{d.name}</div>
          <div className="from">{d.address}</div>
        </Link>
      </div>

      {dat.name && (
        <div className={"widget " + (loading && "loading")}>
          <div className="coverImage">
            <img src={dat.post} alt="" />
            <img src={dat.pp} alt="" className="img" />
          {loading &&  <PuffLoader color="#3498DB" loading={loading} size={30} className="spin" />}
          </div>
          <div className="title">{dat.name}</div>
          {/* <p className="cat">
            <i className="fa-solid fa-handshake"></i>
            <span>{dat.mutualF} mutual friends</span>
          </p> */}
          <p className="cat">
            <i className="fa-solid fa-location-dot"></i>
            <span>{dat.address}</span>
          </p>
          <p className="followers">
            <i className="fa-solid fa-user-group"></i>
            <span>{dat.followers} Followers</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default FiendList;
