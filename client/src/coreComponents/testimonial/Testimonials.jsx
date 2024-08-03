import "./testimonials.scss";

export default function Testimonials({ testimony }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div className="testimonials">
      <div className={testimony.featured ? "card featured" : "card"}>
        <div className="top">
          <a href={testimony.tw}>
            <img className="left" src="assets/img/tw.png" alt="" />
          </a>
          <img
            className="user"
            src={testimony.picture ? testimony.picture : PF + "avatar.png"}
            alt=""
          />
          <a href={testimony.ig}>
            <img className="right" src="assets/img/ig.png" alt="" />
          </a>
        </div>
        <div className="center">{testimony.testimony}</div>
        <div className="bottom">
          <h3>{testimony.lastName}</h3>
          <h4>{testimony.company}</h4>
        </div>
      </div>
    </div>
  );
}
