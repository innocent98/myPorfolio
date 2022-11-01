import SuggestedFriend from "../../components/suggestedFriend/SuggestedFriend";
import { users } from "../../data";
import "./suggestedFriends.scss";

const SuggestedFriends = () => {
  return (
    <div className="suggestedFriends">
      <div className="heading">
        <div className="first">Suggested Friends</div>
        <div className="second">
          <span className="material-icons">
            <i className="fa-solid fa-ellipsis-vertical"></i>
          </span>
        </div>
      </div>
      <div className="body">
        <div className="cont">
          {users.map((d) => (
            <SuggestedFriend key={d.id} d={d} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SuggestedFriends;
