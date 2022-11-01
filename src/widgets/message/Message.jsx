import "./message.scss";

const Message = () => {
  return (
    <div className="message">
      <div className="top">
        <div className="pp">
          <img
            src="https://friendkit.cssninja.io/assets/img/avatars/dan.jpg"
            alt=""
          />
        </div>
        <div className="details">
          <div className="name">Dan Walker</div>
          <div className="status">Online</div>
        </div>
      </div>

      <div className="body">
        <div className="ownCard">
          <div className="own">
            <div className="pp">
              <img
                src="https://friendkit.cssninja.io/assets/img/avatars/dan.jpg"
                alt=""
              />
            </div>
            <div className="msgCard">
              <div className="content">
                Hi Jenna! I made a new design, and i wanted to show it to you.
              </div>
              <div className="time">8:03am</div>
            </div>
          </div>
          <div className="own">
            <div className="pp">
              <img
                src="https://friendkit.cssninja.io/assets/img/avatars/dan.jpg"
                alt=""
              />
            </div>
            <div className="msgCard">
              <div className="content">
                Hi Jenna! I made a new design, and i wanted to show it to you.
              </div>
              <div className="time">8:03am</div>
            </div>
          </div>
          <div className="own">
            <div className="pp">
              <img
                src="https://friendkit.cssninja.io/assets/img/avatars/dan.jpg"
                alt=""
              />
            </div>
            <div className="msgCard">
              <div className="content">
                Hi Jenna! I made a new design, and i wanted to show it to you.
              </div>
              <div className="time">8:03am</div>
            </div>
          </div>
        </div>

        <div className="replyCard">
          <div className="reply">
            <div className="pp">
              <img
                src="https://friendkit.cssninja.io/assets/img/avatars/dan.jpg"
                alt=""
              />
            </div>
            <div className="msgCard">
              <div className="content">
                Hi Jenna! I made a new design, and i wanted to show it to you.
              </div>
              <div className="time">8:03am</div>
            </div>
          </div>
          <div className="reply">
            <div className="pp">
              <img
                src="https://friendkit.cssninja.io/assets/img/avatars/dan.jpg"
                alt=""
              />
            </div>
            <div className="msgCard">
              <div className="content">
                Hi Jenna! I made a new design, and i wanted to show it to you.
              </div>
              <div className="time">8:03am</div>
            </div>
          </div>
        </div>
      </div>

      <div className="input">
        <input type="text" />
      </div>
    </div>
  );
};

export default Message;
