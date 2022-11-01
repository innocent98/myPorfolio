import { useState } from "react";
import UserFriends from "../../components/userFriends/UserFriends";
import { ClipLoader } from "react-spinners";
import "./postStory.scss";

const PostStory = () => {
  const [activity, setActivity] = useState(false);
  const [story, setStory] = useState(false);
  const [labelValueFeed, setLabelValueFeed] = useState("Friends");
  const [labelValueStory, setLabelValueStory] = useState("Friends");
  const [viewMore, setViewMore] = useState(false);
  const [write, setWrite] = useState(false);
  const [preview, setPreview] = useState(null);

  // const [publish, setPublish] = useState(false)
  const [loading, setLoading] = useState(false);

  const handlePublish = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setWrite(false);
      return alert("Story posted");
    }, 2000);
  };

  return (
    <div className={"postStory " + (write && "disabled")}>
      <div className="top">
        <div className="first">
          <i className="fa-solid fa-pen"></i>
          <span>Publish</span>
        </div>
        <div className="second">
          <i className="fa-regular fa-image"></i>
          <span>Albums</span>
        </div>
        <div className="third">
          <i className="fa-solid fa-video"></i>
          <span>Video</span>
        </div>
        {write && (
          <div className="fourth" onClick={() => setWrite(false)}>
            <i className="fa-solid fa-multiply"></i>
          </div>
        )}
      </div>

      <div className="write">
        <div className="img">
          <img
            src="https://friendkit.cssninja.io/assets/img/avatars/jenna.png"
            alt=""
          />
        </div>
        <textarea
          type="text"
          placeholder="Write something about you..."
          onFocus={() => setWrite(true)}
        />
      </div>

      {preview && (
        <div className="preview">
          {write && (
            <>
              <img src={URL.createObjectURL(preview)} alt="" />
              <i
                onClick={() => setPreview(null)}
                class="fa-solid fa-xmark cancel"
              ></i>
            </>
          )}
        </div>
      )}

      <div className="down">
        <div className="first">
          <label htmlFor="file">
            <i className="fa-solid fa-camera"></i>
            <span>Media</span>
          </label>
          <input
            type="file"
            id="file"
            style={{ display: "none" }}
            onChange={(e) => setPreview(e.target.files[0])}
          />
        </div>
        <div className="second">
          <i className="fa-regular fa-face-smile smile"></i>
          <span>Activity</span>
        </div>
        <div className="third">...</div>
      </div>

      {write && (
        <>
          <div className={"extraComponents " + (viewMore && "increaseHeight")}>
            <div className="row">
              <div className="col">
                <div className="first">
                  <input
                    type="checkbox"
                    name="feed"
                    id=""
                    className="check-box"
                  />
                  <i className="fa-solid fa-bell"></i>
                  <div className="tag">Activity Feed</div>
                </div>
                <div className="second">
                  <div
                    className={"selectLable " + (activity && "invert")}
                    onClick={() => setActivity(!activity)}
                  >
                    <i className="fa-regular fa-face-smile"></i>
                    <div className="tag">{labelValueFeed}</div>
                    <i className="fa-solid fa-angle-down"></i>
                  </div>
                  <div className={activity ? "selectOption" : "feed"}>
                    <div
                      className="option"
                      onClick={() =>
                        setLabelValueFeed("Public") || setActivity(!activity)
                      }
                    >
                      <div className="first">
                        <i className="fa-solid fa-earth-americas"></i>
                      </div>
                      <div className="second">
                        <div className="title">Public</div>
                        <div className="subT">Anyone can see this.</div>
                      </div>
                    </div>
                    <div
                      className="option"
                      onClick={() =>
                        setLabelValueFeed("Friends") || setActivity(!activity)
                      }
                    >
                      <div className="first">
                        <i className="fa-solid fa-user-group"></i>
                      </div>
                      <div className="second">
                        <div className="title" defaultValue="Friends">
                          Friends
                        </div>
                        <div className="subT">Only friends can see this.</div>
                      </div>
                    </div>
                    {/* <div className="option">
                  <div className="first">
                    <i className="fa-solid fa-user"></i>
                  </div>
                  <div className="second">
                    <div className="title">Specific Friends</div>
                    <div className="subT">Don't show it to some firends</div>
                  </div>
                </div> */}
                    <div
                      className="option lock"
                      onClick={() =>
                        setLabelValueFeed("Only me") || setActivity(!activity)
                      }
                    >
                      <div className="first">
                        <i className="fa-solid fa-lock"></i>
                      </div>
                      <div className="second">
                        <div className="title" defaultValue="Only me">
                          Only me
                        </div>
                        <div className="subT">Only me can see this</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="first">
                  <input
                    type="checkbox"
                    name="story"
                    id=""
                    className="check-box"
                  />
                  <i className="storyIcon"></i>
                  <div className="tag">My Story</div>
                  <span>
                    <i className="fa-solid fa-plus"></i>
                  </span>
                </div>
                <div className="second">
                  <div
                    className={"selectLable " + (story && "invert")}
                    onClick={() => setStory(!story)}
                  >
                    <i className="fa-regular fa-face-smile"></i>
                    <div className="tag">{labelValueStory}</div>
                    <i className="fa-solid fa-angle-down"></i>
                  </div>
                  <div className={story ? "selectOption" : "story"}>
                    <div
                      className="option"
                      onClick={() =>
                        setLabelValueStory("Public") || setStory(!story)
                      }
                    >
                      <div className="first">
                        <i className="fa-solid fa-earth-americas"></i>
                      </div>
                      <div className="second">
                        <div className="title" defaultValue="Public">
                          Public
                        </div>
                        <div className="subT">Anyone can see this.</div>
                      </div>
                    </div>
                    <div
                      className="option"
                      onClick={() =>
                        setLabelValueStory("Friends") || setStory(!story)
                      }
                    >
                      <div className="first">
                        <i className="fa-solid fa-user-group"></i>
                      </div>
                      <div className="second">
                        <div className="title" defaultValue="Friends">
                          Friends
                        </div>
                        <div className="subT">Only friends can see this.</div>
                      </div>
                    </div>
                    {/* <div className="option">
                  <div className="first">
                    <i className="fa-solid fa-user"></i>
                  </div>
                  <div className="second">
                    <div className="title">Specific Friends</div>
                    <div className="subT">Don't show it to some firends</div>
                  </div>
                </div> */}
                    <div
                      className="option lock"
                      onClick={() =>
                        setLabelValueStory("Only me") || setStory(!story)
                      }
                    >
                      <div className="first">
                        <i className="fa-solid fa-lock"></i>
                      </div>
                      <div className="second">
                        <div className="title" defaultValue="Only me">
                          Only me
                        </div>
                        <div className="subT">Only me can see this</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {viewMore && (
                <>
                  <div className="col more">
                    <div className="first">Send a message</div>
                    <div className="second">
                      <i className="fa-sharp fa-solid fa-magnifying-glass search"></i>
                      <span>Create a group</span>
                    </div>
                  </div>

                  <div className="col">
                    <div className="first">
                      <UserFriends />
                    </div>
                    <div className="second"></div>
                  </div>
                </>
              )}
            </div>
          </div>

          <div className="bottom">
            {!viewMore && (
              <div className="first">
                <span className="material-icons">
                  <i className="fa-solid fa-ellipsis-vertical"></i>
                  <div className="view" onClick={() => setViewMore(true)}>
                    View More
                  </div>
                </span>
              </div>
            )}
            <div className="second">
              <button className="publish" onClick={handlePublish}>
                {loading ? <ClipLoader size={18} color="white" /> : "Publish"}
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default PostStory;
