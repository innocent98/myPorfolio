import "./displayPostPicture.scss";
import InputEmoji from "react-input-emoji";
import {Link} from "react-router-dom"
import { useState } from "react";

const DisplayPostPicture = () => {
  const [text, setText] = useState("");

  function handleOnEnter(text) {
    console.log("enter", text);
  }

  return (
    <div className="displayPostPicture">
      <div className="wrapper">
        <div className="first">
          <div className="img">
            <img
              src="https://friendkit.cssninja.io/assets/img/demo/unsplash/2.jpg"
              alt=""
              className="img-fluid"
            />
          </div>
        </div>
        <div className="second">
          <div className="row">
            <div className="col">
              <div className="left">
                <div className="img">
                  <img
                    src="https://friendkit.cssninja.io/assets/img/avatars/elise.jpg"
                    alt=""
                  />
                </div>
                <span className="details">
                  <div className="name">Elise Walker</div>
                  <div className="date">2 days ago</div>
                </span>
              </div>
              <div className="right">
                <div className="follow">Follow</div>
                <span>
                  <i className="fa-solid fa-ellipsis-vertical"></i>
                </span>
              </div>
            </div>

            <div className="col">
              <div className="left">
                <span className="material-icons heart">favorite_border</span>
                <span>3</span>
                <span>
                  <i className="fa-regular fa-comment falink"></i>
                </span>
                <span>5</span>
              </div>
              <div className="right">5 comments</div>
            </div>

            <hr />
            <div className="col">
              <div className="left">
                <i className="fa-regular fa-thumbs-up"></i>Like
              </div>
              <div className="right">
                <i className="fa-regular fa-comment falink"></i>Comment
              </div>
            </div>

            <div className="comment-section">
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
                      <span>Like</span>
                      <div className="time">28 min ago</div>
                    </div>
                    <div className="right">
                      <span className="material-icons heart">
                        favorite_border
                      </span>
                      <span>2</span>
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
                      <span>Like</span>
                      <div className="time">28 min ago</div>
                    </div>
                    <div className="right">
                      <span className="material-icons heart">
                        favorite_border
                      </span>
                      <span>2</span>
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
                      <span>Like</span>
                      <div className="time">28 min ago</div>
                    </div>
                    <div className="right">
                      <span className="material-icons heart">
                        favorite_border
                      </span>
                      <span>2</span>
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
                      <span>Like</span>
                      <div className="time">28 min ago</div>
                    </div>
                    <div className="right">
                      <span className="material-icons heart">
                        favorite_border
                      </span>
                      <span>2</span>
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
                      <span>Like</span>
                      <div className="time">28 min ago</div>
                    </div>
                    <div className="right">
                      <span className="material-icons heart">
                        favorite_border
                      </span>
                      <span>2</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col write-comment">
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
          </div>
        </div>

        <div className="third">
          <Link to="/home" className="link"><i class="fa-solid fa-xmark"></i></Link>
          <i class="fa-solid fa-share"></i>
        </div>
      </div>
    </div>
  );
};

export default DisplayPostPicture;
