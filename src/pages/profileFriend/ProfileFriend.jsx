import { Link } from "react-router-dom";
import FriendLists from "../../components/friendLists/FriendLists";
import "./profileFriend.scss";

const ProfileFriend = () => {
  return (
    <div className="profileFriend">
      <div className="picture">
        <div className="coverPicture">
          <img
            src="https://friendkit.cssninja.io/assets/img/demo/bg/4.png"
            alt=""
            className="cImg"
          />
          <label htmlFor="coverImage" className="editCover">
            <span className="material-icons camera">photo_camera</span>
            <span className="editTxt">Edit cover image</span>
          </label>
          <input type="file" id="coverImage" style={{ display: "none" }} />
          <div className="profilePicture">
            <img
              src="https://friendkit.cssninja.io/assets/img/avatars/jenna.png"
              alt=""
            />
          </div>
          {/* <h2>Jenna Davis</h2> */}
          <input
            type="file"
            name="picture"
            id="file"
            style={{ display: "none" }}
          />
          <label htmlFor="file" className="pictureLabel">
            <span className="material-icons">add</span>
          </label>
        </div>

        <div className="timeline">
          <div className="top">
            <div className="left">
              <Link to="" className="link">
                Timeline
              </Link>
              <Link to="" className="link">
                About
              </Link>
            </div>
            <div className="right">
              <Link to="" className="link">
                Friends
              </Link>
              <Link to="" className="link">
                Photos
              </Link>
            </div>
          </div>
          <div className="down">
            <div className="left">
              <h1>3.4k</h1>
              <p>FRIENDS</p>
            </div>
            <div className="mid">
              <h1>Jenna Davis</h1>
              <p>Media Influencer</p>
            </div>
            <div className="right">
              {/* <span class="material-icons">history_toggle_off</span> */}
              <Link to="" className="link">
                History
              </Link>
            </div>
          </div>
        </div>

        <div className="search">
          <div className="left">
            All Friends
            <i className="fa-solid fa-angle-down"></i>
          </div>
          <div className="right">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder="Search Friends" />
          </div>
        </div>
      </div>

      <div className="friendLst">
        <FriendLists />
      </div>
    </div>
  );
};

export default ProfileFriend;
