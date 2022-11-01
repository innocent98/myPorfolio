import "./landing.scss";

const Landing = () => {
  return (
    <div className="landing">
      <div className="button">
        <a href="/login" className="sign-in">Login</a>
        <a href="/register" className="sign-up">Sign Up</a>
      </div>
      <div className="social">Social Network</div>
      <div className="wrapper">
        <div className="left">
          <img className="img-fluid" src="/assets/img/friends-cropped.svg" alt="" />
        </div>
        <div className="right">
          <div className="top"></div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
