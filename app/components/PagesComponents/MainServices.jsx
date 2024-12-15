// ! ----------------------------- imports start ---------------------------------- //
import Image from 'next/image';
import CheckedIcon from '@/assets/icons/CheckedIcon';
import AppButton from '../SharedComponents/UiComponents/Button/Button';

// ! ----------------------------- imports end ------------------------------------ //

const MainServices = ({ mainServicesData }) => {
  // ^ ----------------------------- constants start ---------------------------------- //
  const services = [
    'مدة الضمان قد تختلف حسب نوع الخدمة التي تم تقديمها',
    'ضمانًا على المواد التي نستخدمها في الأعمال التي نقوم بها',
    'تقديم خدمات عالية الجودة ونضمن رضا العملاء',
  ];
  // ! ----------------------------- constants end ---------------------------------- //
  return (
    // * ---------------------------- template start --------------------------------- //
    <section className="main-services main-section ">
      <div className="main-services__image-container animate__animated">
        <figure className="main-services__image-figure">
          <Image
            width={438}
            height={397}
            alt="services-image"
            className="main-services__image"
            src={mainServicesData?.image}
          />
        </figure>
      </div>
      <div className="main-services__content">
        <span className="badge animate__animated">خدمة تسريب المياه</span>
        <h2 className="main-services__title main-sec-title animate__animated">{mainServicesData?.title}</h2>
        <div
          className="main-services__description animate__animated"
          dangerouslySetInnerHTML={{ __html: mainServicesData?.desc }}
        />
        <ul className="main-services__list animate__animated">
          {services?.map((service, index) => (
            <li key={`service-text-${index}`} className="main-services__list-item">
              <CheckedIcon /> {service}
            </li>
          ))}
        </ul>
        <AppButton className="main-services__button main-btn animate__animated">اعرف المزيد</AppButton>
      </div>
    </section>
    // * ---------------------------- template end ----------------------------------- //
  );
};

export default MainServices;
