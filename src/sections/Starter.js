import React, { useEffect } from "react";
import WorkImage from "../asset/work.svg";
import Button from "../components/Button";
import { GoPlay } from "react-icons/go";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import "../styles/sections/Starter.css";
import Navbar from "../components/Navbar";
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function Starter() {
  useEffect(() => {
    Aos.init({duration:2000})
  },[])
  return (
    <div className="main-container">
        <Navbar/>
      <div className="container-start">
        <div className="content" data-aos="fade-right">
          <h1>
            We Provide Solutions to Help You to Build or Grow Your Business!
          </h1>
          <p>
            A professional web and mobile app development agency with over 100+
            web and app develop a hight-quality service in web and mobile app
            development as well as in design.
          </p>

          <div className="button-container">
            <Button content="Watch Video" icon={<GoPlay />} />
            <Button
              content="Request Quote"
              icon={<HiOutlineArrowNarrowRight />}
              color="pink"
            />
          </div>
        </div>
        <div className="image" data-aos="zoom-in">
          <img src={WorkImage} alt="Work Image" />
        </div>
      </div>
    </div>
  );
}
