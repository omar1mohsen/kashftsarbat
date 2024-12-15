// ! ----------------------------- imports start ---------------------------------- //
import Image from 'next/image';
import MissionArrow from '@/assets/icons/MissionArrow';
import Link from 'next/link';
// ! ----------------------------- imports End ------------------------------------ //

const OurMission = () => {
  return (
    <section className="our-mission main-section">
      <div className="our-mission__content">
        <h2 className="our-mission__title  main-sec-title animate__animated">مهمتنا هي توفير خدمات منزلك بأقل التكاليف</h2>
        <div className="our-mission__text-container animate__animated">
          <p className="our-mission__description ">
            حمل تطبيقنا مجانا <br /> استمتع بالطلب السريع للفني و الخدمة في اي وقت
          </p>
          <MissionArrow className="our-mission__arrow" />
          <div className="our-mission__links">
            <Link href="#">
              <Image
                width={147}
                height={53}
                alt="google-play-button"
                src="/images/google-btn.png"
              />
            </Link>
            <Link href="#">
              <Image
                width={147}
                height={53}
                alt="apple-store-button"
                src="/images/apple-btn.png"
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="our-mission__image-container">
        <figure className="our-mission__figure animate__animated" >
            <span className='mission-circles '>
                <span className='main'/>
                <span className='big'/>
                <span className='small'/>
            </span>
            <Image
                width={507}
                height={579}
                alt="mission-image"
                src="/images/mission-img.png"
                className="our-mission__image"
            />
        </figure>
      </div>
    </section>
  );
};

export default OurMission;
