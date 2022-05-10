import React, { useEffect, useState } from "react";
import profile from "../../../addons/profile.jpeg";
// import image1 from "../../addons/image1.jpg";
import "./ProfilePicture.scss";
export function ProfilePicture({ pos }) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);
  return (
    <div className="general-container-profile">
      <div className="profile-test ">
        <div className="filter" />
        <img
          src={profile}
          alt=""
          className={loading ? "img img-sizes off" : "img img-sizes on"}
        />
      </div>
    </div>
  );
}
