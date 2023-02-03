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
                <i className="bx bxl-react icon-about"></i>
              </div>
            </div>
            <div className="about-info">
              <h3 className="sub-heading">About me</h3>
              <h1 className="heading">
              
                better experiences
              </h1>
              <p className="text">
                Hello, my name is Abdel Hamid benchakir , I am currently working
                as a full independent developer while also looking for training
                opportunities with companies to further develop my capabilities.
                I have a strong passion for programming and two years experience
                in different projects individually and as part of a team. I have
                mastered a range of advanced technologies, including{" "}
                <b>
                  JavaScript , PHP , React , Laravel , MongoDB , MySQL ,
                  Git/Github , HTML/CSS{" "}
                </b>{" "}
                , and many other <b> frameworks</b> . I have a Cisco snake
                certificate and I have also done many projects and websites
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
