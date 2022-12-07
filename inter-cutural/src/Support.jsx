import React from "react";
import { Link } from "react-router-dom";
import Topbar from "./Topbar";

function Support() {
  return (
    <div className="support">
      <Topbar />
      <div className="help">
        <div className="helpTitle">How Can We Help You Today?</div>
        <div className="helpJoin">Join our facebook groups</div>
        <div className="group">
          <Link to="">
            <img
              src="https://apkpure.online/wp-content/uploads/2022/08/FB-f-Logo__blue_512.png"
              alt=""
              className="fbgroup"
            />
          </Link>
          <Link to="">
            <img
              src="https://apkpure.online/wp-content/uploads/2022/08/FB-f-Logo__blue_512.png"
              alt=""
              className="fbgroup"
            />
          </Link>
          <Link to="">
            <img
              src="https://apkpure.online/wp-content/uploads/2022/08/FB-f-Logo__blue_512.png"
              alt=""
              className="fbgroup"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Support;
