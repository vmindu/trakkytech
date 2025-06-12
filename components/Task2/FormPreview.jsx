// src/components/FormPreview.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "./FormPreview.css";
import { FaUser } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { IoShareSocialOutline } from "react-icons/io5";
import { TbBoxMultiple } from "react-icons/tb";
import { FcRating } from "react-icons/fc";

const FormPreview = ({ formData }) => {
  const hasImages = formData.images && formData.images.length > 0;

  return (
    <div className="preview-container">
      <h2>Live data in db.json file also</h2>
      <div className="preview-content">
        <div
          className="top-box d-flex align-items-center justify-content-between my-2 px-2"
          style={{ borderBottom: "1px solid black" }}
        >
          <h2 style={{ color: "blue", fontFamily: "cursive" }}> Trakky</h2>

          <FaUser size={24} color="#555" />
        </div>
        <div className="px-2">
          {hasImages && (
            <Swiper
              modules={[Navigation, Scrollbar, A11y]}
              spaceBetween={10}
              slidesPerView={1}
              navigation
              scrollbar={{ draggable: true }}
            >
              {formData.images.map((imageSrc, index) => (
                <SwiperSlide key={index}>
                  <img
                    className=" position-relative"
                    src={imageSrc} // base64 string
                    alt={`preview-${index}`}
                    style={{ width: "100%", borderRadius: "8px" }}
                  />
                </SwiperSlide>
              ))}
              <p className="moreicon position-absolute">
                <TbBoxMultiple />
                more photos
              </p>
            </Swiper>
          )}

          <div className="d-flex align-items-center justify-content-between">
            <p className="p-0 m-0">Open till: {formData.timing || "00:00"}</p>
            <div>
              <IoShareSocialOutline size={24} color="#555" />
              <CiHeart size={24} color="#555" />
            </div>
          </div>
          <h3>{formData.spa_name || "Spa Name"}</h3>
          <p>
            {formData.city || "City"}, {formData.area || "Area"}
          </p>
          <p>Price: ₹{formData.price || 0} Onwards</p>
          <p className="d-flex align-items-center">
            <FcRating style={{ marginTop: "2px", marginRight: "10px" }} />
            4.48 (15 reviews)
          </p>
        </div>
      </div>
    </div>
  );
};

export default FormPreview;
