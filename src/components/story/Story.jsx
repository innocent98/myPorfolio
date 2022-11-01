import { useState } from "react";
import "./story.scss";

const Story = ({ d }) => {
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
    <div className="story">
      <section key={d.id}>
        <div className="first">
          <div className="img">
            <img
              src={d.pp}
              alt=""
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            />
          </div>
          <div className="wrapper">
            <div className="title">{d.name}</div>
            <p className="cat">{d.date}</p>
          </div>
        </div>
        <div className="second">
          <span className="material-icons">
            {/* <i className="fa-regular fa-eye"></i> */}
          </span>
        </div>
      </section>

      {data.name && (
        <div className={"widget " + (loading && "loading")}>
          {loading && <div className="spin"></div>}
          <div className="coverImage">
            <img src={data.post} alt="" />
            <img src={data.pp} alt="" className="img" />
          </div>
          <div className="title">{data.name}</div>
          <p className="cat">
            <i className="fa-solid fa-handshake"></i>
            <span>{data.mutualF} mutual friends</span>
          </p>
          <p className="cat">
            <i className="fa-solid fa-location-dot"></i>
            <span>{data.address}</span>
          </p>
          <p className="followers">
            <i className="fa-solid fa-user-group"></i>
            <span>{data.followers} Followers</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default Story;
