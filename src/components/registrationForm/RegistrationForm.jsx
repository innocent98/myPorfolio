import { useState } from "react";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import { Link } from "react-router-dom";
import "./style.scss";

const RegistrationForm = ({ setIntro, setForm, form }) => {
  const [loading, setLoading] = useState(false);
  const [isLoading, setisLoading] = useState(false);
  const [formDetails, setFormDetails] = useState(true);
  const [pp, setPp] = useState(false);
  const [password, setPassword] = useState(false);
  const [letIn, setLetIn] = useState(false);

  const [src, setSrc] = useState(null);
  // const [picture, setPicture] = useState(null);
  const [crop, setCrop] = useState({ aspect: 16 / 9 });
  const [image, setImage] = useState(null);
  const [output, setOutput] = useState(null);

  const selectImage = (file) => {
    setSrc(URL.createObjectURL(file));
  };

  const cropImageNow = (e) => {
    // e.preventDefault();
    const canvas = document.createElement("canvas");
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width = crop.width;
    canvas.height = crop.height;
    const ctx = canvas.getContext("2d");

    const pixelRatio = window.devicePixelRatio;
    canvas.width = crop.width * pixelRatio;
    canvas.height = crop.height * pixelRatio;
    ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    ctx.imageSmoothingQuality = "high";

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    );

    // Converting to base64
    const base64Image = canvas.toDataURL("image/jpeg");
    setOutput(base64Image);
  };

  const handleBackIntro = (e) => {
    e.preventDefault();
    if (pp) {
      setLoading(true);
      setTimeout(() => {
        setFormDetails(true);
        setPp(false);
        setIntro(false);
        setLoading(false);
      }, 1000);
    } else if (password) {
      setLoading(true);
      setTimeout(() => {
        setPp(true);
        setPassword(false);
        setLoading(false);
      }, 1000);
    } else if (form) {
      setLoading(true);
      setTimeout(() => {
        setIntro(true);
        setForm(false);
        setLoading(false);
      }, 1000);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form) {
      setisLoading(true);
      setTimeout(() => {
        setPp(true);
        setFormDetails(false);
        setisLoading(false);
      }, 1000);
    }
    if (pp) {
      setisLoading(true);
      setTimeout(() => {
        setPassword(true);
        setPp(false);
        setLoading(false);
      }, 1000);
    }
    if (password) {
      setisLoading(true);
      setTimeout(() => {
        setLetIn(true);
        setPp(false);
        setPassword(false);
        setLoading(false);
      }, 1000);
    } else {
    }
  };

  return (
    <div className="registrationForm">
      <form className="row g-3">
        <div className={formDetails ? "formCard" : "none"}>
          <h3>Tell us more about you.</h3>
          <div className="col-md-4">
            <label htmlFor="firstName">First Name</label>
            <input type="text" placeholder="Enter your first name" required />
          </div>
          <div className="col-md-4">
            <label htmlFor="firstName">Last Name</label>
            <input type="text" placeholder="Enter your last name" />
          </div>
          <div className="col-md-4">
            <label htmlFor="firstName">Email</label>
            <input type="email" placeholder="Enter your email address" />
          </div>
        </div>

        <div className={pp ? "ppCard" : "none"}>
          <h3>Upload a profile picture.</h3>
          <div className="col-md-4">
            <div className="img">
              <div>
                <ReactCrop
                  src={src}
                  onImageLoaded={setImage}
                  crop={crop}
                  onChange={setCrop}
                  onComplete={cropImageNow}
                >
                  <img src={src ? src : "/assets/img/avatar-w.png"} alt="" />
                </ReactCrop>
                <br />
                {src && <button onClick={cropImageNow}>Crop</button>}
              </div>
              {output && <img src={URL.createObjectURL(output)} alt="" />}
            </div>
            <label htmlFor="file">
              <span class="material-icons">add</span>
            </label>
            <input
              type="file"
              id="file"
              placeholder="Enter your first name"
              style={{ display: "none" }}
              onChange={(e) => selectImage(e.target.files[0])}
            />
          </div>
          <p>Only images with a size lower than 3MB are allowed.</p>
        </div>

        <div className={password ? "passwordCard" : "none"}>
          <h3>Secure your account.</h3>
          <div className="col-md-4">
            <label htmlFor="password">PASSWORD</label>
            <input type="password" placeholder="Choose a password" />
          </div>
          <div className="col-md-4">
            <label htmlFor="repeatPassword">REPEAT PASSWORD</label>
            <input type="password" placeholder="Repeat your password" />
          </div>
          <div className="col-md-4">
            <label htmlFor="phoneNo">PHONE NUMBER</label>
            <input type="tel" placeholder="Enter your phone number" required />
          </div>
        </div>

        <div className={letIn ? "letInCard" : "none"}>
          <h3>You're all set. Ready?</h3>
          <div className="col-md-4">
            <img src="/assets/img/mailbox.svg" alt="" className="img-fluid" />
            <h4>Congratz, you successfully created your account.</h4>
            <p>
              We just sent you a confirmation email. PLease confirm your account
              within 24 hours.
            </p>
          </div>
          <Link to="/home" className="submit-button">Let me in</Link>
        </div>

        <div className={letIn ? "none" : "continue-button"}>
          <div
            onClick={handleBackIntro}
            className={"but back " + (loading && "loading")}
          >
            {loading ? <div className="spin"></div> : "Back"}
          </div>
          <div
            className={"but continue " + (isLoading && "isLoading")}
            onClick={handleSubmit}
          >
            {isLoading ? <div className="spin"></div> : "Continue"}
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
