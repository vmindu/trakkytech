import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, A11y, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";  // Import pagination CSS
import "../css/Mainslider.css";
import "bootstrap/dist/css/bootstrap.min.css";
import gallery1 from "../images/gallery/gallery-1.png";
import gallery2 from "../images/gallery/gallery-2.png";
import gallery3 from "../images/gallery/gallery-3.png";

export default function MainSlider() {
  const slides = [
    {
      image: gallery1,
      title: "Flat 50% OFF",
      description: "Experience ultimate relaxation with our premium spa services.",
      buttonText: "Order Now",
    },
    {
      image: gallery2,
      title: "Flat 60% OFF",
      description: "Indulge in luxury body and facial treatments by professionals.",
      buttonText: "Order Now",
    },
    {
        image: gallery1,
        title: "Flat 50% OFF",
        description: "Experience ultimate relaxation with our premium spa services.",
        buttonText: "Order Now",
      },
      {
        image: gallery2,
        title: "Flat 60% OFF",
        description: "Indulge in luxury body and facial treatments by professionals.",
        buttonText: "Order Now",
      },
    {
      image: gallery3,
      title: "Flat 20% OFF",
      description: "Enjoy weekend discounts and special spa packages.",
      buttonText: "Order Now",
    },
    {
      image: gallery1,
      title: "Flat 50% OFF",
      description: "Join our membership program for exclusive benefits.",
      buttonText: "Order Now",
    },
  ];

  return (
    <Swiper
    className="mt-5"
      modules={[Navigation, Scrollbar, A11y, Pagination]}  // <-- Add Pagination here
      spaceBetween={20}
      breakpoints={{
        0: { slidesPerView: 1 },
        768: { slidesPerView: 3 },
      }}
      pagination={{ clickable: true }}  // <-- Enable clickable pagination dots
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {slides.map((text, index) => (
        <SwiperSlide key={index}>
          <div className="card p-3 shadow-sm text-start">
            <div className="card-wrap d-flex align-items-center justify-content-between">
              <div>
                <h5 className="mb-2">{text.title}</h5>
                <p className="pera">{text.description}</p>
                <button className="btn btn-primary">{text.buttonText}</button>
              </div>
              <div>
                <img src={text.image} width={150} alt={text.title} />
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
