import React, { useEffect, useState } from "react";
import { ItemsContainer } from "./Items/ItemsContainer";
import "./Border.scss"
export function Border({ redirect }) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);
  function handleReditectCurrentPage(page) {
    redirect(page);
  }
  const SchemmaBorder = () => {
    return (
      <div
        className={
          loading
            ? "container-border border-off"
            : "container-border border-on"
        }
      >
        <ItemsContainer handleReditectCurrentPage={handleReditectCurrentPage} />
        <div className="column2-border">
          <div className="content-rotated">
            <h1>React Developer</h1>
          </div>
          </div>
      </div>
    );
  };
  return SchemmaBorder();
}
