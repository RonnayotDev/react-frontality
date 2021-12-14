import React from "react";
import BrandName from "../components/BrandName";
import "../styles/sections/Footer.css";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt, FaFacebookF, FaTwitter } from "react-icons/fa";
import { ImLocation } from "react-icons/im";
import { AiFillInstagram, AiFillLinkedin, AiOutlineSend } from "react-icons/ai";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="container-footer">
        <div className="main-container-footer">
          <div className="news-letter">
            <BrandName isFooter={true} />
            <p>
              Join our newsletter to get updated with our Offers & Discounts.
            </p>
            <p className="copyright">
            Copyright c 2021. created by ronnayot.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
