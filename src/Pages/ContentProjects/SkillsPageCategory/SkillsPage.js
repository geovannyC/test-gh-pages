import React from "react";
import { Item } from "./Item/Item";
import "./SkillPage.scss";
export function SkillPage({ dataCategory }) {
  return (
    <>
      <div className="titleItems">
        <h1>{dataCategory.category}</h1>
      </div>
      <div className="skillsContainer">
        {dataCategory.skills.map((e) => {
          return (
            <div className="skill">
              <Item dataSkill={e} />
            </div>
          );
        })}
      </div>
    </>
  );
}
