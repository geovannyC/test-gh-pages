import React from "react";
import { SkillPage } from "./SkillsPageCategory/SkillsPage";
import "./ContentProjects.scss";
export function ContentProjects({ data }) {
  return (
    <div className="categoryContainer">
      {data.map((e) => {
        return (
          <div className="category">
            <SkillPage dataCategory={e} />
          </div>
        );
      })}
    </div>
  );
}
