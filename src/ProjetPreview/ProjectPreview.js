import React, {
  useRef,
  useImperativeHandle,
  forwardRef,
  useState,
} from "react";
import { ItemComponent } from "../ItemComponent/ItemComponent";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { TitleProjectComponent } from "../TitleProjectComponent/TitleProjectComponent";
import "./ProjectPreview.scss";
export const ProjectPreview = forwardRef(({ callNxtPage, data }, ref) => {
  const [currentPage, setCurrentPage] = useState(0);
  const childRefParallax = useRef();
  function handleChanguePageFn(currentPageParent) {
    if (currentPage < 2) {
      const page = currentPage + 1;
      childRefParallax.current.scrollTo(page);
      setCurrentPage(page);
    } else {
      const nxtPageParent = currentPageParent + 1;
      setCurrentPage(0);
      callNxtPage(nxtPageParent);
    }
  }
  useImperativeHandle(ref, () => ({
    callFnHandleChangueScreenProjects(currentPageParent) {
      handleChanguePageFn(currentPageParent);
    },
  }));
  if (!data) {
    return <h1>Loading</h1>;
  } else {
    return (
      <div className="project-container">
        <Parallax pages={data.description.length} ref={childRefParallax}>
          {data.description.map((e,i) => (
            <ParallaxLayer className="item-layer" offset={i} speed={1.5}>
              <div className="item-container">
                <ItemComponent data={e}/>
              </div>
            </ParallaxLayer>
          ))}
          <ParallaxLayer
            className="title-layer"
            sticky={{ start: 0, end: 3 }}
            speed={0.5}
          >
            <div className="title-container">
              <TitleProjectComponent nameProject={data.name_project} />
            </div>
          </ParallaxLayer>
        </Parallax>
      </div>
    );
  }
});
