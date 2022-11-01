import "./latestActivities.scss";
import { recomemendedPages } from "../../data";
import LatestActivity from "../../components/latestActivity/LatestActivity";

const LatestActivites = () => {
  return (
    <div className="latestActivites">
      <div className="heading">
        <div className="first">Latest Activities</div>
        <div className="second">
          <span className="material-icons">
            <i className="fa-solid fa-ellipsis-vertical"></i>
          </span>
        </div>
      </div>
      <div className="body">
        {recomemendedPages.map((d) => (
          <LatestActivity key={d.id} d={d} />
        ))}
      </div>
    </div>
  );
};

export default LatestActivites;
