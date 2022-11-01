import { useState } from "react";
import Statuses from "../../components/statuses/Statuses";
import StoryHighlights from "../../components/storyHighlights/StoryHighlights";
import "./userStory.scss";

const UserStory = () => {
  const [popup, setPopup] = useState(false);
  const [sProfile, setSProfile] = useState(false)

  return (
    <div className="userStoryComponent">
      <div className={"userStory " + (popup && "popup")}>
        <div className={"left " + (sProfile && "sProfile")}>
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
                <span className="foll">FOLLOWERS</span>
                <span>2.3K</span>
              </div>
              <div className="following">
                <span className="foll">FOLLOWING</span>
                <span>2.3K</span>
              </div>
            </div>
          </div>
          <hr />
          <div className="utilities">
            <div className="row">
              <div className="col">
                <span className="material-icons">lock</span>
                <span>Privacy</span>
              </div>
              <div className="col">
                <span className="material-icons">info</span>
                <span>Help</span>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="bar" onClick={()=>setSProfile(!sProfile)}>
            <i className="fa-solid fa-bars"></i>
          </div>
          <section>
            <h3>Stories</h3>
            <div className="top">
              <div className="userImg" onClick={() => setPopup(true)}>
                <div className="img">
                  <div className="imge"></div>
                  <i className="fa-solid fa-plus"></i>
                </div>
              </div>
              <div className="highlights">
                <StoryHighlights />
              </div>
            </div>
            <div className="body">
              <h3>Jenna Davis</h3>
              <div className="statue">
                <Statuses />
              </div>
            </div>
          </section>
        </div>
      </div>

      <div className={"newStoryPopup " + (popup && "popup")}>
        <div className="popupBk">
          <div className="top">
            <div className="pp">
              <div className="img">
                <img
                  src="https://friendkit.cssninja.io/assets/img/avatars/jenna.png"
                  alt=""
                />
              </div>
              <span>New Story</span>
            </div>
            <div className="cancel" onClick={() => setPopup(false)}>
              <i className="fa-solid fa-xmark"></i>
            </div>
          </div>
          <div className="popupCard">
            <label htmlFor="video" className="singleCard">
              <img
                src="https://friendkit.cssninja.io/assets/img/illustrations/stories/video-story.svg"
                alt=""
              />
              <div className="type">Video Story</div>
              <span>Upload a video file</span>
            </label>
            <label htmlFor="picture" className="singleCard">
              <img
                src="https://friendkit.cssninja.io/assets/img/illustrations/stories/post-story.svg"
                alt=""
              />
              <div className="type">Post Story</div>
              <span>Upload some photos</span>
            </label>
            <input
              type="file"
              name=""
              id="video"
              accept=".mp4"
              style={{ display: "none" }}
            />
            <input
              type="file"
              name=""
              id="picture"
              accept=".png, .jpg"
              style={{ display: "none" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserStory;
