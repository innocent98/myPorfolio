import Story from "../../components/story/Story";
import { users } from "../../data";
import "./stories.scss";

const Stories = () => {
  return (
    <div className="stories">
      <div className="heading">
        <div className="first">Stories</div>
        <div className="second">
          <span className="material-icons">
            <i className="fa-solid fa-ellipsis-vertical"></i>
          </span>
        </div>
      </div>
      <div className="body">
        <div className="cont">
          {users.map((d) => (
            <Story key={d.id} d={d} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stories;
