import React, { useEffect } from "react";
import Title from "../components/Title";
import "../styles/sections/Testimonials.css";
import Testimonial from "../components/Testimonial";
import Aos from 'aos'
import "aos/dist/aos.css"

export default function Testimonials() {
  useEffect(() => {
    Aos.init({duration:1000})
  },[])
  return (
    <div className="testimonials-container" id="testimonial">
      <div className="container-testimonials">
        <div className="title-container-testimonials">
          <Title title="Testimonials" lineCenter={true} />
          <p>See what our Clients are saying about us.</p>
        </div>
        <div className="testimonials" data-aos="flip-left">
          <Testimonial
            content="The best on the net! Software development saved my business. I use
        Software development often. I am really satisfied with my Software
        Development."
            name="Benjapon Sakornkum"
            designation="Co-Founder"
          />
          <Testimonial
            content="Mobile application developer is exactly what out business has been lacing. I have gotten at least 50 times the value from mobile apllication."
            name="Punch Kunwiroj"
            designation="Founder & CEO"
          />
           <Testimonial
            content="Logo Design is the next killer app. We've used logo design for the last five years. Best. Product. Ever! Definetly worth the investment"
            name="Ronnayot Jaisai"
            designation="Founder"
          />
          <Testimonial
            content="Logo Design is the next killer app. We've used logo design for the last five years. Best. Product. Ever! Definetly worth the investment"
            name="Jetsada Gujan"
            designation="Founder"
          />
        </div>
      </div>
    </div>
  );
}
