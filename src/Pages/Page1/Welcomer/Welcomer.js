import React, { useEffect, useState } from "react";
import { TitleProjectComponent } from "../../../TitleProjectComponent/TitleProjectComponent";
import "./Welcomer.scss";
export function Welcomer() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);
  return (
    <div className="container-welcomer">
      <div className="container-welcomer-msg">
        <div
          className={
            loading
              ? "container-title animation-off time500-animation"
              : "container-title animation-on time500-animation"
          }
        >
          <TitleProjectComponent nameProject="Hi user_name, welcome to my portafolio" />
        </div>
        <div
          className={
            loading
              ? "container-resume animation-off time1200-animation"
              : "container-resume animation-on time1200-animation"
          }
        >
          <p>
            I have at least 3 years working in different roles and different
            projects, specializing in React with NodeJs. Throughout my
            professional career I have built apps in Odoo, WordPress, Angular,
            Ionic, but my self-education has always been focused on learning
            React. Below you will find some of my main projects built in React.
          </p>
        </div>
      </div>
    </div>
  );
}
