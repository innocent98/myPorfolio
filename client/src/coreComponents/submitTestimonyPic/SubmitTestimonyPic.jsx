import { useState } from "react";
import "./submitTestimonyPic.scss";
import { CheckCircle } from "@material-ui/icons";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import storage from "../../firebase";

export default function SubmitTestimonyPic() {
  const [picture, setPicture] = useState(null);

  const [input, setInput] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleClick = async (e) => {
    e.preventDefault();
    setProgress(true);
    const uploadFile = (file) => {
      if (!file) return;
      const filename = Date.now() + file.name;
      const storageRef = ref(storage, `${filename}`);
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
          getDownloadURL(uploadTask.snapshot.ref).then((url) =>
            setPicture(url)
          );
        }
      );
    };
    uploadFile(picture);
  };

  return (
    <div className="testimony">
      <div className="col-md-4">
        {/* <label htmlFor="img" className="form-label">
          upload a picture of yourself
        </label> */}
        <input
          type="file"
          className="form-control shadow-none"
          id="img"
          accept=".jpeg, .png, .jpg"
          required
          onInput={() => setInput(!input)}
          onChange={(e) => {
            setPicture(e.target.files[0]);
          }}
        />
        <div className="cont">
          <button
            className="button"
            style={input ? { display: "block" } : { display: "none" }}
            onClick={handleClick}
          >
            upload
          </button>
          <div className="progress">
            {progress && <span>{progress}%</span>}
            {progress === 100 && (
              <span>
                <CheckCircle />
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
