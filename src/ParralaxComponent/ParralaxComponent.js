import React, { useEffect, useState, useRef } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { Page1 } from "../Pages/Page1/Page1";
import { Page2v2 } from "../Pages/Page2/Page2v2";
import item from "../addons/background-item.png";
import react from "../addons/react.png";
import mongo from "../addons/mongo.png";
// import { BackComponentManager } from "../BackComponentManager/BackComponentManager";
import { ItemComponent } from "../ItemComponent/PreviewComponent/PreviewComponent";
import { TextComponent } from "../ItemComponent/TextComponent/TextComponent";
import image1 from "../addons/image1.jpg";
import image2 from "../addons/image2.jpg";
import "./ParralaxComponent.scss";
import { useForceUpdate } from "@react-spring/shared";
export function ParralaxComponent() {
  const [currentTile, setCurrentTile] = useState({
    position: 0,
    currentPage: 0,
    imageChangueStatus: false,
  });
  const childRefParallax = useRef();
  const getCurrentPosition = (event) => {
    const e = event.target.scrollTop;
    const pos = parseInt(e);
    const newCurrentPage = parseInt(e / 450);
    console.log(newCurrentPage, pos);
    // console.log(((newCurrentPage+1)*500))
    setCurrentTile({
      ...currentTile,
      position: pos,
      currentPage: newCurrentPage,
    });
  };
  return (
    <div className="general-container-tiles">
      <Parallax
        pages={2}
        ref={childRefParallax}
        // onScrollCapture={getCurrentPosition}
        className="container"
      >
        <ParallaxLayer
          offset={0}
          speed={2.5}
          // onClick={() => childRefParallax.current.scrollTo(1)}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Page1 />
        </ParallaxLayer>
        <ParallaxLayer
          offset={1}
          speed={2.5}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Page2v2 />
        </ParallaxLayer>
        <ParallaxLayer
          offset={2}
          speed={0.5}
        >
          <p>Scroll up</p>
        </ParallaxLayer>
        <ParallaxLayer
          offset={0}
          speed={-0.3}
          className="container-items-preview"
        >
          <ItemComponent />
        </ParallaxLayer>
        <ParallaxLayer
          offset={0}
          speed={-0.3}
          className="container-items-text"
        >
          <TextComponent />
        </ParallaxLayer>


      </Parallax>
    </div>
  );
}
