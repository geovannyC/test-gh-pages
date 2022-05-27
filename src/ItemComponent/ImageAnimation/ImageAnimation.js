import React, { useState } from "react";
import { useTransition, animated } from "@react-spring/web";
export function ImageAnimation({ moduleImage }) {
  const [index, set] = useState(0);
  const transitions = useTransition(index, {
    key: index,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 1000 },
    onRest: (_a, _b, item) => {
      console.log(moduleImage[index])
      if (item === index)
        setTimeout(() => {
          if (index === item) {
            set((state) => (state + 1) % moduleImage.length);
          }
        },  moduleImage[index].time);
    },
    exitBeforeEnter: true,
  });
  const ModuleImage = () => {
    if (moduleImage.length < 1 || !moduleImage) {
      return <h1>Loading</h1>;
    } else {
      return (
        <div className="test-img">
          {transitions((style, i) => (
            <animated.div
              style={{
                ...style,
              }}
            >
              <video
                src={moduleImage[i] ? moduleImage[i].file : ""}
                className="back-image-card"
                autoPlay="true"
              />
              {/* <img
                src={moduleImage[i] ? moduleImage[i].file : ""}
                alt=""
            
              /> */}
            </animated.div>
          ))}
        </div>
      );
    }
  };
  return <ModuleImage />;
}
