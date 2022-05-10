import React, { useState } from "react";
import CvPdf from "../../../addons/Curriculum vitae ENG v4.1.pdf";
import "./ContactItem.scss";
export function ContactItem({ link, type, icon }) {
  const [state, setState] = useState(false);
  const handleRedirectToPage = () => {
    switch (true) {
      case type === "link":
        window.location.assign(link);
        break;
      case type === "copy":
        navigator.clipboard.writeText(link);
        setState("Copied..");
        setTimeout(() => {
          setState(false);
        }, 1000);
        break;
      case type === "download":
        window.open(CvPdf)
        break;
      default:
        break;
    }
  };
  return (
    <div className="container-item-contact">
      <div className="columns-content-item">
        <div className="link-text" onClick={handleRedirectToPage}>
          {!state ? link : state}
        </div>
        <div className="icon">
          <img src={icon} alt="" />
        </div>
      </div>
    </div>
  );
}
