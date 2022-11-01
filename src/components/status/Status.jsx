import "./status.scss";

const Status = ({ d }) => {
  return (
    <>
      {d.post && (
        <div className="status">
          <div className="img">
            <img src={d.post} alt="" />
          </div>
          <div className="details">
            <div className="img">
              <img src={d.pp} alt="" />
            </div>
            <div className="likes">
              <i className="fa-regular fa-heart"></i>
              <span>43</span>
              <i className="fa-regular fa-comment"></i>
              <span>12</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Status;
