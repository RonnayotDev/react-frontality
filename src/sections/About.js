import React, { useEffect } from "react";
import Button from "../components/Button";
import Card from "../components/Card";
import Title from "../components/Title";
import "../styles/sections/About.css"
import {HiLightBulb} from "react-icons/hi"
import {BsCalendarFill} from "react-icons/bs"
import {BiSupport} from "react-icons/bi"
import {SiGooglemessages} from "react-icons/si"
import Aos from 'aos'
import "aos/dist/aos.css"

export default function About() {
  useEffect(() => {
    Aos.init({duration:1000})
  },[])
  return (
    <div className="about-container" id="about">
      <div className="container-about">
        <div className="details" data-aos="fade-right">
          <Title title="About Frontality" color="purple" />
          <p>
            We Believe that everyone deserves to have a website or online store.
            Innovation and simplicity make us happy. Our mission is to help
            people achieve what they have passionate about it.
          </p>
          <p>
            We are excited to simplify SEO for everyone through software,
            education, or cimmunity.
          </p>
          <Button content="Why Frontality?"/>
        </div>
        <div className="cards" data-aos="flip-right">
            <Card title="Innovative Ideas" Logo={<HiLightBulb/>}/>
            <Card title="Planning" Logo={<BsCalendarFill/>}/>
            <Card title="Communication" Logo={<BiSupport/>}/>
            <Card title="24 * 7 Support" Logo={<SiGooglemessages/>}/>
        </div>
      </div>
    </div>
  );
}
