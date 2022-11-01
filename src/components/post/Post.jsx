import { useState } from "react";
import InputEmoji from "react-input-emoji";
import "./post.scss";
import { PuffLoader } from "react-spinners";

const Post = ({ u }) => {
  const [loading, setLoading] = useState(false);
  const [like, setLike] = useState(false);
  const [comment, setComment] = useState(false);

  const [dat, setD] = useState({});
  const handleMouseOver = () => {
    setLoading(true);
    setD(u);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  const handleMouseOut = () => {
    setD({});
  };

  const [text, setText] = useState("");

  function handleOnEnter(text) {
    console.log("enter", text);
  }

  return (
    <div className="post">
      <div className="wrapper">
        <div className="top">
          <div
            className="img"
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            <img src={u.pp} alt="" />
            <div className="dateTime">
              <div className="title">{u.name}</div>
              <div className="date">{u.date}</div>
            </div>
          </div>
          <i className="fa-solid fa-ellipsis-vertical"></i>
        </div>
        <div className="middle">
          {u.text && <p>{u.text}</p>}
          <a href={`/home/${u.id}`}>
            {u.post && <img src={u.post} alt="" className="img-fluid" />}
          </a>
          {u.link && (
            <p className="linkText">
              <a href={u.link}>{u.linkText}</a>
            </p>
          )}
          <div className="link">
            <i
              onClick={() => setComment(true)}
              className="fa-regular fa-comment falink"
            ></i>
            <i className="fa-solid fa-retweet falink"></i>
            <i
              onClick={() => setLike(!like)}
              className={
                "fa-sharp fa-solid fa-heart falink heart " + (like && "like")
              }
            ></i>
          </div>
        </div>
        <div className="down">
          <div className="imgs">
            <img
              src="https://friendkit.cssninja.io/assets/img/avatars/dan.jpg"
              alt=""
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            />
            <img
              src="https://friendkit.cssninja.io/assets/img/avatars/david.jpg"
              alt=""
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            />
            <img
              src="https://friendkit.cssninja.io/assets/img/avatars/edward.jpeg"
              alt=""
            />
            <img
              src="https://friendkit.cssninja.io/assets/img/avatars/milly.jpg"
              alt=""
            />
          </div>
          <div className="liked">
            <div className="left">
              Milly, David <br />
              <span>and 23 more liked this</span>
            </div>
            <div className="right">
              <span>
                <i className="fa-regular fa-comment"></i>27
              </span>
              <span>
                <i className="fa-solid fa-retweet"></i>9
              </span>
              <span>
                <i className="fa-sharp fa-regular fa-heart"></i>3
              </span>
            </div>
          </div>
        </div>
      </div>

      {comment && (
        <>
          <div className="comment-section">
            <div className="title">
              <div className="txt">Comments (9)</div>
              <span onClick={() => setComment(false)}>
                <i className="fa-solid fa-xmark"></i>
              </span>
            </div>
            <div className="comments">
              <div className="img">
                <img
                  src="https://friendkit.cssninja.io/assets/img/avatars/dan.jpg"
                  alt=""
                />
              </div>
              <div className="comment-card">
                <div className="tit">Dan Walker</div>
                <div className="content">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </div>
                <div className="like">
                  <div className="left">
                    <span>
                      <i className="fa-regular fa-thumbs-up"></i>
                    </span>
                    <span>Reply</span>
                    <div className="time">28 min ago</div>
                  </div>
                  <div className="right">
                    {/* <span className="material-icons heart">favorite_border</span> */}
                    {/* <span>2</span> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="sub-comments">
              <div className="img">
                <img
                  src="https://friendkit.cssninja.io/assets/img/avatars/dan.jpg"
                  alt=""
                />
              </div>
              <div className="comment-card">
                <div className="tit">Dan Walker</div>
                <div className="content">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </div>
                <div className="like">
                  <div className="left">
                    <span>
                      <i className="fa-regular fa-thumbs-up"></i>
                    </span>
                    <span>Reply</span>
                    <div className="time">28 min ago</div>
                  </div>
                  <div className="right">
                    {/* <span className="material-icons heart">favorite_border</span> */}
                    {/* <span>2</span> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="sub-comments">
              <div className="img">
                <img
                  src="https://friendkit.cssninja.io/assets/img/avatars/dan.jpg"
                  alt=""
                />
              </div>
              <div className="comment-card">
                <div className="tit">Dan Walker</div>
                <div className="content">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </div>
                <div className="like">
                  <div className="left">
                    <span>
                      <i className="fa-regular fa-thumbs-up"></i>
                    </span>
                    <span>Reply</span>
                    <div className="time">28 min ago</div>
                  </div>
                  <div className="right">
                    {/* <span className="material-icons heart">favorite_border</span> */}
                    {/* <span>2</span> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="comments">
              <div className="img">
                <img
                  src="https://friendkit.cssninja.io/assets/img/avatars/dan.jpg"
                  alt=""
                />
              </div>
              <div className="comment-card">
                <div className="tit">Dan Walker</div>
                <div className="content">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </div>
                <div className="like">
                  <div className="left">
                    <span>
                      <i className="fa-regular fa-thumbs-up"></i>
                    </span>
                    <span>Reply</span>
                    <div className="time">28 min ago</div>
                  </div>
                  <div className="right">
                    {/* <span className="material-icons heart">favorite_border</span> */}
                    {/* <span>2</span> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="sub-comments">
              <div className="img">
                <img
                  src="https://friendkit.cssninja.io/assets/img/avatars/dan.jpg"
                  alt=""
                />
              </div>
              <div className="comment-card">
                <div className="tit">Dan Walker</div>
                <div className="content">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </div>
                <div className="like">
                  <div className="left">
                    <span>
                      <i className="fa-regular fa-thumbs-up"></i>
                    </span>
                    <span>Reply</span>
                    <div className="time">28 min ago</div>
                  </div>
                  <div className="right">
                    {/* <span className="material-icons heart">favorite_border</span> */}
                    {/* <span>2</span> */}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="write-comment">
            <div className="left">
              <img
                src="https://friendkit.cssninja.io/assets/img/avatars/jenna.png"
                alt=""
              />
            </div>
            <div className="right">
              <InputEmoji
                value={text}
                onChange={setText}
                cleanOnEnter
                onEnter={handleOnEnter}
                placeholder="Type a message"
              />
            </div>
          </div>
        </>
      )}

      {dat.name && (
        <div className={"widget " + (loading && "loading")}>
          {loading && (
            <PuffLoader
              color="#3498DB"
              loading={loading}
              size={30}
              className="spin"
            />
          )}
          <div className="coverImage">
            <img src={dat.post} alt="" />
            <img src={dat.pp} alt="" className="img" />
          </div>
          <div className="title">{dat.name}</div>
          <p className="cat">
            <i className="fa-solid fa-handshake"></i>
            <span>{dat.mutualF} mutual friends</span>
          </p>
          <p className="cat">
            <i className="fa-solid fa-location-dot"></i>
            <span>{dat.address}</span>
          </p>
          <p className="followers">
            <i className="fa-solid fa-user-group"></i>
            <span>{dat.followers} Followers</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default Post;
