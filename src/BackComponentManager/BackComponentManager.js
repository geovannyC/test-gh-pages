import React, { useState } from "react";
import { HideBetween, HideOn } from "react-hide-on-scroll";
import { animated, useSpring } from "react-spring";
import { ProfilePicture } from "./ProfilePicture/ProfilePicture";
import "./BackComponent.scss";
export function BackComponentManager({ pos }) {
  const Schemma = () => {
    return (
        <ProfilePicture pos={pos}/>
    );
  };
  return Schemma();
}
