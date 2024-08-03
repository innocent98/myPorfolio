import "./about.scss";

const About = ({ isScrolled }) => {

  return (
    <div className="about" id="about">
      <div className="left">
        <h2>About Me</h2>
        <p className={isScrolled && "fade-in"}>
          I am a Computer Scientist and a junior FULL-STACK software developer with 3
          years of IT experience and 2 years experience as a junior FULL-STACK
          developer. My Technical skills & Tools are Nodejs, Expressjs, MongoDb,
          MySQL, Reactjs, React native, Redux, Sass, WordPress, NPM, Git, Trello, Slack.
          Developing Web Application is my passion and my main career goal is to
          work with a tech organization that focuses on building Web
          Application. I am a skilled Web Developer who is passionate about
          writing computer programs to solve complex algorithms and using modern
          technologies to turn your design idea into an interactive and
          responsive Web Application to help grow your business faster.
        </p>
      </div>
      <div className="right">
        <h2>Services</h2>
        <div className={"wrapper " + (isScrolled && "scrolled")}>
          <div className="card" style={{ transform: `translateX(calc(-130vh + ${isScrolled}px))`, zIndex: "1" }}>
            <img
              src="https://endlessicons.com/wp-content/uploads/2013/11/html-tag-icon-614x460.png"
              alt=""
            />
            <h3>Web Development</h3>
            <p>
              Implementation of figma or psd design into an interactive Website
              with cross browser compatibility.
            </p>
          </div>
          <div className="card" style={{transform: `translateY(${isScrolled * 0.02}px`}}>
            <img src="https://www.freeiconspng.com/uploads/responsive-icon-1.png" alt="" />
            <h3>Responsiveness</h3>
            <p>
              Design that aims to make web page render well and be responsive to
              adapt to any screen size.
            </p>
          </div>
          <div className="card" style={{ transform: `translateX(calc(130vh - ${isScrolled}px))` }}>
            <img src="https://d338t8kmirgyke.cloudfront.net/icons/icon_pngs/000/017/535/original/api_4516824.png" alt="" />
            <h3>APIs</h3>
            <p>
              Creating logics that runs on a server which involves communicating
              with the database and manipulating data before passing it back to
              the browser and presenting to the client.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
