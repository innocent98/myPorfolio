import React from "react";
import UserFriend from "../userFriend/UserFriend";
import {users} from "../../data"

const UserFriends = () => {
  return (
    <div>
      {users.map((d) => (
        <UserFriend d={d} key={d.id} />
      ))}
    </div>
  );
};

export default UserFriends;
