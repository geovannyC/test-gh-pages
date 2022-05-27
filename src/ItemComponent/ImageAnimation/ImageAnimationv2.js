import React, { useEffect, useState } from "react";
import { useInterval } from "../../until/useInterval";

export function ImageAnimationv2({ moduleImage }) {
  const [dataImages, setDataImages] = useState({
    count: 0,
    arrImages: [],
    loadingImage: false,
  });
  useEffect(() => {
    setDataImages({ ...dataImages, arrImages: moduleImage });
  }, []);
  useInterval(
    () => {
      setDataImages({ ...dataImages, loadingImage: true });
      setTimeout(() => {
        let newCount = { ...dataImages };
        newCount.count =
          newCount.count < newCount.arrImages.length - 1
            ? newCount.count + 1
            : 0;
        setDataImages({ ...dataImages, count: newCount.count, loadingImage: false });
      }, 1500);
    },
    dataImages.arrImages.length > 0
      ? parseInt(dataImages.arrImages[dataImages.count].time) * 1000
      : null
  );
  const SchemmaImageAnimation = () => {
    if (dataImages.arrImages.length > 0) {
      return (
        <div
          className={
            dataImages.loadingImage ? "test-img off-image" : "test-img on-image"
          }
        >
          <video
            src={dataImages.arrImages[dataImages.count].file}
            className="back-image-card"
            autoPlay={true}
          />
        </div>
      );
    } else {
      return <h1>Loading</h1>;
    }
  };
  return SchemmaImageAnimation();
}
