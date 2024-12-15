// ! ----------------------------- imports start ---------------------------------- //
import React from 'react';
import VideoThumbnail from '../SharedComponents/UiComponents/video/VideoThumbnail';
import AppButton from '../SharedComponents/UiComponents/Button/Button';
import Image from 'next/image';
// ! ----------------------------- imports end ------------------------------------ //

const AboutUs = ({ aboutData, advantages }) => {
  // ^ ----------------------------- constants start ---------------------------------- //
  
  // ^ ----------------------------- constants end ------------------------------------ //

  return (
    // * ---------------------------- template start --------------------------------- //
    <section className="about-us main-section">
      <div className="about-us__content">
        <span className="badge animate__animated">من نحن</span>
        <h2 className="main-sec-title animate__animated">{aboutData?.title}</h2>
        <div className="about-us__cards animate__animated">
          {advantages?.map((card, index) => (
            <div key={`about-card-${index}`} className="about-us__card">
              <span className="about-us__icon">
                <Image
                  src={card.image}
                  width={80}
                  height={80}
                  alt="advantage"
                  className="about-us__icon-image"
                />
              </span>
              <div>
                <h3 className="about-us__card-title">{card.title}</h3>
                <div
                  className="about-us__card-description"
                  dangerouslySetInnerHTML={{ __html: card?.desc || '' }}
                />
              </div>
            </div>
          ))}
        </div>
        <AppButton className="about-us__button main-btn animate__animated">اعرف المزيد</AppButton>
      </div>
      <div className="about-us__video animate__animated">
        <VideoThumbnail
          heroData={aboutData}
          showImage={true}
          width={417}
          height={417}
          className="about-us__video-thumbnail"
        />
      </div>
    </section>
    // * ---------------------------- template end ----------------------------------- //
  );
};

export default AboutUs;
