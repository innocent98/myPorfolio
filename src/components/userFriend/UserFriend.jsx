import "./userFriend.scss";

const UserFriend = ({d}) => {
  return (
    <div className="userFriend">
      <div className="details">
        <input type="checkbox" name="feed" id="" className="check-box" />
        <i className="fa-solid fa-bell"></i>
        <div className="tag">{d.name}</div>
      </div>
    </div>
  );
};

export default UserFriend;

// it is an extra component of write story page
