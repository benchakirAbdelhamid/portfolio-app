import React, { useRef, useState, useEffect } from "react";
import "./HomePage.css";
import square1 from "../../assets/square1.png";
import img2 from "../../assets/2.jpg";
import handme from "../../assets/handme.png";
import circle1 from "../../assets/circle1.png";
import dots from "../../assets/dots.png";
import Typed from "typed.js";
import pdf from "./cv.pdf";

function HomePage() {
  // create ref element
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Frontend developer", "Backend developer", "UI/UX design"],
      startDelay: 300,
      typeSpeed: 150,
      backSpeed: 150,
      backDelay: 150,
      smartBackspace: true,
      loop: true,
      showCursor: false,
    });
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <section className="showcase-area section" id="home">
        <div className="parent-color-home">
          {/* <!-- color --> */}
          <div className="color "></div>
          <div className="color"></div>
          <div className="color"></div>
          {/* <!-- color --> */}
          {/* <!-- box --> */}
          <div className="square-box box-square" style={{ "--i": "3" }}></div>
          <div className="square-box box-square" style={{ "--i": "1" }}></div>
          {/* <!-- box --> */}

          <img src={square1} className="shape square" alt="" />
          <div className="container">
            <div className="showcase-info">
              <h3 className="sub-heading" id="xx">
                Hello, my name is
              </h3>
              <h1 className="heading name">
                Hamid <br /> Benchakir
              </h1>
              <p className="my-text">
                I' m a freelance <span className="typing" ref={el}></span>
                <img src={handme} alt="" />
              </p>
              <div className="cta">
                <a href="mailto:hamidbenchakir@gmail.com" className="btn">
                  Contact me
                </a>
                <a href={pdf} download className="btn secondary-btn">
                  Download CV cv
                </a>
              </div>
            </div>
            <div className="showcase-image">
              <figure className="hero-banner has-before">
                <img src={img2} className="img-cover" alt="" />
              </figure>

              <div className="social">
                <div className="social_container">
                  <div className="my_social">
                    <div className="social_content">
                      <a href="#">
                        <i className="bx bxl-facebook-circle social_icon"></i>
                      </a>
                      <div className="social_tooltip social_tooltip-left">
                        facebook
                      </div>
                    </div>
                  </div>

                  <div className="my_social">
                    <div className="social_content">
                      <a href="#">
                        <i className="bx bxl-instagram-alt social_icon"></i>
                      </a>
                      <div className="social_tooltip social_tooltip-top">
                        instagram
                      </div>
                    </div>
                  </div>


                  <div className="my_social">
                    <div className="social_content">
                      <a href="https://github.com/benchakirAbdelhamid" target="_blank">
                        <i className="bx bxl-github social_icon"></i>
                      </a>
                      <div className="social_tooltip social_tooltip-top">
                        github
                      </div>
                    </div>
                  </div>

                  <div className="my_social">
                    <div className="social_content">
                      <a href="https://www.linkedin.com/in/abdelhamid-benchakir-844788264/" target="_blank">
                        <i className="bx bxl-linkedin social_icon"></i>
                      </a>
                      <div className="social_tooltip social_tooltip-right">
                        linkedin
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <img src={circle1} className="shape circle" alt="" />
              <img src={dots} className="shape dots" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
