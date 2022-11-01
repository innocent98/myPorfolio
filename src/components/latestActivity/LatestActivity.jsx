import { useState } from "react";
import "./latestActivity.scss";

const LatestActivity = ({ d }) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  const handleMouseOver = () => {
    setLoading(true);
    setData(d);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  const handleMouseOut = () => {
    setData({});
  };

  return (
    <div className="latestActivity">
      <section key={d.id}>
        <div className="first">
          <div className="img">
            <img
              src={d.img}
              alt=""
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            />
          </div>
          <div className="wrapper">
            <div className="title">{d.title}</div>
            <p className="cat">{d.cat}</p>
          </div>
        </div>
        <div className="second">
          <span className="material-icons">
            <i className="fa-regular fa-eye"></i>
          </span>
        </div>
      </section>

      {data.title && (
        <div className={"widget " + (loading && "loading")}>
          {loading && <div className="spin"></div>}
          <div className="coverImage">
            <img src={data.coverImg} alt="" />
            <img src={data.img} alt="" className="img" />
          </div>
          <div className="title">{data.title}</div>
          <p className="cat">
            <i className="fa-solid fa-tag"></i>
            <span>{data.cat}</span>
          </p>
          <p className="followers">
            <i className="fa-solid fa-user-group"></i>
            <span>{data.followers}Followers</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default LatestActivity;
