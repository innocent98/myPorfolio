import "./contact.scss";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact({isScrolled}) {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_bos5vqu",
        "template_ic3if7w",
        formRef.current,
        "WmI4g8z-7GU3NzPDl"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error);
        }
      );
      window.location.reload();
    return alert("Thanks, I'll get back to you ASAP :)");
  };

  return (
    <div className="contact" id="contact">
      <div className="left" style={{transform: `translate(${isScrolled * 0.01}px`}}>
        <img
          src="https://www.pngkey.com/png/full/773-7735198_handshake.png"
          alt=""
        />
      </div>
      <div className="right" style={{transform: `translateX(calc(650vh - ${isScrolled}px))`}}>
        <h2>Get In Touch</h2>
        <form onSubmit={handleSubmit}  ref={formRef}>
          <input type="text" name="name" placeholder="Name" required />
          <input type="text" name="email" placeholder="Email" required />
          <textarea placeholder="Message" name="message" required></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}
