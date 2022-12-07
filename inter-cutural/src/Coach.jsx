import { useEffect, useState } from "react";
import "./global.css";
import Topbar from "./Topbar";

const slideImg = [
  {
    id: 1,
    img: "https://noticias.damasio.com.br/wp-content/uploads/2021/08/legenda-marketing-juridico.jpg",
  },
  {
    id: 2,
    img: "https://nova-live.imgix.net//What%20is%20Coaching-0c6b0d91-054a-46e8-af5f-0f723e1a67b6.png?fit=crop&w=1200&h=627",
  },
  {
    id: 3,
    img: "https://www.developpement-personnel.com/wp-content/uploads/2021/04/questions-coaching.png",
  },
  {
    id: 4,
    img: "https://i4p9z8i7.rocketcdn.me/wp-content/uploads/2020/09/Coaching-la-gi.jpg",
  },
  {
    id: 5,
    img: "https://cdn.shrm.org/image/upload/c_crop%2Ch_635%2Cw_1129%2Cx_125%2Cy_72/c_fit%2Cf_auto%2Cq_auto%2Cw_767/v1/Organizational%20and%20Employee%20Development/iStock-1212754217_b0fygf?databtoa=eyIxNng5Ijp7IngiOjEyNSwieSI6NzIsIngyIjoxMjU0LCJ5MiI6NzA3LCJ3IjoxMTI5LCJoIjo2MzV9fQ%3D%3D",
  },
  {
    id: 6,
    img: "https://mindtoolsbusiness.com/getmedia/6f8ac7c7-6b59-4c31-aa90-499da43e7234/3-things-I-learned-from-coaching-header-400-small?maxsidesize=660&resizemode=force",
  },
  {
    id: 7,
    img: "https://blog.unyleya.edu.br/wp-content/uploads/2020/06/GettyImages-1128228794-1-1.jpg",
  },
  {
    id: 8,
    img: "https://blog.unyleya.edu.br/wp-content/uploads/2019/04/285880-coaching-juridico-por-que-se-especializar-nessa-area.jpg",
  },
  {
    id: 9,
    img: "https://juridicamente.info/wp-content/uploads/2021/10/Advocacia-mesmo-diante-da-Crise.jpg",
  },
  {
    id: 10,
    img: "https://www.3mind.com.br/blog/wp-content/uploads/2020/08/3-dicas-para-checar-ao-topo-do-google-com-marketing-digital-para-advogados.jpg",
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
