import React, { useRef, useEffect } from "react";
import port1 from "../../assets/port1.jpg";
import port2 from "../../assets/port2.png";
import port3 from "../../assets/port3.jpg";
import port4 from "../../assets/port4.png";
import port5 from "../../assets/port5.png";
import port6 from "../../assets/port6.jpg";
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
                  All
                </button>
                <button
                  className="filter-btn mixitup-control"
                  data-filter=".product"
                >
                  REACT
                </button>
                <button
                  className="filter-btn mixitup-control"
                  data-filter=".inter"
                >
                  PHP
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
              <div className="mix prt-card item inter" data-order="1">
                <div className="prt-image">
                  <img src={port1} alt="" />
                  <div className="prt-overlay">
                    <span className="prt-icon zoom_icon">
                      <a href="#">
                        <i className="bx bx-link-external"></i>
                      </a>
                    </span>
                  </div>
                </div>
                <div className="prt-desc">
                  <h3>Olido interaction</h3>
                  <a href="#" className="btn secondary-btn sm">
                    Read more
                  </a>
                </div>
              </div>

              <div className="mix prt-card item product" data-order="2">
                <div className="prt-image">
                  <img src={port2} alt="" />
                  <div className="prt-overlay">
                    <span className="prt-icon zoom_icon">
                      <a href="#">
                        {/* <i className="uil uil-search-plus"></i> */}
                        <i class="bx bx-link-external"></i>
                      </a>
                    </span>
                  </div>
                </div>
                <div className="prt-desc">
                  <h3>John product design</h3>
                  <a href="#" className="btn secondary-btn sm">
                    Read more
                  </a>
                </div>
              </div>

              <div className="mix prt-card item web" data-order="3">
                <div className="prt-image">
                  <img src={port3} alt="" />
                  <div className="prt-overlay">
                    <span className="prt-icon zoom_icon">
                      <a href="#">
                        <i class="bx bx-link-external"></i>
                      </a>
                    </span>
                  </div>
                </div>
                <div className="prt-desc">
                  <h3>Meta web design</h3>
                  <a href="#" className="btn secondary-btn sm">
                    Read more
                  </a>
                </div>
              </div>

              <div className="mix prt-card item web" data-order="4">
                <div className="prt-image">
                  <img src={port4} alt="" />
                  <div className="prt-overlay">
                    <span className="prt-icon zoom_icon">
                      <a href="#">
                        <i class="bx bx-link-external"></i>
                      </a>
                    </span>
                  </div>
                </div>
                <div className="prt-desc">
                  <h3>TwitUp web design</h3>
                  <a href="#" className="btn secondary-btn sm">
                    Read more
                  </a>
                </div>
              </div>

              <div className="mix prt-card item inter" data-order="5">
                <div className="prt-image">
                  <img src={port5} alt="" />
                  <div className="prt-overlay">
                    <span className="prt-icon zoom_icon">
                      <a href="#">
                        <i class="bx bx-link-external"></i>
                      </a>
                    </span>
                  </div>
                </div>
                <div className="prt-desc">
                  <h3>Markus interaction</h3>
                  <a href="#" className="btn secondary-btn sm">
                    Read more
                  </a>
                </div>
              </div>

              <div className="mix prt-card item product" data-order="6">
                <div className="prt-image">
                  <img src={port6} alt="" />
                  <div className="prt-overlay">
                    <span className="prt-icon zoom_icon">
                      <a href="#">
                        <i class="bx bx-link-external"></i>
                      </a>
                    </span>
                  </div>
                </div>
                <div className="prt-desc">
                  <h3>Demga web design</h3>
                  <a href="#" className="btn secondary-btn sm">
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
