import "./sidebar.scss";
import { Person, Mail } from "@material-ui/icons";

export default function Sidebar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"side " + (menuOpen && "active")}>
      <ul>
        <li>
          <a href="#intro" onClick={() => setMenuOpen(!menuOpen)}>
            Home
          </a>
        </li>
        <li>
          <a href="#portfolio" onClick={() => setMenuOpen(!menuOpen)}>
            Portfolio
          </a>
        </li>
        <li>
          <a href="#works" onClick={() => setMenuOpen(!menuOpen)}>
            Stacks
          </a>
        </li>
        <li>
          <a href="#testimonial" onClick={() => setMenuOpen(!menuOpen)}>
            Testimonials
          </a>
        </li>
        <li>
          <a href="#contact" onClick={() => setMenuOpen(!menuOpen)}>
            Contact
          </a>
        </li>
        <hr />
        <li className="itemContainer">
          <Person />
          <span>
            <a href="tel:+2349066128757">+2349066128757</a>,{" "}
            <a href="tel:+22966561073">+22966561073</a>
          </span>
        </li>
        <li className="itemContainer">
          <Mail />
          <span>
            <a href="mailto:adevictor98@gmail.com">adevictor98@gmail.com</a>
          </span>
        </li>
      </ul>
    </div>
  );
}
