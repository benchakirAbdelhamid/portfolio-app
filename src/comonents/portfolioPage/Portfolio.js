import React, { useRef, useEffect } from "react";
import port1 from "../../assets/port1.png";
import port2 from "../../assets/port2.png";
import port3 from "../../assets/port3.png";
import port4 from "../../assets/port4.png";
import port5 from "../../assets/port5.png";
import port6 from "../../assets/port6.png";
import port7 from "../../assets/port7.png";
import port8 from "../../assets/port8.png";
import mixitup from "mixitup";
import "./Portfolio.css";
function Portfolio() {
  // Just use an useEffect hook like that
  useEffect(() => {
    mixitup(".portfolio-gallery", {
      selectors: {
        target: ".item",
      },
      animation: {
        duration: 600,
        nudge: true,
        reverseOut: true,
        effects:
          "fade translateY(20%) translateZ(-100px) rotateX(90deg) rotateZ(75deg) stagger(30ms)",
      },
    });
  }, []);

  return (
    <>
      {/* <!-- --------- Portfolio Section --------- --> */}

      <section className="portfolio section" id="portfolio">
        <div className="parent-color-portfolio">
          <div className="color"></div>
          <div className="color"></div>
          <div className="color"></div>
          {/* <!-- box --> */}
          <div className="square-box5 box-square" style={{ "--i": "3" }}></div>
          <div className="square-box6 box-square" style={{ "--i": "1" }}></div>
          <div className="square-box7 box-square" style={{ "--i": "5" }}></div>
          <div className="square-box8 box-square" style={{ "--i": "5" }}></div>
          <div className="square-box9 box-square" style={{ "--i": "5" }}></div>

          <div className="container">
            <div className="portfolio-header">
              <div className="portfolio-title">
                <h3 className="sub-heading">Portfolio</h3>
                <h3 className="heading">Latest Projects</h3>
              </div>
              <div className="filter-btns">
                <button
                  className="filter-btn mixitup-control"
                  data-filter="all"
                >
                  ALL
                </button>
                <button
                  className="filter-btn mixitup-control"
                  data-filter=".product"
                >
                  REACT
                </button>

                <button
                  className="filter-btn mixitup-control"
                  data-filter=".web"
                >
                  HTML/CSS/JAVASCRIPT
                </button>
              </div>
            </div>
            <div className="portfolio-gallery">
              <div className="mix prt-card item product" data-order="1">
                <div className="prt-image">
                  <img src={port1} alt="" />
                  <div className="prt-overlay">
                    <span className="prt-icon zoom_icon">
                      <a
                        href="https://famous-gelato-bf9959.netlify.app"
                        target="_blank"
                      >
                        <i className="bx bx-link-external"></i>
                      </a>
                    </span>
                  </div>
                </div>
                <div className="prt-desc">
                  <h3>restaurant app</h3>
                  <a
                    href="https://famous-gelato-bf9959.netlify.app"
                    target="_blank"
                    className="btn secondary-btn sm"
                  >
                    Read more
                  </a>
                </div>
              </div>

              <div className="mix prt-card item product" data-order="2">
                <div className="prt-image">
                  <img src={port2} alt="" />
                  <div className="prt-overlay">
                    <span className="prt-icon zoom_icon">
                      <a
                        href="https://moviess-iota.vercel.app/"
                        target="_blank"
                      >
                        {/* <i className="uil uil-search-plus"></i> */}
                        <i class="bx bx-link-external"></i>
                      </a>
                    </span>
                  </div>
                </div>
                <div className="prt-desc">
                  <h3>movies app</h3>
                  <a
                    href="https://moviess-iota.vercel.app/"
                    target="_blank"
                    className="btn secondary-btn sm"
                  >
                    Read more
                  </a>
                </div>
              </div>

              <div className="mix prt-card item web" data-order="3">
                <div className="prt-image">
                  <img src={port3} alt="" />
                  <div className="prt-overlay">
                    <span className="prt-icon zoom_icon">
                      <a
                        href="https://web-site2-8kt3.vercel.app/"
                        target="_blank"
                      >
                        <i class="bx bx-link-external"></i>
                      </a>
                    </span>
                  </div>
                </div>
                <div className="prt-desc">
                  <h3>Online Classes </h3>
                  <a
                    href="https://web-site2-8kt3.vercel.app/"
                    target="_blank"
                    className="btn secondary-btn sm"
                  >
                    Read more
                  </a>
                </div>
              </div>

              <div className="mix prt-card item web" data-order="4">
                <div className="prt-image">
                  <img src={port4} alt="" />
                  <div className="prt-overlay">
                    <span className="prt-icon zoom_icon">
                      <a
                        href="https://website-khaki-zeta.vercel.app/"
                        target="_blank"
                      >
                        <i class="bx bx-link-external"></i>
                      </a>
                    </span>
                  </div>
                </div>
                <div className="prt-desc">
                  <h3>Hair Studio</h3>
                  <a
                    href="https://website-khaki-zeta.vercel.app/"
                    target="_blank"
                    className="btn secondary-btn sm"
                  >
                    Read more
                  </a>
                </div>
              </div>

              <div className="mix prt-card item web" data-order="5">
                <div className="prt-image">
                  <img src={port5} alt="" />
                  <div className="prt-overlay">
                    <span className="prt-icon zoom_icon">
                      <a href="https://website-car.vercel.app/" target="_blank">
                        <i class="bx bx-link-external"></i>
                      </a>
                    </span>
                  </div>
                </div>
                <div className="prt-desc">
                  <h3>rent a car</h3>
                  <a
                    href="https://website-car.vercel.app/"
                    target="_blank"
                    className="btn secondary-btn sm"
                  >
                    Read more
                  </a>
                </div>
              </div>

              <div className="mix prt-card item web" data-order="6">
                <div className="prt-image">
                  <img src={port6} alt="" />
                  <div className="prt-overlay">
                    <span className="prt-icon zoom_icon">
                      <a
                        href="https://web-site1-wine.vercel.app/"
                        target="_blank"
                      >
                        <i class="bx bx-link-external"></i>
                      </a>
                    </span>
                  </div>
                </div>
                <div className="prt-desc">
                  <h3>portfolio app</h3>
                  <a
                    href="https://web-site1-wine.vercel.app/"
                    target="_blank"
                    className="btn secondary-btn sm"
                  >
                    Read more
                  </a>
                </div>
              </div>
              <div className="mix prt-card item product" data-order="7">
                <div className="prt-image">
                  <img src={port7} alt="" />
                  <div className="prt-overlay">
                    <span className="prt-icon zoom_icon">
                      <a
                        href="https://web-frame-motion.vercel.app/"
                        target="_blank"
                      >
                        <i class="bx bx-link-external"></i>
                      </a>
                    </span>
                  </div>
                </div>
                <div className="prt-desc">
                  <h3>Design animation</h3>
                  <a
                    href="https://web-frame-motion.vercel.app/"
                    target="_blank"
                    className="btn secondary-btn sm"
                  >
                    Read more
                  </a>
                </div>
              </div>
              <div className="mix prt-card item web" data-order="8">
                <div className="prt-image">
                  <img src={port8} alt="" />
                  <div className="prt-overlay">
                    <span className="prt-icon zoom_icon">
                      <a
                        href="https://fitness-zeta-cyan.vercel.app/"
                        target="_blank"
                      >
                        <i class="bx bx-link-external"></i>
                      </a>
                    </span>
                  </div>
                </div>
                <div className="prt-desc">
                  <h3>fitness app</h3>
                  <a
                    href="https://fitness-zeta-cyan.vercel.app/"
                    target="_blank"
                    className="btn secondary-btn sm"
                  >
                    Read more
                  </a>
                </div>
              </div>




            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Portfolio;
