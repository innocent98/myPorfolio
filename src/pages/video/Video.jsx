import { useState } from "react";
import VideoLists from "../../components/videoLists/videoLists";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import MovieCreationOutlinedIcon from "@mui/icons-material/MovieCreationOutlined";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import "./video.scss";

const Video = () => {
  const [vProfile, setVProfile] = useState(false);

  return (
    <div className="userVideoComponent">
      <div className="userVideo">
        <div className={"left " + (vProfile && "vProfile")}>
          <div className="uProfile">
            <div className="img">
              <img
                src="https://friendkit.cssninja.io/assets/img/avatars/jenna.png"
                alt=""
              />
            </div>
            <div className="uName">Jenna Davis</div>
            <div className="location">Melbourne, AU</div>
            <div className="followers">
              <div className="following">
                <span className="foll">VIDEOS</span>
                <span>49</span>
              </div>
              <div className="following">
                <span className="foll">FOLLOWERS</span>
                <span>2.3K</span>
              </div>
            </div>
          </div>
          <hr />
          <div className="utilities">
            <div className="row">
              <div className="col">
                <span className="material-icons">
                  <LockOutlinedIcon />
                </span>
                <span>Privacy</span>
              </div>
              <div className="col">
                <span className="material-icons">
                  <MovieCreationOutlinedIcon />
                </span>
                <span>My Videos</span>
              </div>
              <div className="col">
                <span className="material-icons">
                  <DriveFolderUploadOutlinedIcon />
                </span>
                <span>Upload Video</span>
              </div>
              <div className="col">
                <span className="material-icons">
                  <WatchLaterOutlinedIcon />
                </span>
                <span>Watch Later</span>
              </div>
              {/* <div className="col">
                <span className="material-icons">info</span>
                <span>Help & Support</span>
              </div> */}
              <div className="col">
                <span className="material-icons">
                  <SettingsOutlinedIcon />
                </span>
                <span>Settings</span>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <section>
            <h3 onClick={() => setVProfile(!vProfile)}>
              <i class="fa-solid fa-bars"></i>
            </h3>
            <div className="top">
              <div className="highlights">
                <iframe
                  width="100%"
                  height="520"
                  src="https://www.youtube.com/embed/AhCmKtw5JCI"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
            <div className="body">
              <div className="statue">
                <VideoLists />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Video;
