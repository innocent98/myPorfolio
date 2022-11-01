import { Link } from "react-router-dom";
import "./explore.scss";

const Explore = ({explore, setExplore}) => {
  return (
    <div className="explore">
      <div className="top">Explore</div>
      <div className="components">
        <div className="wrapper">
          <Link onClick={()=>setExplore(false)} to="/home" className="page-link">
            <img src="/assets/img/clover.svg" alt="" />
            <p>Feed</p>
          </Link>
          <Link onClick={()=>setExplore(false)} to="/profile-friends" className="page-link">
            <img src="/assets/img/friends (1).svg" alt="" />
            <p>Friends</p>
          </Link>
          <Link onClick={()=>setExplore(false)} to="/videos" className="page-link">
            <img src="/assets/img/videos.svg" alt="" />
            <p>Videos</p>
          </Link>
          <Link onClick={()=>setExplore(false)} to="/page" className="page-link">
            <img src="/assets/img/tag-euro.svg" alt="" />
            <p>Page</p>
          </Link>
          <Link onClick={()=>setExplore(false)} to="/e-commerce" className="page-link">
            <img src="/assets/img/cart.svg" alt="" />
            <p>Commerce</p>
          </Link>
          <Link onClick={()=>setExplore(false)} to="/stories" className="page-link">
            <img src="/assets/img/chrono.svg" alt="" />
            <p>Stories</p>
          </Link>
          <Link onClick={()=>setExplore(false)} to="/" className="page-link">
            <img src="/assets/img/cake.svg" alt="" />
            <p>Groups</p>
          </Link>
          <Link onClick={()=>setExplore(false)} to="/" className="page-link">
            <img src="/assets/img/question.svg" alt="" />
            <p>Questions</p>
          </Link>
          <Link onClick={()=>setExplore(false)} to="/settings" className="page-link">
            <img src="/assets/img/settings.svg" alt="" />
            <p>Settings</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Explore;
