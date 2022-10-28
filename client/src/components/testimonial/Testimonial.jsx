import { useEffect } from "react";
import { useState } from "react";
import Testimonials from "../../coreComponents/testimonial/Testimonials";
import "./testimonial.scss";
// import axios from "axios";
import { axiosInstance } from "../../config";

export default function Testimonial() {
  const [testimonial, setTestimonial] = useState([]);

  useEffect(() => {
    const fetchTestimony = async () => {
      const res = await axiosInstance.get("/testimonial/testimony");
      setTestimonial(res.data);
    };
    fetchTestimony();
  }, []);
  
  return (
    <div className="testimonial" id="testimonial">
      <h1>What People Says</h1>
      <div className="container">
        {testimonial.map((t) => (
          <Testimonials key={t.id} testimony={t} />
        ))}
      </div>
    </div>
  );
}
