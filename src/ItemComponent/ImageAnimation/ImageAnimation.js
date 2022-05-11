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
      setTimeout(() => {
        if (index === item) {
          set((state) => (state + 1) % moduleImage.length);
        }
      }, 18000);
    },
    exitBeforeEnter: true,
  });
  if (moduleImage.length < 1||!moduleImage) {
    return <h1>Loading</h1>;
  } else {
    return (
      <div className="test-img">
        {transitions((style, i) => (
          <animated.div
            style={{
              ...style,

              // backgroundImage: slides[i],
            }}
          >
            <img
              src={moduleImage[i] ? moduleImage[i].file : ""}
              alt=""
              className="back-image-card"
            />
          </animated.div>
        ))}
      </div>
    );
  }
}
