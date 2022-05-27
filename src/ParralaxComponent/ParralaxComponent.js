import React, { useRef } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { Page1 } from "../Pages/Page1/Page1";
import { Page2v2 } from "../Pages/Page2/Page2v2";
import { ItemComponent } from "../ItemComponent/PreviewComponent/PreviewComponent";
import { TextComponent } from "../ItemComponent/TextComponent/TextComponent";
import "./ParralaxComponent.scss";
export function ParralaxComponent() {
  const childRefParallax = useRef();
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
        <ParallaxLayer offset={2} speed={0.5}>
          <p>Scroll up</p>
        </ParallaxLayer>
        <ParallaxLayer
          offset={0}
          speed={-0.3}
          className="container-items-preview"
        >
          <ItemComponent />
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-0.3} className="container-items-text">
          <TextComponent />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}
