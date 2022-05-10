import React from "react";
import { PreviewComponent } from "./PreviewComponent/PreviewComponent";
import "./ItemContainer.scss"
export function ItemComponent({data}) {
  return (
    <div className="card-container">
      <div className="preview-container">
        <PreviewComponent data={data}/>
      </div>
    </div>
  );
}
