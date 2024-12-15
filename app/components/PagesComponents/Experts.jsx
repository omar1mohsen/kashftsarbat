// ! ----------------------------- imports start ---------------------------------- //
import React from 'react';
import AppButton from '../SharedComponents/UiComponents/Button/Button';
import Image from 'next/image';
// ! ----------------------------- imports end ------------------------------------ //

const Experts = ({ expertsData }) => {
  // * ---------------------------- template start --------------------------------- //
  return (
    <section className="experts main-section">
      <div className="experts__header">
        <div>
          <span className="badge animate__animated">خبرائنا</span>
          <h2 className="main-sec-title experts__title animate__animated">افضل خبراء لدينا</h2>
        </div>
        <AppButton className="main-btn animate__animated">اعرف المزيد</AppButton>
      </div>
      <div className="experts__grid animate__animated">
        {expertsData?.map((item, index) => (
          <div key={`expert-card-${index}`} className="experts__card">
            <Image
              width={343.26}
              height={343.26}
              alt="expert-img"
              src={item?.image}
              className="experts__image"
            />
            <h6 className="experts__name">{item?.name}</h6>
            <p className="experts__job">{item?.job}</p>
          </div>
        ))}
      </div>
    </section>
    // * ---------------------------- template end ----------------------------------- //
  );
};

export default Experts;
