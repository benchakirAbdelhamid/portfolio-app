import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <>
      <footer id="contact">
        <div className="parent_footer">
          {/* <svg
            className="footer_svg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill="#5000ca"
              fill-opacity="1"
              d="M0,32L60,80C120,128,240,224,360,224C480,224,600,128,720,112C840,96,960,160,1080,176C1200,192,1320,160,1380,144L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            ></path>
          </svg> */}
          <div className="container">
            <section className="section_test">
              <ul className="section_ul">
                <li className="section_li">
                  <a href="#">
                    <i className="bx bxl-facebook"></i>
                  </a>
                </li>
                <li className="section_li">
                  <a href="#">
                    <i className="bx bxl-instagram"></i>
                  </a>
                </li>
                <li className="section_li">
                  <a href="https://www.linkedin.com/in/abdelhamid-benchakir-844788264/" target="_blank">
                    <i className="bx bxl-linkedin"></i>
                  </a>
                </li>
                <li className="section_li">
                  <a ref="https://github.com/benchakirAbdelhamid" target="_blank">
                    <i className="bx bxl-github"></i>
                  </a>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
