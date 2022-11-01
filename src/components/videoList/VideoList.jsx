import { useState } from "react";
import LibraryAddOutlinedIcon from "@mui/icons-material/LibraryAddOutlined";
import "./videoList.scss";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const VideoList = ({ d }) => {
  const [preview, setPreview] = useState(false);
  const [watchLater, setWatchLater] = useState(false);
  const [saveToWatchLater, setsaveToWatchLater] = useState(false);

  const handleMouseOver = () => {
    setPreview(true);
  };

  const handleMouseOut = () => {
    setPreview(false);
  };

  const handleSaveToWatchLate = () => {
    setsaveToWatchLater(!saveToWatchLater);
    if (!saveToWatchLater) {
      toast.info("Video saved to watch later");
    } else {
      toast.info("Video removed from watch later");
    }
  };

  return (
    <>
      <ToastContainer position="bottom-right" />
      {d.post && (
        <div className="status">
          <div
            className="img"
            onMouseEnter={handleMouseOver}
            onMouseLeave={handleMouseOut}
          >
            <img src={d.post} alt="" className="img-fluid" />
          </div>
          {preview && (
            <div
              className="trailer"
              onMouseEnter={handleMouseOver}
              onMouseLeave={handleMouseOut}
            >
              <video
                src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                autoPlay={true}
                loop
              />
              <div className="trailerInfo">
                <span className="rated">+16</span>
                {/* <span>1990</span> */}
              </div>
            </div>
          )}

          <div className="details">
            <div className="img">
              <img src={d.pp} alt="" />
            </div>
            <div className="info">
              <div className="title">The Old Caban</div>
              <div className="name">Alex</div>
              <div className="views">2.2k views - 2 hours ago</div>
            </div>
            <div className="likes">
              <i className="fa-regular fa-heart"></i>
              <span>43</span>
              <span
                onMouseOver={() => setWatchLater(true)}
                onMouseOut={() => setWatchLater(false)}
                onClick={handleSaveToWatchLate}
              >
                <LibraryAddOutlinedIcon
                  onMouseOver={() => setWatchLater(true)}
                  onMouseOut={() => setWatchLater(false)}
                  className="save"
                />
              </span>
              {/* <i className="fa-regular fa-comment"></i>
              <span>12</span> */}
            </div>
            {watchLater && <div className="watch">Save to watch later</div>}
          </div>
        </div>
      )}
    </>
  );
};

export default VideoList;
