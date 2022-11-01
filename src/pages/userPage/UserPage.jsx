import { Link } from "react-router-dom";
import PagePosts from "../pagePosts/PagePosts";
import "./userPage.scss";

const UserPage = () => {
  return (
    <div className="userPage">
      <div className="picture">
        <div className="coverPicture">
          <img
            src="https://friendkit.cssninja.io/assets/img/demo/bg/4.jpg"
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
              src="https://www.recipetineats.com/wp-content/uploads/2020/05/Pepperoni-Pizza_5-SQjpg.jpg"
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
                Community
              </Link>
              <Link to="" className="link">
                Photos
              </Link>
            </div>
          </div>
          <div className="down">
            <div className="left">
              <h1>148k</h1>
              <p>FOLLOWERS</p>
            </div>
            <div className="mid">
              <h1>Fast Pizza</h1>
              <p>Pizza & Fast Food</p>
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
            Info
            <i className="fa-solid fa-ellipsis-vertical"></i>
          </div>
          <div className="right">
            <div className="posts">Post</div>
            <div className="but">
              <Link to="" className="link">
                Recent
              </Link>
              <Link to="" className="link">
                Popular
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="pageContent">
        <div className="left">
          <div className="community">
            <div className="title">Community</div>
            <div className="row">
              <div className="col">
                <span className="material-icons">people</span>
                <span className="txt">Invite your friends to follow this page</span>
              </div>
              <div className="col">
                <span className="material-icons">thumb_up</span>
                <span className="txt">150K people like this page</span>
              </div>
              <div className="col">
                <span className="material-icons">cast_connected</span>
                <span className="txt">90K people are following this</span>
              </div>
            </div>
          </div>
          <div className="community">
            <div className="title">About</div>
            <div className="row">
              <div className="col">
                <span className="material-icons"><i class="fa-regular fa-comment"></i></span>
                <span className="txt">Send a Message</span>
              </div>
              <div className="col">
                <span className="material-icons">local_mall</span>
                <span className="txt">Commercial Company</span>
              </div>
              <div className="col">
                <span className="material-icons">drive_file_rename_outline</span>
                <span className="txt">Suggest Changes</span>
              </div>
            </div>
          </div>
          <div className="community">
            <div className="title">Security</div>
            <div className="row">
              <div className="col">
                {/* <span className="material-icons">settings_suggest</span> */}
                <span className="txt">
                  Idem iste, inquam, de voluptate quid sentit? Re mihi non aeque
                  satisfacit, et quidem locis pluribus. Consequens enim est et
                  post oritur, ut dixi.
                </span>
              </div>
              <div className="col">
                <span className="material-icons">flag</span>
                <span className="txt">Page created on May 6th 2019</span>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <PagePosts />
        </div>
      </div>
    </div>
  );
};

export default UserPage;
