import React from "react";
import "./TitleProjectItems.scss";
export function TitleProjectItems({items}) {

  return (
    <div className="container-items">
      <div className="items-container">
        {items.map((e) => (
          <small>{e}</small>
        ))}
      </div>
    </div>
  );
}
