import axios from "axios";
import { useState } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import "./submitTestimony.scss";
import { CheckCircle } from "@material-ui/icons";
import storage from "../../firebase";

export default function SubmitTestimony() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [company, setCompany] = useState("");
  const [testimony, setTestimony] = useState("");
  const [ig, setIg] = useState("");
  const [tw, setTw] = useState("");
  const [picture, setPicture] = useState(null);
  const [success, setSuccess] = useState(false);
  const [processing, setProcessing] = useState(false);

  const [progress, setProgress] = useState(0);

  const [input, setInput] = useState(null);
  const type = "file";

  const newSubmit = {
    firstName: firstName,
    lastName: lastName,
    company: company,
    testimony: testimony,
    ig: ig,
    tw: tw,
    picture: picture,
  };

  const handleClick = () => {
    if (picture) {
      const uploadFile = (file) => {
        if (!file) return;
        const filename = Date.now() + file.name;
        const storageRef = ref(storage, `/testimony/${filename}`);
        const uploadTask = uploadBytesResumable(storageRef, file);
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const prog = Math.round(
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
            setProgress(prog);
          },
          (err) => console.log(err),
          () => {
            const pic = getDownloadURL(uploadTask.snapshot.ref).then((url) =>
              setPicture(url)
            );
            newSubmit.picture = pic;
          }
        );
      };
      uploadFile(picture);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true)
    try {
      const res = await axios.post("/testimonial/submit-testimony", newSubmit);
      setProcessing(false)
      setSuccess(true);
      window.location.reload("/testimony" + res.data.id);
    } catch (err) {
      return alert("Connection error!");
    }
  };

  return (
    <div className="testimonial">
      <form className="row g-3" onSubmit={handleSubmit}>
        <div className="col-md-4">
          <input
            type="name"
            className="form-control shadow-none"
            id="firstName"
            placeholder="Enter your first name"
            required
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
        </div>
        <div className="col-md-4">
          <input
            type="name"
            className="form-control shadow-none"
            id="lastName"
            placeholder="Enter your last name"
            required
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
        </div>
        <div className="col-md-4">
          <input
            type="name"
            className="form-control shadow-none"
            id="company"
            placeholder="Enter company name"
            required
            onChange={(e) => {
              setCompany(e.target.value);
            }}
          />
        </div>
        <div className="col-md-4">
          <textarea
            type="text"
            className="form-control shadow-none"
            id="testimonial"
            placeholder="Enter your testimonial"
            maxLength={20}
            onChange={(e) => {
              setTestimony(e.target.value);
            }}
          />
        </div>
        <div className="col-md-4">
          <input
            type="link"
            className="form-control shadow-none"
            id="ig"
            placeholder="Enter your IG handle link"
            onChange={(e) => {
              setIg(e.target.value);
            }}
          />
        </div>
        <div className="col-md-4">
          <input
            type="link"
            className="form-control shadow-none"
            id="tw"
            placeholder="Enter your twitter handle link"
            onChange={(e) => {
              setTw(e.target.value);
            }}
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="img" className="form-label">
            upload a picture of yourself
          </label>
          <input
            type={type}
            className="form-control shadow-none"
            id="img"
            accept=".jpeg, .png, .jpg"
            required
            onInput={() => setInput(!input)}
            onChange={(e) => {
              setPicture(e.target.files[0]);
            }}
          />
          {input && (
            <div className="cont">
              <div
                className="button"
                onClick={handleClick}
              >
                {progress ? `${progress}%` : "upload file"}
              </div>
            </div>
          )}
        </div>

        <div className="col-md-4">
          <button
            className="submit-button"
            type="submit"
            disabled={progress < 100}
          >
            {processing ? "Please wait..." : "Submit"}
          </button>
        </div>
      </form>
      {success && (
        <span style={{ color: "green", textAlign: "center", margin: "10px" }}>
          Success <CheckCircle />
        </span>
      )}
    </div>
  );
}
