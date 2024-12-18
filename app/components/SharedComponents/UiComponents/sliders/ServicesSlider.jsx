"use client";

import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Thumbs, Autoplay } from "swiper/modules";
import Image from "next/image";

import "swiper/css/effect-fade";
import "swiper/css/thumbs";

const ServicesSlider = ({ slides }) => {
  const [thumbsSwiper, setThumbsSwiper] = React.useState(null);
  const [windowWidth, setWindowWidth] = React.useState(0);
  const thumbsSwiperRef = React.useRef(null);

  useEffect(() => {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };

      setWindowWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
  }, []);

  React.useEffect(() => {
    if (thumbsSwiper && thumbsSwiper.destroyed) {
      setThumbsSwiper(null);
    }
  }, [thumbsSwiper]);

  const sliderOptions = {
    effect: "fade",
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    speed: 1200,
    navigation:false,
  };


  const renderThumbCardTemplate = (slide)=>(
    <SwiperSlide key={`thumb-${slide.id}`} className="w-[calc(50%-20px)] sm:w-fit cursor-pointer">
          <div className="services-thumb-card " >
            <Image
            width={150}
            height={170}
              src={slide.main_image.media}
              alt={slide.title}
              className="thumb-image"
            />
          </div>
            <p className="thumb-title">{slide?.title}</p>
        </SwiperSlide>
  )
  
  return (
    <div className="services-sliders-wrap ">
      {/* Main Slider */}
      <Swiper
        {...sliderOptions}
        modules={[EffectFade, Thumbs, Autoplay]}
        thumbs={{ swiper: thumbsSwiperRef.current }}
        className="mainSwiper w-full animate__animated"
      >
        {slides?.map((slide ,index) => (
          <SwiperSlide key={`slide-${index}`} className="main-service-card">
              <div className="bg-bodyColor">
                  <h2 className='card-title'>
                    {slide.title}
                  </h2>
                  <div className="card-desc" dangerouslySetInnerHTML={{__html:slide?.desc }}/>
              </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      {/* Thumbnail Slider */}
       {/* Thumbnail Slider */}
      <Swiper
        onSwiper={(swiper) => {
          if (!thumbsSwiperRef.current || thumbsSwiperRef.current.destroyed) {
            thumbsSwiperRef.current = swiper;
            setThumbsSwiper(swiper);
          }
        }}
        slidesPerView="auto"
        direction="vertical"
        spaceBetween={35}
        className={`services-thumbs animate__animated ${windowWidth < 1024 ? "!hidden" : ""}`}
        >
        {slides?.map((slide) => renderThumbCardTemplate(slide))}
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        slidesPerView="auto"
        direction="horizontal"
        spaceBetween={20}
        className={`services-thumbs animate__animated ${windowWidth < 1024 ? "" : "!hidden"}`}
      >
        {slides?.map((slide) => renderThumbCardTemplate(slide))}
      </Swiper>

    </div>
  );
};

export default ServicesSlider;
