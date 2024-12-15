import HeroSec from '@/components/PagesComponents/HeroSec';
import OurServices from '@/components/PagesComponents/OurServices';
import AboutUs from '@/components/PagesComponents/AboutUs';
import MainServices from '@/components/PagesComponents/MainServices';
import Experts from '@/components/PagesComponents/Experts';
import Testimonials from '@/components/PagesComponents/Testimonials';
import Offers from '@/components/PagesComponents/Offers';
import OurMission from '@/components/PagesComponents/OurMission';
import Footer from  "@/components/LayoutComponents/Footer";
import '@/styles/pageComponents/Home.scss';

const Home = ({ homeData }) => {

  return (
    <>
      <HeroSec heroData={homeData?.home_slider} />
      <OurServices servicesData={homeData?.services} />
      <AboutUs aboutData={homeData?.home_about} advantages={homeData?.advantages}/>
      <MainServices mainServicesData={homeData?.home_services?.[0]}/>
      <Experts expertsData={homeData?.home_experts}/>
      <Testimonials testimonialsData={homeData?.testimonials}/>
      <Offers offersData={homeData?.what_we_offers} />
      <OurMission />
      <Footer />
    </>
  );
};

export default Home;
