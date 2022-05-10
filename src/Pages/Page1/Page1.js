import React from "react";
import { Welcomer } from "./Welcomer/Welcomer";
import { ProfilePicture } from "./ProfilePircure/ProfilePicture";
import "./Page1.scss";
export function Page1() {
  return (
    <div className="container-page-1" id="page1">
      <ProfilePicture />
      <Welcomer/>
    </div>
  );
}
