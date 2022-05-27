import React, { useEffect, useState } from "react";
import "./BorderLeft.scss";
import { ItemsContainer } from "./Items/ItemsContainer";
export function BorderLeft({ redirect }) {
  const [loading, setLoading] = useState(true)
  useEffect(()=>{
    setLoading(false)
  },[])
  function handleReditectCurrentPage(page) {
    redirect(page);
  }
  return (
    <div className={loading?"container-border-left border-off": "container-border-left border-on"}>
      <div className="container-columns">
    <ItemsContainer handleReditectCurrentPage={handleReditectCurrentPage}/>
        <div className="column2-border">
          <div className="content-rotated">
            <h1>React Developer</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
