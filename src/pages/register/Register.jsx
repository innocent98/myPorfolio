import "./register.scss";
import { useState } from "react";
import RegistrationIntro from "../../components/registrationForm/RegistrationIntro";
import RegistrationForm from "../../components/registrationForm/RegistrationForm";
import { ClipLoader } from "react-spinners";

const Register = () => {
  const [intro, setIntro] = useState(true);
  const [form, setForm] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleNext = (e) => {
    e.preventDefault();
    if (intro) {
      setLoading(true);
      setTimeout(() => {
        setForm(true);
        setIntro(false);
        setLoading(false);
      }, 1000);
    }
    // else if (form) {
    //   setTimeout(() => {
    //     setPp(true);
    //   }, 1000);
    //   setForm(false);
    //   setIntro(false);
    //   setLoading(false);
    // }
    // else if (pp) {
    //   setPassword(true);
    //   setPp(false);
    //   setIntro(false);
    //   setLoading(false);
    // } else if (password) {
    //   setLetIn(true);
    //   setPassword(false);
    //   setIntro(false);
    //   setLoading(false);
    // } else {
    // }
  };

  // const handleBack = (e) => {
  //   e.preventDefault();
  //   if (form) {
  //     setForm(false);
  //     setIntro(true);
  //     setLoading(false);
  //   } else if (pp) {
  //     setPp(false);
  //     setForm(true);
  //     setIntro(false);
  //     setLoading(false);
  //   } else if (password) {
  //     setPassword(false);
  //     setPp(true);
  //     setIntro(false);
  //     setLoading(false);
  //   } else {
  //   }
  // };

  return (
    <div className="register">
      <div className="wrapper">
        <div className={"step " + (intro && "active")}>
          <RegistrationIntro />
        </div>
        <div className={"step " + (form && "active")}>
          <RegistrationForm form={form} setForm={setForm} setIntro={setIntro} />
        </div>

        <div className={form ? "none" : "button"}>
          <button
            onClick={handleNext}
            className={"active " + (loading && "loading")}
          >
            {loading ? (
              <div className="spin">
                <ClipLoader
                  color="#3498DB"
                  loading={loading}
                  size={15}
                  className="spin"
                />
              </div>
            ) : (
              "Continue"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
