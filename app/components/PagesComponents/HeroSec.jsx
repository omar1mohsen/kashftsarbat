// ! ----------------------------- imports start ---------------------------------- //
import React from 'react';
import Header from '../LayoutComponents/Header';
import Image from 'next/image';
import { StarIcon } from '@/assets/icons/StarIcon';
import ArrowIcon from '@/assets/icons/ArrowIcon';
import VideoThumbnail from '../SharedComponents/UiComponents/video/VideoThumbnail';
import Link from 'next/link';
// ! ----------------------------- imports End ---------------------------------- //

const HeroSec = ({heroData}) => {
  // * ---------------------------- template start --------------------------------- //

  return (
    <section className="hero-section">
      <Header />
      <div className="divider" />
      <div className="hero-content">
        <div className="top-hero">
          <h1 className="hero-title animate__animated animate__fadeInUp">
            مرحبًا بكم في موقعنا الخاص بخدمات كشف العوازل وتسريب المياه
          </h1>
          <p className="hero-description animate__animated animate__fadeInUp">
            نهتم بتلبية احتياجاتكم. سواء كنتم تحتاجون إلى إصلاح أو تركيب أنابيب الماء أو الصرف الصحي.
          </p>
        </div>
        <div className="hero-image-wrapper animate__animated animate__fadeInUp">
          <Image
            width={597}
            height={600}
            className="hero-image"
            src={heroData?.big_image}
            alt="hero-image"
          />
          <div className="customer-rate">
            <div className="rate-card">
              <div className="rate-info">
                <Image
                  width={53}
                  height={53}
                  className="customer-image"
                  src="/images/customer.png"
                  alt="customer-image"
                />
                <div>
                  <h5 className="customer-name">احمد محمد</h5>
                  <p className="customer-role">فني كشف تسريبات</p>
                </div>
              </div>
              <div className="rating">
                <StarIcon />
                <p>4.5</p>
              </div>
            </div>
            <div className="arrow-button">
              <ArrowIcon />
            </div>
          </div>
        </div>
        <div className="video-section animate__animated animate__fadeInUp">
          <VideoThumbnail heroData={heroData}/>
          <div className="scroll-arrow cursor-pointer">
            <ArrowIcon className="rotate-icon" />
          </div>
        </div>
      </div>
    </section>
    // * ---------------------------- template end --------------------------------- //

  );
};

export default HeroSec;
