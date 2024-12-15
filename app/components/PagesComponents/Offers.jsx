// ! ----------------------------- imports start ---------------------------------- //
import Image from 'next/image';

// ! ----------------------------- imports End ------------------------------------ //

const Offers = ({ offersData }) => {
  // * ----------------------------card template start --------------------------------- //
  const offerCardTemplate = (card, index) => (
    <div key={`offer-card-${index}`} className="offers__card animate__animated">
      <span className="offers__icon">
        <Image src={card.image} width={64} height={64} alt="advantage" />
      </span>
      <div>
        <h3 className="offers__card-title">{card.title}</h3>
        <div
          className="offers__card-description"
          dangerouslySetInnerHTML={{ __html: card?.desc || '' }}
        />
      </div>
    </div>
  );
  // * ----------------------------card template end --------------------------------- //

  return (
    // * ---------------------------- template start --------------------------------- //
    <section className="offers ">
      <div className="offers__container ">
        <div className="offers__column offers__column--left">
          {offersData?.slice(0, 2)?.map((card, index) => offerCardTemplate(card, index))}
        </div>
        <div className="offers__column offers__column--middle animate__animated">
          <Image width={397} height={443} alt="offers-image" src="/images/hero.png" />
        </div>
        <div className="offers__column offers__column--right">
          {offersData?.slice(2)?.map((card, index) => offerCardTemplate(card, index))}
        </div>
      </div>
    </section>
    // * ---------------------------- template end ----------------------------------- //
  );
};

export default Offers;
