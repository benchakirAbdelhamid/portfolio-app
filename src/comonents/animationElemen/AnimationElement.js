import React, { useEffect } from "react";
import "./animationElement.css";
import up_arrow from "../../assets/up-arrow1.png";
function AnimationElement() {
  /*=============== SHOW SCROLL UP ===============*/
  function scrollUp() {
    const scrollUp = document.getElementById("scroll-up");
    if (this.scrollY >= 350) {
      scrollUp.classList.add("show-scroll");
    } else {
      scrollUp.classList.remove("show-scroll");
    }
  }
  window.addEventListener("scroll", scrollUp);

  // loading and background white ==>refreach
  //   const fadeOut = () => {
  setTimeout(() => {
    const loaderWrapper = document.querySelector(".wrapper");
    loaderWrapper.classList.add("fade");
  }, 300);
  //   };
  //   window.addEventListener("load", fadeOut);
  useEffect(() => {
    let cursor1 = document.querySelector(".cursor-1");
    let cursor2 = document.querySelector(".cursor-2");
    const link_cursor = document.querySelectorAll("a");
    const btn_button = document.querySelectorAll("button");
    // console.log(cursor1, cursor2);
    window.onmousemove = (e) => {
      cursor1.style.top = e.pageY + "px";
      cursor1.style.left = e.pageX + "px";
      cursor2.style.top = e.pageY + "px";
      cursor2.style.left = e.pageX + "px";
    };
    link_cursor.forEach((links) => {
      links.onmouseenter = () => {
        cursor1.classList.add("active");
        cursor2.classList.add("active");
      };

      links.onmouseleave = () => {
        cursor1.classList.remove("active");
        cursor2.classList.remove("active");
      };
      btn_button.forEach((links) => {
        links.onmouseenter = () => {
          cursor1.classList.add("active");
          cursor2.classList.add("active");
        };

        links.onmouseleave = () => {
          cursor1.classList.remove("active");
          cursor2.classList.remove("active");
        };
      });
    });
  }, []);

  return (
    <div>
      {/* <!-- loading --> */}
      <div className="wrapper">
        <div className="loader"></div>
      </div>

      {/* <!--=============== SCROLL UP ===============--> */}
      <a href="#home" className="scrollup" id="scroll-up">
        <img style={{ width: "50px" }} src={up_arrow} alt="" />
      </a>

      {/* <!-- custom cursors  --> */}
      <div className="cursor-1"></div>
      <div className="cursor-2"></div>
    </div>
  );
}

export default AnimationElement;
