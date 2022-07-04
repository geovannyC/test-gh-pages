import React from "react";
import "./Item.css";

export function Item({ dataSkill }) {
  return (
    <div className="card">
      <div className="cardInner">
        <div className="cardFront">
          <div className="item">
            <img
              className="itemImg"
              src={`${process.env.PUBLIC_URL}/assets/images/${dataSkill.path}`}
              alt="logo"
            />
            <h2>{dataSkill.skill_name}</h2>
          </div>
        </div>
        <div className="cardBack">
          <h3>{`${dataSkill.years} YRS`}</h3>

          <div className="list">
            <h3>Projects</h3>
            {dataSkill.projects.map((e) => {
              return <li>{e}</li>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
