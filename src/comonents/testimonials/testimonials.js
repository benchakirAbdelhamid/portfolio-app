import React from "react";
import circle2 from "../../assets/circle2.png";
import square1 from "../../assets/square1.png";
import client1 from "../../assets/client1.png";
import client2 from "../../assets/client2.jpeg";
import client3 from "../../assets/client3.jpeg";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css/autoplay";

import "./testimonials.css";

function testimonials() {
  return (
    <>
      <section className="testimonials section">
        <div className="parent-color-client">
          <div className="color"></div>
          <div className="color"></div>
          <div className="color"></div>
          {/* <!-- box --> */}
          <div className="square-box10 box-square" style={{ "--i": "5" }}></div>
          <div className="square-box11 box-square" style={{ "--i": "5" }}></div>
          <div className="square-box11 box-square" style={{ "--i": "2" }}></div>
          <div className="container">
            <div className="section-background">
              {/* <!-- <img src="assets/Screenshot 2022-09-25 1601141.png" className="person" alt="" /> --> */}
              <img src={circle2} alt="" className="circle" />
              <img src={square1} alt="" className="square" />
            </div>

            <div className="swiper">
              <Swiper
                spaceBetween={0}
                centeredSlides={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                // navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
              >
                <div className="swiper-wrapper">
                  <SwiperSlide>
                    <div className="swiper-slide">
                      <div className="client">
                        <img src={client1} alt="" />
                        <div className="client-info">
                          <h4>Mr. Zakaria Imzilen </h4>
                          <h5>
                            <a href="#">Entrepreneur Présence Digital</a>
                          </h5>
                        </div>
                      </div>
                      <q className="text">
                        Hamid is the type of person who got the project tasks
                        and go execute on them no matter how hard the way it is.
                        It was my pleasure to work with you Hamid.
                      </q>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="swiper-slide">
                      <div className="client">
                        <img src={client2} alt="" />
                        <div className="client-info">
                          <h4>Karim Najib</h4>
                          <h5>
                            <a href="#">Freelance Desinger</a>
                          </h5>
                        </div>
                      </div>
                      <q className="text">
                        Ravi de traiter avec vous . J'ai aimé votre
                        professionnalisme au travail et la façon dont vous
                        traitez vos clients .
                      </q>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="swiper-slide">
                      <div className="client">
                        <img src={client3} alt="" />
                        <div className="client-info">
                          <h4>Yasmine Badra</h4>
                          <h5>
                            <a href="#">Commercant</a>
                          </h5>
                        </div>
                      </div>
                      <q
                        className="text"
                        dir="rtl"
                        style={{ fontSize: "20px" }}
                      >
                        بصراحة أحببت عملك وإلتزامك بالوقت المحدد من أجل تسليمك
                        مشروعي وسعيدة بالتعامل معاك
                      </q>
                    </div>
                  </SwiperSlide>
                </div>
                {/* <div className="swiper-pagination"></div> */}
              </Swiper>
            </div>

            <div className="testimonials-title">
              <h3 className="sub-heading color-white">Comments</h3>
              <h1 className="heading text_testimonials color-white">
                Hear from my happy clients
              </h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default testimonials;
