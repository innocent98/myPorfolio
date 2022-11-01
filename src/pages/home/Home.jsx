// import LatestActivites from "../../widgets/latestActivities/LatestActivies";
import PostStory from "../../widgets/postStory/PostStory";
import RecommendedPages from "../../widgets/recommendedPages/RecommendedPages";
import "./home.scss";
import Posts from "../posts/Posts";
import Stories from "../../widgets/stories/Stories";
import SuggestedFriends from "../../widgets/suggestedFriends/SuggestedFriends";

const Home = () => {
  return (
    <div className="home">
      <div className="wrapper">
        <div className="left">
          <RecommendedPages />
          {/* <LatestActivites /> */}
        </div>
        <div className="center">
          <PostStory />
          <Posts />
        </div>
        <div className="right">
          <Stories />
          <SuggestedFriends />
        </div>
      </div>
    </div>
  );
};

export default Home;
