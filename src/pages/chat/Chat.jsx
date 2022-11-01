import { Link } from "react-router-dom";
import "./chat.scss";

const Chat = () => {
  return (
    <div className="chat">
      <p>Message a friend</p>
      <div className="messageCard">
        <div className="messageDetails">
          <div className="pp">
            <img
              src="https://friendkit.cssninja.io/assets/img/avatars/nelly.png"
              alt=""
            />
          </div>
          <div className="details">
            <div className="name">
              <Link to="/" className="link">
                Nelly Schwartzy
              </Link>
            </div>
            <Link to="/message" className="message-link">
              <div className="recentMessage">
                I think we should meet near the Starbucks so we can get...
                Yesterday
              </div>
              <div className="status"></div>
            </Link>
          </div>
        </div>
        <div className="messageDetails">
          <div className="pp">
            <img
              src="https://friendkit.cssninja.io/assets/img/avatars/nelly.png"
              alt=""
            />
            <div className="circle"></div>
          </div>
          <div className="details">
            <div className="name">
              <Link to="/" className="link">
                Nelly Schwartzy
              </Link>
            </div>
            <div className="recentMessage">Start conversation...</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
