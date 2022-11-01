import "./recommendedPage.scss";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RecommendedPage = ({ d }) => {
  const [data, setData] = useState({});
  const [bookmap, setBookmap] = useState(d.bookmap);
  const [loading, setLoading] = useState(false);

  const handleBookmap = () => {
    setBookmap(!bookmap);
    if (!bookmap) {
      toast.info("You followed this page");
    } else {
      toast.info("You unfollowed this page");
    }
  };

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
    <div className="recommendedPage">
      <ToastContainer position="bottom-right" />
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
          <span className="material-icons" onClick={handleBookmap}>
            {bookmap ? (
              <i className="fa-solid fa-check check"></i>
            ) : (
              <i className="fa-regular fa-heart"></i>
            )}
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

export default RecommendedPage;
