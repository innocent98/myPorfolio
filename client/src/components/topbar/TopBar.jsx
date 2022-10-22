import "./topbar.scss";
import { Person, Mail } from "@material-ui/icons";

export default function TopBar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="navLeft">
          <a href="#intro">
            <img
              src="/assets/img/InnoTech.png"
              alt=""
              className="logo img-fluid"
            />
          </a>
          <div className="itemContainer">
            <Person />
            <span>
              <a href="tel:+2349066128757">+2349066128757</a>,{" "}
              <a href="tel:+22966561073">+22966561073</a>
            </span>
          </div>
          <div className="itemContainer">
            <Mail />
            <span>
              <a href="mailto:adevictor98@gmail.com">adevictor98@gmail.com</a>
            </span>
          </div>
        </div>
        <div className="navRight">
          <div className="menu">
            <ul>
              <li>
                <a href="#intro">Home</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
              <li>
                <a href="#works">Stacks</a>
              </li>
              <li>
                <a href="#testimonial">Testimonials</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
