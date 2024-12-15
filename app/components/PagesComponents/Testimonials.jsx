'use client'
// ! ----------------------------- imports start ---------------------------------- //
import GeneralSlider from "@/components/SharedComponents/UiComponents/sliders/GeneralSlider";
import Image from "next/image";
import { SwiperSlide } from "swiper/react";
import QuoteIcon from "@/assets/icons/QuoteIcon"
// ! ----------------------------- imports End ---------------------------------- //

const Testimonials = ({testimonialsData}) => {
  // ^ ----------------------------- constants start ---------------------------------- //

    const options = {
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        speed: 1000,
        loop: true,
        navigation: true,
        pagination:{
            clickable: true
        },
        spaceBetween:22
    };

    const renderCardTemplate = (testimonial,index)=>(
        <SwiperSlide key={index} className="testimonial-card">
            <QuoteIcon/>
            <div className="text-textBody-300 my-8" dangerouslySetInnerHTML={{__html:testimonial?.desc || ""}}/>
            <div className="flex items-center gap-4">
                <Image width={52} height={52} alt="user-img" src={testimonial?.image}/>
                <div>
                    <h3 className='mb-1 text-base font-semibold leading-[23.5px]'>{testimonial?.name}</h3>
                    <p className='text-textBody-300 text-sm'>{testimonial?.job}</p>
                </div>
            </div>
        </SwiperSlide>
    )
    // ^ ----------------------------- constants End ---------------------------------- //

return (
    // * ---------------------------- template start --------------------------------- //
    <section className='main-section relative'>
        <span className='badge animate__animated'>تقييماتنا</span>
        <h2 className='main-sec-title !mt-2 animate__animated'>
            اراء عملائنا      
        </h2>
        <GeneralSlider className="testimonials-swiper" sliderOptions={options}>
            {testimonialsData?.map((testimonial, index) => (
                renderCardTemplate(testimonial,index)
            ))}
            {testimonialsData?.map((testimonial, index) => (
                renderCardTemplate(testimonial,index)
            ))}
        </GeneralSlider>
    </section>
)
    // * ---------------------------- template end --------------------------------- //

}

export default Testimonials