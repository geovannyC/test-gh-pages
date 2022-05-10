import React, { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";
import "./Page2v2.scss";
function Tilt(props) {
  const { options, ...rest } = props;
  const tilt = useRef(null);
  useEffect(() => {
    VanillaTilt.init(tilt.current, options);
  }, [options]);

  return <div ref={tilt} {...rest} />;
}
export function Page2v2() {
  const options = {
    easing: "cubic-bezier(.03,.98,.52,.99)",
    glare: true, // if it should have a "glare" effect
    "max-glare": 0.2,
    scale: 1,
    startX: 10,
    speed: 1200,
    max: 15,
    transition: true,
  };
  const ItemTile3D = () => {
    return (
      <Tilt options={options}>
        <div className="box">React</div>
      </Tilt>
    );
  };
  return (
    <div className="container-page-2">
      <div className="items-container">
        <ItemTile3D />
        <ItemTile3D />
        <ItemTile3D />
        <ItemTile3D />
      </div>
    </div>
  );
}
