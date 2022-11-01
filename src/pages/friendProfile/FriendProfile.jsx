import "./friendProfile.scss";
import { users } from "../../data";
import AddHomeWorkOutlinedIcon from "@mui/icons-material/AddHomeWorkOutlined";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import { useState } from "react";
import { ClipLoader } from "react-spinners";
// import { useStaPte } from "react";
// import { PuffLoader } from "react-spinners";

const FriendProfile = () => {
  // const [loading, setLoading] = useState(false);
  // const [d, setD] = useState(false)

  // const handleMouseOver = () => {
  //   setLoading(true);
  //   setD(true)
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 2000);
  // };

  const [edit, setEdit] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleEdit = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setEdit(false);
    }, 2000);
  };

  return (
    <div className="friendProfile">
      <div className="left">
        <div className="profile">
          <div className="img">
            <img
              src="https://friendkit.cssninja.io/assets/img/avatars/jenna.png"
              alt=""
            />
          </div>
          <div className="details">
            <div className="detail">
              <h3>741</h3>
              <span>Posts</span>
            </div>
            <div className="detail">
              <h3>220k</h3>
              <span>Followers</span>
            </div>
            <div className="detail">
              <h3>400</h3>
              <span>Following</span>
            </div>
          </div>
          <div className="followBtn">Follow</div>
        </div>

        <div className="about">
          <div className="name">Jenna Davis</div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quis aperiam perferendis nam eaque dolorem sunt veniam officia?
            Consectetur natus assumenda aperiam corrupti maiores explicabo ipsum
            similique quaerat saepe iure?
          </p>
          <span>
            Profile link: <a href="/">social.com/jennadavis</a>
          </span>
        </div>

        <div className="overviews">
          <div className="overview">
            <AddHomeWorkOutlinedIcon className="icon" />
            <div className="case">
              <p>
                Works at <span>Internal Revenue</span>
              </p>
              {!edit && (
                <div className="edit" onClick={() => setEdit(true)}>
                  Edit your professional info
                </div>
              )}
              {edit && (
                <>
                  <input type="text" autoFocus />
                  {!loading ? (
                    <ArrowForwardOutlinedIcon
                      className="arrow"
                      onClick={handleEdit}
                    />
                  ) : (
                    <ClipLoader color="#3498DB" size={16} className="arrow clip" />
                  )}
                </>
              )}
            </div>
          </div>

          <div className="overview">
            <SchoolOutlinedIcon className="icon" />
            <div className="case">
              <p>
                Studied at <span>No University</span>
              </p>
              {!edit && (
                <div className="edit" onClick={() => setEdit(true)}>
                  Edit your education info
                </div>
              )}
              {edit && (
                <>
                  <input type="text" autoFocus />
                  {!loading ? (
                    <ArrowForwardOutlinedIcon
                      className="arrow"
                      onClick={handleEdit}
                    />
                  ) : (
                    <ClipLoader color="#3498DB" size={16} className="arrow clip" />
                  )}
                </>
              )}
            </div>
          </div>

          <div className="overview">
            <HomeOutlinedIcon className="icon" />
            <div className="case">
              <p>
                Lives in <span>Oduduwa South</span>
              </p>
              {!edit && (
                <div className="edit" onClick={() => setEdit(true)}>
                  Edit your location
                </div>
              )}
              {edit && (
                <>
                  <input type="text" autoFocus />
                  {!loading ? (
                    <ArrowForwardOutlinedIcon
                      className="arrow"
                      onClick={handleEdit}
                    />
                  ) : (
                    <ClipLoader color="#3498DB" size={16} className="arrow clip" />
                  )}
                </>
              )}
            </div>
          </div>

          <div className="overview">
            <MoreHorizOutlinedIcon className="icon" />
            <div className="case">
              <p>
                Marital status <span>Single</span>
              </p>
              {!edit && (
                <div className="edit" onClick={() => setEdit(true)}>
                  Edit your situation
                </div>
              )}
              {edit && (
                <>
                  <input type="text" autoFocus />
                  {!loading ? (
                    <ArrowForwardOutlinedIcon
                      className="arrow"
                      onClick={handleEdit}
                    />
                  ) : (
                    <ClipLoader color="#3498DB" size={16} className="arrow clip" />
                  )}
                </>
              )}
            </div>
          </div>
        </div>

        <div className="friends">
          {users.map((u) => (
            <div className="img">
              <img alt="" src={u.pp} />
              {/* {d && <div className={"widget " + (loading && "loading")}>
                <div className="coverImage">
                  <img src={u.post} alt="" />
                  <img src={u.pp} alt="" className="img" />
                  {loading && (
                    <PuffLoader
                      color="#3498DB"
                      loading={loading}
                      size={30}
                      className="spin"
                    />
                  )}
                </div>
                <div className="title">{u.name}</div>
                <p className="cat">
                  <i className="fa-solid fa-location-dot"></i>
                  <span>{u.address}</span>
                </p>
                <p className="followers">
                  <i className="fa-solid fa-user-group"></i>
                  <span>{u.followers} Followers</span>
                </p>
              </div>} */}
            </div>
          ))}
        </div>
      </div>

      <div className="right">
        <div className="img">
          <img
            src="https://friendkit.cssninja.io/assets/img/demo/unsplash/39.jpg"
            alt=""
          />
        </div>
        <div className="img">
          <img
            src="https://friendkit.cssninja.io/assets/img/demo/unsplash/40.jpg"
            alt=""
          />
        </div>
        <div className="img">
          <img
            src="https://friendkit.cssninja.io/assets/img/demo/unsplash/47.jpg"
            alt=""
          />
        </div>
        <div className="img">
          <img
            src="https://friendkit.cssninja.io/assets/img/demo/unsplash/43.jpg"
            alt=""
          />
        </div>
        <div className="img">
          <img
            src="https://friendkit.cssninja.io/assets/img/demo/unsplash/46.jpg"
            alt=""
          />
        </div>
        <div className="img">
          <img
            src="https://friendkit.cssninja.io/assets/img/demo/unsplash/12.jpg"
            alt=""
          />
        </div>
        <div className="img">
          <img
            alt=""
            src="https://friendkit.cssninja.io/assets/img/demo/unsplash/34.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default FriendProfile;
