import React from "react";
import styles from "../styles/Home.module.scss";
import "../styles/Home.css";
//Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import img1 from "../images/slider1.jpg";
import img2 from "../images/slider2.jpg";
import img3 from "../images/1.jpg";
import img4 from "../images/slider4.jpg";
import img5 from "../images/4.jpg";
import img6 from "../images/2.jpg";
// import Swiper core and required modules
import { Navigation, Pagination, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
const Home = () => {
  return (
    <div className={styles.container}>
      <h2>Chapa General Enterprises limited</h2>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        slidesPerView={2}
        spaceBetween={20}
        updateOnWindowResize={true}
        className={styles.myswiper}
      >
        <SwiperSlide className={styles.swiperslide}>
          <div>
            <img src={img3} alt="slider" />
            <span>Transformer installation</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperslide}>
          <div>
            <img src={img1} alt="slider" />
            <span>power Line Supply</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperslide}>
          <div>
            <img src={img2} alt="slider" />
            <span>MV Vertical Angle section construction</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperslide}>
          <div>
            <img src={img4} alt="slider" />
            <span>power Line construction</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperslide}>
          <div>
            <img src={img5} alt="slider" />
            <span>pole erection</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperslide}>
          <div>
            <img src={img6} alt="slider" />
            <span>power line maintenance</span>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Home;
