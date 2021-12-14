import React from "react";
import "../styles/components/Title.css";

export default function Title({ title, lineCenter = false }) {
  return (
    <div className={`title ${lineCenter === true ? "center" : ""}`}>
      <h2>{title}</h2>
      <div className="line">
        <span></span>
      </div>
    </div>
  );
}
