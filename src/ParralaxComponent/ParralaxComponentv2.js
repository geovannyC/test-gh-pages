import React, { useRef } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { Page1 } from "../Pages/Page1/Page1";
import { ProjectPreview } from "../ProjetPreview/ProjectPreview";
import { Page2 } from "../Pages/Page2/Page2";
import "./ParralaxComponentv2.scss";
import { ContactPage } from "../Pages/ContactPage/ContactPage";
import { TitleProjectItems } from "../TitleProjectItems/TitleProjectItems";

import ProjectsJson from "../ListProjects.json";
import { Border } from "../BorderLeft/Border";
export function ParralaxComponentv2() {
  const childRefParallax = useRef();

  const childRefProjectPreview1 = useRef();
  const childRefProjectPreview2 = useRef();
  function callNxtPage(currentPage) {
    switch (true) {
      case currentPage === 1:
        childRefProjectPreview1.current.callFnHandleChangueScreenProjects(
          currentPage
        );
        break;
      case currentPage === 2:
        childRefProjectPreview2.current.callFnHandleChangueScreenProjects(
          currentPage
        );
        break;

      default:
        break;
    }
  }
  function handleChangueCurrentPage(nxtPage) {
    if (nxtPage <= 2) {
      childRefParallax.current.scrollTo(nxtPage);
    } else {
      childRefParallax.current.scrollTo(3);
    }
  }
  function handleReditectCurrentPage(page) {
    childRefParallax.current.scrollTo(page);
  }
  return (
    <div className="general-container-tiles">
      <div className="transform-format">
        <div className="container-left-border ">

          <Border redirect={handleReditectCurrentPage}/>
          {/* <BorderLeft redirect={handleReditectCurrentPage} /> */}
        </div>
        <div className="container">
          <Parallax pages={4} ref={childRefParallax}>
            <ParallaxLayer
              offset={0}
              speed={2.5}
              onClick={() => childRefParallax.current.scrollTo(1)}
            >
              <Page1 />
            </ParallaxLayer>
            <ParallaxLayer offset={1} speed={0.5}>
              <Page2 />
            </ParallaxLayer>
            <ParallaxLayer offset={1} speed={1.5}>
              <div className="title-items">
                <TitleProjectItems items={ProjectsJson[0].tools} />
              </div>
            </ParallaxLayer>
            <ParallaxLayer offset={2} speed={0.5}>
              <Page2 />
            </ParallaxLayer>
            <ParallaxLayer offset={2} speed={1.5}>
              <div className="title-items">
                <TitleProjectItems items={ProjectsJson[1].tools} />
              </div>
            </ParallaxLayer>
            <ParallaxLayer offset={2} speed={1.5}>
              <div className="title-items">
                <TitleProjectItems items={ProjectsJson[1].tools} />
              </div>
            </ParallaxLayer>
            {/* <ParallaxLayer className="container-item" offset={3.2} speed={2}>
            <ContactItem
              link="https://github.com/geovannyC"
              icon={github}
              type="link"
            />
          </ParallaxLayer>
          <ParallaxLayer className="container-item" offset={3.3} speed={1.7}>
            <ContactItem
              link="https://app.codesignal.com/profile/geovanny_qka"
              icon={codesignal}
              type="link"
            />
          </ParallaxLayer>
          <ParallaxLayer className="container-item" offset={3.4} speed={1.4}>
            <ContactItem
              link="https://www.linkedin.com/in/geovanny-casagallo-53113221b/"
              icon={linkedin}
              type="link"
            />
          </ParallaxLayer>
          <ParallaxLayer className="container-item" offset={3.5} speed={1.1}>
            <ContactItem link="srmaeson@outlook.com" icon={mail} type="copy" />
          </ParallaxLayer>
          <ParallaxLayer className="container-item" offset={3.6} speed={0.8}>
            <ContactItem
              link="maesongamer@gmail.com"
              icon={gmail}
              type="copy"
            />
          </ParallaxLayer>

          <ParallaxLayer className="container-item" offset={3.7} speed={1.4}>
            <ContactItem link="Curriculum Vitae" icon={cv} type="download" />
          </ParallaxLayer> */}

            <ParallaxLayer offset={3} speed={0.5}>
              <ContactPage />
            </ParallaxLayer>
            <ParallaxLayer
              offset={1}
              speed={2.5}
              onClick={() => callNxtPage(1)}
            >
              <ProjectPreview
                callNxtPage={handleChangueCurrentPage}
                data={ProjectsJson[0]}
                ref={childRefProjectPreview1}
              />
            </ParallaxLayer>

            <ParallaxLayer
              offset={2}
              speed={2.5}
              onClick={() => callNxtPage(2)}
            >
              <ProjectPreview
                callNxtPage={handleChangueCurrentPage}
                data={ProjectsJson[1]}
                ref={childRefProjectPreview2}
              />
            </ParallaxLayer>
          </Parallax>
        </div>
      </div>
    </div>
  );
}
