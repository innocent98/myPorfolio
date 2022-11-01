import "./videoLists.scss";
import { users } from "../../data";
import VideoList from "../videoList/VideoList";

const VideoLists = () => {
  return (
    <div className="videoLists">
      {users.map((d) => (
        <VideoList d={d} key={d.id}/>
      ))}
    </div>
  );
};

export default VideoLists;
