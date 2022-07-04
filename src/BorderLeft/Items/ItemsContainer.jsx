import React from "react";
import "./ItemContainer.scss";
export function ItemsContainer({ handleReditectCurrentPage }) {
  return (
    <div className="column1-border">
      <div onClick={() => handleReditectCurrentPage(0)} className="border-icon">
        <img
          className="img-icon"
          src={`${process.env.PUBLIC_URL}/assets/images/home.svg`}
          alt="logo"
        />
      </div>
      <div onClick={() => handleReditectCurrentPage(1)} className="border-icon">
        <img
          className="img-icon"
          src={`${process.env.PUBLIC_URL}/assets/images/projects.svg`}
          alt="logo"
        />
      </div>
      <div onClick={() => handleReditectCurrentPage(3)} className="border-icon">
        <img
          className="img-icon"
          src={`${process.env.PUBLIC_URL}/assets/images/skills.svg`}
          alt="logo"
        />
      </div>
      <div onClick={() => handleReditectCurrentPage(6)} className="border-icon">
        <img
          className="img-icon"
          src={`${process.env.PUBLIC_URL}/assets/images/contact.svg`}
          alt="logo"
        />
      </div>
    </div>
  );
}
