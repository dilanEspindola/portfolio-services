import { useRef, useEffect } from "react";
import Typed from "typed.js";
import { Link } from "react-scroll";
import "animate.css";

import { SectionOne } from "./SectionOne";

import "../css/home.css";

export const Home = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Lorem Ipsum is simply dummy text of the printing and typesetting.",
        "Contrary to popular belief, Lorem Ipsum is not simply random text.",
        "There are many variations of passages of Lorem Ipsum available.",
      ],
      startDelay: 600,
      typeSpeed: 70,
      loop: true,
      backDelay: 200,
      backSpeed: 20,
      showCursor: false,
    });
  });

  return (
    <>
      <div className="home">
        <div className="contenido-home">
          <main className="">
            <div className="contenedor-txt-automatico">
              <span ref={el} className="txt-automatico"></span>
            </div>
            <Link
              className="icon-arrow"
              to="section1"
              smooth={true}
              duration={500}
            >
              <i className="fa-solid fa-arrow-down-long animate__animated animate__fadeInLeftBig"></i>
            </Link>
          </main>
        </div>
      </div>
      <section id="section1" className="section-1">
        <SectionOne />
      </section>
    </>
  );
};
