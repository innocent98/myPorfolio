import axios from "axios";
import { useState, useEffect } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
// import { featured, web, mobile, api } from "../../dummyData";

export default function Portfolio({ isScrolled }) {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web app",
      title: "Web App",
    },
    {
      id: "mobile app",
      title: "Mobile App",
    },
    // {
    //   id: "rest api",
    //   title: "Rest APIs",
    // },
  ];

  useEffect(() => {
    switch (selected) {
      case "featured":
        const fetchFeatured = async () => {
          const res = await axios.get("/featured/featured");
          setData(res.data);
        };
        fetchFeatured();
        break;
      case "web app":
        const fetchWeb = async () => {
          const res = await axios.get("/web/web");
          setData(res.data);
        };
        fetchWeb();
        break;
      case "mobile app":
        const fetchMobile = async () => {
          const res = await axios.get("/mobile/mobile");
          setData(res.data);
        };
        fetchMobile();
        break;
      // case "rest api":
      //   const fetchApi = async () => {
      //     const res = await axios.get("/api/api");
      //     setData(res.data);
      //   };
      //   fetchApi();
      //   break;
      default:
        const fetchDefault = async () => {
          const res = await axios.get("/featured/featured");
          setData(res.data);
        };
        fetchDefault();
        break;
    }
  }, [selected]);
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
            key={item.id}
          />
        ))}
      </ul>
      <div className="productContainer">
        {data.map((d) => (
          <div className="item" key={d.id}>
            <div className="img">
              <img
                src={d.phone ? d.phone : d.laptop}
                className="holder"
                alt=""
              />
              <div className={d.phone ? "imgCont-phone" : "imgCont-laptop"}>
                <img className="productImg" src={d.img && d.img} alt="" />
              </div>
            </div>
            <div className="title">{d.title && d.title}</div>
            <p>{d.description}</p>
            <a href={d.link} target="_blank" rel="noreferrer">
              Learn more
            </a>
          </div>
        ))}
      </div>
      <div className="moreProject">
        {/* <p>See more project</p> */}
        <a href="https://github.com/innocent98/">
          <img src="assets/img/github-white.png" alt="" />
        </a>
      </div>
    </div>
  );
}
