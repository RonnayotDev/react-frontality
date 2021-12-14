import React, { useEffect } from "react";
import { GoPlay } from "react-icons/go";
import Title from "../components/Title";
import "../styles/sections/Why.css";
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function Why() {
  useEffect(() => {
    Aos.init({duration:1000})
  },[])
  return (
    <div className="container-why" id="services">
      <div className="top">
        <Title title="Why Frontality?" lineCenter={true} />
        <div className="subTitle">
          <p>
            Always stay updated with the technologies thus we help our clients
            by giving the best solutions for thier needs.
          </p>
        </div>
      </div>
      <div className="content-why">
          <div className="">
              <div className="video" data-aos="zoom-in-down">
                  <GoPlay/>
              </div>
          </div>
          <div className="reasons">
              <ul className="why-ul" data-aos="fade-left">
              <li>Over 10+ years of industry wide expierence</li>
              <li>
                Provide solutions to our multiple global clients or website
                traffic generation and workflow
              </li>
              <li>Strong team of 150+ creative people</li>
              <li>99% adhere to service level contract</li>
              <li>Ready to recieve service request 24/7</li>
              </ul>
          </div>
      </div>
    </div>
  );
}
