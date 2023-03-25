import "./intro.scss";
import { init } from "ityped";
import { KeyboardArrowDown } from "@material-ui/icons";
import { useEffect, useRef } from "react";

export default function Intro({isScrolled}) {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 50,
      strings: ["Web Applications", "Mobile Applications", "REST APIs"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left" style={{transform: `translateY(${isScrolled * 0.3}px`}}>
        <div className="wrapper">
          <h2>
            Hi there, I'm <span>Victor Oluwatosin</span>
          </h2>
          {/* <p>
            A highly skilled, passionate and motivated Web Application Developer
            who deliver best quality, interactive and scalable sofetware(s) for
            your businesses
          .</p> */}
          <h3>
            I Build <span ref={textRef}></span>
          </h3>
          <a
            href="https://docs.google.com/document/d/e/2PACX-1vQ2DockGe2hiuZWdqsIZbZ5XHO4i_fG01v3TQPYlSdNQlUlQSYDXGSd5h8d4iJ3Dq2KijJE6cQNTvGh/pub"
            target="_blank"
            className="cv"
            rel="noreferrer"
          >
            <span>DOWNLOAD MY CV</span>
            <img
              src="https://cdn.pixabay.com/photo/2016/12/18/13/45/download-1915753_960_720.png"
              alt=""
            />
          </a>
        </div>
        <a href="#about" className="keydown">
          <KeyboardArrowDown />
        </a>
      </div>
      <div className="right">
        <div className="imgCont" style={{transform: `translate(${isScrolled * 0.4}px, ${isScrolled * 0.7}px)`}}>
          <img src="assets/img/pic.jpeg" className="img-fluid" alt="" />
        </div>
      </div>
    </div>
  );
}
