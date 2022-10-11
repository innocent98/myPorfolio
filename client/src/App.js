import "./app.scss";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import TopBar from "./components/topbar/TopBar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Works from "./components/works/Works";
import Testimonial from "./components/testimonial/Testimonial";
import Contact from "./components/contact/Contact";
import { useState } from "react";
import Sidebar from "./components/sidebar/Sidebar";
import Footer from "./components/footer/Footer";
import Upload from "./components/uploads/Upload";
import Login from "./components/login/Login";
import { useContext } from "react";
import { Context } from "./context/Context";
import SubmitTestimony from "./components/submitTestimmony/SubmitTestimony";
import About from "./components/about/About";

function App() {
  const { user } = useContext(Context);
  const [menuOpen, setMenuOpen] = useState(false);

   // parallax effect
   const [isScrolled, setIsScrolled] = useState(0);

   window.onscroll = () => {
     setIsScrolled(window.scrollY);
    //  console.log(isScrolled)
     return () => (window.onscroll);
   };

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div className="app">
            <TopBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <Sidebar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <div className="section">
              <Intro isScrolled={isScrolled} />
              <About isScrolled={isScrolled} />
              <Portfolio isScrolled={isScrolled} />
              <Works />
              <Testimonial />
              <Contact isScrolled={isScrolled} />
              <Footer />
            </div>
          </div>
        </Route>
        <Route path="/testimony">
          <SubmitTestimony />
        </Route>
        <Route path="/login">
          {user ? <Redirect to="/uploads" /> : <Login />}
        </Route>
        <Route path="/uploads">{user ? <Upload /> : <Login />}</Route>
      </Switch>
    </Router>
  );
}

export default App;
