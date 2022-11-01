import { users } from "../../data";
import FiendList from "../friendList/FiendList";
import "./friendLists.scss";

const FriendLists = () => {
  return (
    <div className="friendLists">
      {users.map((d) => (
        <FiendList d={d} key={d.id}/>
      ))}
    </div>
  );
};

export default FriendLists;
