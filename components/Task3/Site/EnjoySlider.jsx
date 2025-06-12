import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, A11y, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Mainslider.css";
import { FaRegHeart } from "react-icons/fa6";

import gallery1 from "../images/gallery/gallery-1.png";

export default function EnjoySlider() {
  const slides = [
    {
      image: gallery1,
      image_title: "₹125 OFF",
      image_desc: "ABOVE ₹199",
      title: "The Black Chimney",
      description: "⭐ 4.1 • 25-30 mins",
      buttonText: "Biryani",
    },
    {
      image: gallery1,
      image_title: "₹125 OFF",
      image_desc: "ABOVE ₹199",
      title: "The Black Chimney",
      description: "⭐ 4.1 • 25-30 mins",
      buttonText: "Biryani",
    },
    {
      image: gallery1,
      image_title: "₹125 OFF",
      image_desc: "ABOVE ₹199",
      title: "The Black Chimney",
      description: "⭐ 4.1 • 25-30 mins",
      buttonText: "Biryani",
    },
    {
      image: gallery1,
      image_title: "₹125 OFF",
      image_desc: "ABOVE ₹199",
      title: "The Black Chimney",
      description: "⭐ 4.1 • 25-30 mins",
      buttonText: "Biryani",
    },
    {
      image: gallery1,
      image_title: "₹125 OFF",
      image_desc: "ABOVE ₹199",
      title: "The Black Chimney",
      description: "⭐ 4.1 • 25-30 mins",
      buttonText: "Biryani",
    },
    {
      image: gallery1,
      image_title: "₹125 OFF",
      image_desc: "ABOVE ₹199",
      title: "The Black Chimney",
      description: "⭐ 4.1 • 25-30 mins",
      buttonText: "Biryani",
    },
    {
      image: gallery1,
      image_title: "₹125 OFF",
      image_desc: "ABOVE ₹199",
      title: "The Black Chimney",
      description: "⭐ 4.1 • 25-30 mins",
      buttonText: "Biryani",
    },
    {
      image: gallery1,
      image_title: "₹125 OFF",
      image_desc: "ABOVE ₹199",
      title: "The Black Chimney",
      description: "⭐ 4.1 • 25-30 mins",
      buttonText: "Biryani",
    },
    {
      image: gallery1,
      image_title: "₹125 OFF",
      image_desc: "ABOVE ₹199",
      title: "The Black Chimney",
      description: "⭐ 4.1 • 25-30 mins",
      buttonText: "Biryani",
    },
    {
      image: gallery1,
      image_title: "₹125 OFF",
      image_desc: "ABOVE ₹199",
      title: "The Black Chimney",
      description: "⭐ 4.1 • 25-30 mins",
      buttonText: "Biryani",
    },
    {
      image: gallery1,
      image_title: "₹125 OFF",
      image_desc: "ABOVE ₹199",
      title: "The Black Chimney",
      description: "⭐ 4.1 • 25-30 mins",
      buttonText: "Biryani",
    },
    {
      image: gallery1,
      image_title: "₹125 OFF",
      image_desc: "ABOVE ₹199",
      title: "The Black Chimney",
      description: "⭐ 4.1 • 25-30 mins",
      buttonText: "Biryani",
    },
    {
      image: gallery1,
      image_title: "₹125 OFF",
      image_desc: "ABOVE ₹199",
      title: "The Black Chimney",
      description: "⭐ 4.1 • 25-30 mins",
      buttonText: "Biryani",
    },
    {
      image: gallery1,
      image_title: "₹125 OFF",
      image_desc: "ABOVE ₹199",
      title: "The Black Chimney",
      description: "⭐ 4.1 • 25-30 mins",
      buttonText: "Biryani",
    },
  ];

  return (
    <>
    <div className="d-flex align-items-center">
        <h1>👇🏽</h1>
        <div>
            <h3 className="enjoy-title p-0 m-0">ENJOY YOUR WELCOME OFFER!</h3>
            <p>Get flat ₹125 off on your next order</p>
        </div>
    </div>
        
    <Swiper
      modules={[Navigation, Scrollbar, A11y, Pagination]}
      spaceBetween={20}
      breakpoints={{
        0: { slidesPerView: 1.2 },
        576: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        1024: { slidesPerView: 5 },
      }}
    >
        
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div
            className="enjoy-wrap text-white p-3 rounded"
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "200px",
              borderRadius: "20px",
              position: "relative",
              overflow: "hidden",
              display: "flex",
              alignItems: "flex-end",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.5)", // dark transparent overlay
                zIndex: 1,
              }}
            >
                <small className="badge d-flex align-items-center justify-content-center">
                    <p className="p-0 m-0">one</p>
                    <p  className="p-0 my-1" style={{fontSize:"9px", border:"1px solid black"}}>LITE</p>
                </small>
                <div className="heart">
                 <FaRegHeart size={18} />
                </div>

              
            </div>
            <div style={{zIndex:"2"}}>
            <h3 style={{color:"white"}}>{slide.image_title}</h3> 
            <h5 style={{color:"white"}}>{slide.image_desc}</h5>
            </div>


          </div>
          <h6 className="fw-bold">{slide.title}</h6>
              <p className="mb-1">{slide.description}</p>
              <p className="pera">
                {slide.buttonText}
              </p>
        </SwiperSlide>
      ))}
    </Swiper>
    </>

  );
}
