import RecommendedPage from "../../components/recommendedPage/RecommendedPage";
import "./recommendedPages.scss";
import "react-toastify/dist/ReactToastify.css";
import { recomemendedPages } from "../../data";

const RecommendedPages = () => {
  return (
    <div className="recommendedPages">
      <div className="heading">
        <div className="first">Recommended Pages</div>
        <div className="second">
          <span className="material-icons">
            <i className="fa-solid fa-ellipsis-vertical"></i>
          </span>
        </div>
      </div>
      <div className="body">
        {recomemendedPages.map((d) => (
          <RecommendedPage key={d.id} d={d} />
        ))}
      </div>
    </div>
  );
};

export default RecommendedPages;
