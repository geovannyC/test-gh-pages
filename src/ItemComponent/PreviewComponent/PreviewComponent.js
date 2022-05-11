import React, { useEffect, useRef, useState } from "react";
import "./PreviewComponent.scss";
import VanillaTilt from "vanilla-tilt";
import { ImageAnimation } from "../ImageAnimation/ImageAnimation";
function Tilt(props) {
  const { options, ...rest } = props;
  const tilt = useRef(null);
  useEffect(() => {
    VanillaTilt.init(tilt.current, options);
  }, [options]);

  return <div ref={tilt} {...rest} />;
}

export const PreviewComponent = ({ data }) => {
  const [arrImages, setArrImages] = useState([]);
  useEffect(() => {
    handleGetAllImages();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const options = {
    easing: "cubic-bezier(.03,.98,.52,.99)",
    glare: true, // if it should have a "glare" effect
    "max-glare": 0.2,
    scale: 1,
    startX: -10,
    speed: 1200,
    max: 15,
    transition: true,
  };
  function importAll(r) {
    return r.keys().map(r);
  }
  function buildSchemma(arr) {
    return arr.map((e) => {
      const shcemma = {
        name: `${e.replace("/test-gh-pages/static/media/", "").split(".")[0]}.gif`,
        file: e,
      };
      return shcemma;
    });
  }
  const findImages = (arr) => {
    return data.module.map((e) => {
      const image = arr.find((i) => i.name === e.file);
      return image;
    });
  };
  const handleGetAllImages = () => {
    const images = importAll(
      require.context("../../addons/Gifs/", false, /\.gif$/)
    );
    const schemmaBuilded = buildSchemma(images);
    const ArrImages = findImages(schemmaBuilded);
    console.log(schemmaBuilded)
    setArrImages(ArrImages);
  };
  if (arrImages.length < 1) {
    return <h1>Loading</h1>;
  } else {
    return (
      <Tilt className="tile-container" options={options}>
        <div className="box">
          <div className="black-filter"></div>
          <div className="switch-icon up"></div>
          <div className="text-content">
            <small>{data.resume}</small>
          </div>
          <ImageAnimation moduleImage={arrImages} />
          {/* <img src={backgroundImage} alt="" className="back-image-card" /> */}
        </div>
      </Tilt>
    );
  }
};
