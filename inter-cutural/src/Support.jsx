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
          <div className="groupLeft">
            <div className="grouplink">
              <a href="https://fb.me/g/p_NEKXN42Y6J95rfaC/nDnddyQw?ref=share">
                <img
                  src="https://apkpure.online/wp-content/uploads/2022/08/FB-f-Logo__blue_512.png"
                  alt=""
                  className="fbgroup"
                />
              </a>
              <p>For Intercultural Couples</p>
            </div>
            <div className="grouplink">
              <a href="https://www.facebook.com/groups/634569884234461/?ref=share">
                <img
                  src="https://apkpure.online/wp-content/uploads/2022/08/FB-f-Logo__blue_512.png"
                  alt=""
                  className="fbgroup"
                />
              </a>
              <p>
                For those who are single and who are interested in dating
                interculturally
              </p>
            </div>
            <div className="grouplink">
              <a href="https://www.facebook.com/groups/thekingspalace1/?ref=share">
                <img
                  src="https://apkpure.online/wp-content/uploads/2022/08/FB-f-Logo__blue_512.png"
                  alt=""
                  className="fbgroup"
                />
              </a>
              <p>
                Support Group for men only. <br /> NB: Monthly membership fee.
              </p>
            </div>
          </div>
          <div className="groupRight">
            <iframe
              src="/help.mp4"
              height="300px"
              width="500px"
              className="iframe"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Support;
