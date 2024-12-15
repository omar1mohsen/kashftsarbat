import { Swiper } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

const GeneralSlider = ({children,sliderOptions,className}) => {


  return (
    <Swiper
    {...sliderOptions}
    slidesPerView={'auto'}
    modules={[Pagination, Navigation, Autoplay]}
    className={`general-slider ${className?className:""}`}
  >
    {children}
  </Swiper>
  )
}

export default GeneralSlider