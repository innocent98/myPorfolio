import { useEffect, useState } from "react";
import "./global.css";
import Topbar from "./Topbar";

const slideImg = [
  {
    id: 1,
    img: "https://endsexualviolencect.org/wp-content/uploads/2019/12/Coaches-Clinic-2.jpeg",
  },
  {
    id: 2,
    img: "https://static.wixstatic.com/media/11062b_66a570629f7f4b2dbdc7b245858f02bf~mv2.jpg/v1/fill/w_640,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/11062b_66a570629f7f4b2dbdc7b245858f02bf~mv2.jpg",
  },
  {
    id: 3,
    img: "https://www.futuretalentlearning.com/hubfs/lifelong-learning.jpg",
  },
  {
    id: 4,
    img: "https://www.sacap.edu.za/wp-content/uploads/2019/04/tips-for-coaches-1920x1280.jpg'",
  },
  {
    id: 5,
    img: "https://www.matrrix.in/images/certifications.webp",
  },
  {
    id: 6,
    img: "https://trainingindustry.com/content/uploads/2018/01/1.23.18-Mentoring.jpg",
  },
  {
    id: 7,
    img: "https://www.mtdtraining.com/wp-content/webp-express/webp-images/uploads/2022/08/black-man-office-interview-300x300.jpg.webp",
  },
  {
    id: 8,
    img: "https://www.life-coaching-services.net/img/f065f5aa302c6c8059e94610c14c19d6.jpg?15",
  },
  {
    id: 9,
    img: "https://images.squarespace-cdn.com/content/v1/5951cc071b10e3977f15d46a/1640286069536-WXR2TOU68622IIFLA31C/customer-success-skills-coaching-and-mentoring.jpg",
  },
  {
    id: 10,
    img: "https://imageio.forbes.com/specials-images/dam/imageserve/1085354216/960x0.jpg?format=jpg&width=960",
  },
];

function Coach() {
  const [slider, setSlider] = useState(0);
  const [appointment, setAppointment] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlider(slider < slideImg.length - 7 ? slider + 1 : 0);
    }, 3000);
    return () => clearInterval(interval);
  });
  return (
    <div className="coach">
      <Topbar />
      <div className="slide">
        {slideImg.map((slide) => (
          <img
            src={slide.img}
            alt=""
            style={{
              transform: `translateX(${slider * -100}%)`,
            }}
            slider={slider}
            className="img"
          />
        ))}
        <div className="overlay">THE KINGS PALACE AGILE COACHES</div>
      </div>

      <div className="journey">
        <div className="journeyTitle">Journey Details</div>
        <div className="journeyBody">
          The Certification in Intercultural Coaching is a 5-6-month learning
          journey design to equip you with a structured method to coach
          inter-culturally.
        </div>
        <div className="journeyIncluded">
          What's Included:
          <ul>
            <li>
              Opportunities to practice and apply throughout the journey in safe
              environments
            </li>
            <li>Intercultural Assessments</li>
            <li>Three Colors of Worldview</li>
            <li>Cultural Mapping inventory (CMi)</li>
            <li>
              eLearning Modules, readings, assignments and all course materials
              to compliment the learning
            </li>
            <li>
              73 ICF CCEUs (43 Core Competency and 30 Resource Development
              hours) ​
            </li>
            <li>
              Can be used towards achieving the next level (e.g. ACC to PCC) of
              your ICF Credential
            </li>
          </ul>
        </div>
        <img src="gate.jpeg" alt="" className="gate" />
        <button className="book" onClick={() => setAppointment(!appointment)}>
          Book an Appointment
        </button>
      </div>

      {appointment && (
        <div className="appointment">
          <div className="bookAppointment">
            Book appointment with mr. Patrick
          </div>
          <form className="form">
            <div className="col">
              <label htmlFor="" className="appointmentLabel">
                Select a date suitable for you
              </label>
              <input
                type="date"
                name=""
                id=""
                className="appointmentInput"
                required
              />
            </div>
            <div className="col">
              <label htmlFor="" className="appointmentLabel">
                Session
              </label>
              <select
                name="session"
                id=""
                className="appointmentInput"
                required
              >
                <option value="">Select an option</option>
                <option value="30 min">30 min</option>
                <option value="1 hr">1 hr</option>
                <option value="1hr 30 min">1hr 30 min</option>
              </select>
            </div>
            <div className="col">
              <label htmlFor="" className="appointmentLabel">
                Appointment time
              </label>
              <select
                name="session"
                id=""
                className="appointmentInput"
                required
              >
                <option value="">Select an option</option>
                <option value="9:00am">9:00am</option>
                <option value="10:00am">10:00am</option>
                <option value="11:00am">11:00am</option>
              </select>
            </div>
            <div className="col">
              <button className="proceed">Procced</button>
            </div>
          </form>
        </div>
      )}

      <div className="contact">
        <div className="contactLeft">
          <img
            src="https://cdn.shrm.org/image/upload/c_crop%2Ch_635%2Cw_1129%2Cx_125%2Cy_72/c_fit%2Cf_auto%2Cq_auto%2Cw_767/v1/Organizational%20and%20Employee%20Development/iStock-1212754217_b0fygf?databtoa=eyIxNng5Ijp7IngiOjEyNSwieSI6NzIsIngyIjoxMjU0LCJ5MiI6NzA3LCJ3IjoxMTI5LCJoIjo2MzV9fQ%3D%3D"
            alt=""
            className="contactPic"
          />
        </div>
        <div className="contactRight">
          <div className="contactTitle">REQUEST A FREE CONSULTATION</div>
          <form className="contactForm">
            <div className="input">
              <input
                type="text"
                placeholder="Name *"
                className="contactInput"
                required
              />
              <input
                type="text"
                placeholder="Email *"
                className="contactInput"
                required
              />
              <input
                type="text"
                placeholder="Subject *"
                className="contactInput"
                required
              />
              <input
                type="text"
                placeholder="Phone Number *"
                className="contactInput"
                required
              />
              <button className="contactButton">Send a message</button>
            </div>
            <textarea
              type="text"
              rows={10}
              placeholder="Message *"
              className="contactText"
              required
            />
          </form>
        </div>
      </div>

      <div className="footer">copyright (c) Kings Palace 2022.</div>
    </div>
  );
}

export default Coach;
