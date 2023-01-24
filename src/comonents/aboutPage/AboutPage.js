import React from "react";
import "./About.css";
function About() {
  return (
    <>
      {/* <!-- --------- About Section --------- --> */}
      <section className="about section" id="about">
        <div className="parent-color-about">
          <div className="color"></div>
          <div className="color"></div>
          <div className="color"></div>
          {/* <!-- box --> */}
          <div className="square-box1 box-square" style={{ "--i": "3" }}></div>
          <div className="square-box1 box-square" style={{ "--i": "1" }}></div>
          <div className="square-box2 box-square" style={{ "--i": "1" }}></div>
          {/* <!-- box --> */}
          <img src="assets/triangle.png" className="shape triangle" alt="" />
          <div className="container">
            <div className="about-grid">
              <div className="about-card">
                <i className="bx bxl-html5 icon-about"></i>
                <i className="bx bxl-bootstrap icon-about"></i>
                <i className="bx bxl-figma icon-about"></i>
              </div>

              <div className="about-card">
                <i className="bx bxl-react icon-about"></i>
                <i className="bx bxl-tailwind-css icon-about"></i>
                <i className="bx bx-code-alt icon-about"></i>
              </div>

              <div className="about-card">
                <i className="bx bxl-css3 icon-about"></i>
                <i className="bx bxl-php icon-about"></i>
                <i className="bx bx-code icon-about"></i>
              </div>

              <div className="about-card">
                <i className="bx bxl-javascript icon-about"></i>
                <i className="bx bxl-sass icon-about"></i>
                <i className="fa-brands fa-laravel icon-about"></i>
              </div>
            </div>
            <div className="about-info">
              <h3 className="sub-heading">About me</h3>
              <h1 className="heading">
                Better design <br />
                better experiences
              </h1>
              <p className="text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et
                reprehenderit velit, modi dolorum voluptatem perferendis
                voluptas. Molestiae cum veniam sunt deleniti? Architecto est
                modi obcaecati consequatur reiciendis nostrum rerum dicta?
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
