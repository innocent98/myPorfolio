import { useContext, useEffect, useState } from "react";
import "./uploads.scss";
// import axios from "axios";
import Logout from "../logout/Logout";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import storage from "../../firebase";
import { Context } from "../../context/Context";
import { axiosInstance } from "../../config";

export default function Upload() {
  const [
    category = [
      { id: "api" },
      { id: "mobile" },
      { id: "web" },
      { id: "featured" },
    ],
    setCategory,
  ] = useState("");
  const [img, setImg] = useState(null);
  const [phone, setPhone] = useState("");
  const [laptop, setLaptop] = useState("");
  const [success, setSuccess] = useState(false);
  const { user } = useContext(Context);

  const [progress, setProgress] = useState(0);
  console.log(progress);

  // const [inputs, setInputs] = useState({ isAdmin: user[0].isAdmin });
  const [inputs, setInputs] = useState({});

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const uploadFile = (file, urlType) => {
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, `/portfolio/${fileName}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        urlType === "img"
          ? setProgress(Math.round(progress))
          : urlType === "phone"
          ? setProgress(Math.round(progress))
          : urlType === "laptop" && setProgress(Math.round(progress));
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
            break;
        }
      },
      (error) => {},
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setInputs((prev) => {
            return { ...prev, [urlType]: downloadURL };
          });
        });
      }
    );
  };

  useEffect(() => {
    img && uploadFile(img, "img");
  }, [img]);

  useEffect(() => {
    phone && uploadFile(phone, "phone");
  }, [phone]);

  useEffect(() => {
    laptop && uploadFile(laptop, "laptop");
  }, [laptop]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      switch (category) {
        case "api":
          const res = await axiosInstance.post("/api/upload", { ...inputs });
          setSuccess(true);
          setCategory(res.data);
          window.location.reload("/uploads" + res.data.id);
          break;
        case "mobile":
          const resm = await axiosInstance.post("/mobile/upload", { ...inputs });
          setSuccess(true);
          setCategory(resm.data);
          window.location.reload("/uploads" + resm.data.id);
          break;
        case "web":
          const resw = await axiosInstance.post("/web/upload", { ...inputs });
          setSuccess(true);
          setCategory(resw.data);
          window.location.reload("/uploads" + resw.data.id);
          break;
        default:
          const resf = await axiosInstance.post("/featured/upload", { ...inputs });
          setSuccess(true);
          setCategory(resf.data);
          window.location.reload("/uploads" + resf.data.id);
          break;
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="uploads">
      <div className="logout">
        <Logout />
      </div>
      <p>{user.email}</p>
      <form className="row g-3" onSubmit={handleSubmit}>
        <div className="col-md-4">
          <label htmlFor="title" className="form-label">
            Upload image
          </label>
          <input
            type="file"
            className="form-control shadow-none"
            id="img"
            name="img"
            accept=".jpeg, .png, .jpg"
            required
            onChange={(e) => {
              setImg(e.target.files[0]);
            }}
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="title" className="form-label">
            Upload phone(optional)
          </label>
          <input
            type="file"
            className="form-control shadow-none"
            id="phone"
            name="phone"
            accept=".png,.jpg"
            onChange={(e) => {
              setPhone(e.target.files[0]);
            }}
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="title" className="form-label">
            Upload laptop (optional)
          </label>
          <input
            type="file"
            className="form-control shadow-none"
            id="laptop"
            name="laptop"
            accept=".jpeg, .png, .jpg"
            onChange={(e) => {
              setLaptop(e.target.files[0]);
            }}
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="category" className="form-label">
            category
          </label>
          <select
            id="category"
            required
            className="form-control shadow-none"
            onChange={(e) => setCategory(e.target.value)}
          >
            <option defaultValue="featured">Select category</option>
            <option value="api">Api</option>
            <option value="mobile">Mobile</option>
            <option value="web">Web</option>
          </select>
        </div>
        <div className="col-md-4">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            name="title"
            className="form-control shadow-none"
            required
            placeholder="submission title"
            autoFocus={true}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            type="text"
            name="description"
            className="form-control shadow-none"
            required
            placeholder="submission description"
            onChange={handleChange}
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="link" className="form-label">
            Link
          </label>
          <input
            type="text"
            name="link"
            className="form-control shadow-none"
            placeholder="link"
            onChange={handleChange}
          />
        </div>

        <button className="submit-button" type="submit">
          Upload
        </button>
      </form>
      {success && (
        <span style={{ color: "green", textAlign: "center", margin: "10px" }}>
          Uploaded successfully
        </span>
      )}
    </div>
  );
}
