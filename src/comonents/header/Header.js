import React, { useEffect, useRef, useState } from "react";
import "./Header.css";

function Header() {
  const [dark, setThemeDark] = useState(true);
  const [scrolledHeader, setscrolledHeader] = useState(false);
  const useR = useRef();
  document.body.className = dark ? "dark" : "";
  // let classTheme = !dark ? "uil uil-moon toggle-btn " : "uil uil-sun toggle-btn";
  let classTheme = !dark ? "bx bx-moon toggle-btn" : "bx bx-sun toggle-btn";
  const changeDark = () => {
    setThemeDark(!dark);
    document.body.className = dark ? "dark" : "";
    removeMenu();
  };
  window.addEventListener("scroll", () => {
    window.pageYOffset > 0 ? setscrolledHeader(true) : setscrolledHeader(false);
  });
  const clickhamburger = () => {
    document.body.classList.toggle("open");
  };

  useEffect(() => {
    // const menu = document.querySelector(".menu");
    // console.log(menu);
    useR.current.addEventListener("click", () => {
      // console.log("d");
      document.body.classList.toggle("stopScrolling");
      useR.current.classList.toggle("opened");
      useR.current.setAttribute(
        "aria-expanded",
        useR.current.classList.contains("opened")
      );
    });
  });
  const removeMenu = () => {
    document.body.classList.remove("open");
    document.body.classList.remove("stopScrolling");
    useR.current.classList.remove("opened");
  };

  return (
    <>
      {/* <!-- --------- Navbar --------- --> */}
      <header className={scrolledHeader ? "scrolled" : ""}>
        <nav className="container">
          <a href="#" className="logo">
            Portf <span>olio.</span>
          </a>
          <div className="links">
            <ul>
              <li>
                <a onClick={removeMenu} href="#home" className="nav-link">
                  Home
                </a>
              </li>
              <li>
                <a onClick={removeMenu} href="#about" className="nav-link">
                  About
                </a>
              </li>
              <li>
                <a onClick={removeMenu} href="#portfolio" className="nav-link">
                  Portfolio
                </a>
              </li>
              <li>
                <a onClick={removeMenu} href="#contact" className="nav-link">
                  Contact
                </a>
              </li>
            </ul>

            {/* <!-- button dark mode --> */}
            <i onClick={changeDark} className={classTheme}></i>
          </div>

          <div className="hamburger" ref={useR} onClick={clickhamburger}>
            <button className="menu" aria-label="Main Menu">
              <svg width="55" viewBox="0 0 100 100">
                <path
                  className="line line1"
                  d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
                />
                <path className="line line2" d="M 20,50 H 80" />
                <path
                  className="line line3"
                  d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
                />
              </svg>
            </button>
          </div>
        </nav>

        {/* <!-- .................................... --> */}
        <div className="scroll-indicator-container">
          <div className="scroll-indicator-bar"></div>
        </div>
      </header>
    </>
  );
}

export default Header;
