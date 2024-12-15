
// ! ----------------------------- imports start ---------------------------------- //
import ServicesSlider from "@/components/SharedComponents/UiComponents/sliders/servicesSlider"

// ! ----------------------------- imports End ---------------------------------- //

const OurServices = ({servicesData}) => {
  // * ---------------------------- template start --------------------------------- //
  return (
    <section className='main-section' id="ourServices">
        <div className='services-wrap animate__animated' >
          <span className='services-badge animate__animated'>خدماتنا</span>
          <ServicesSlider slides={servicesData}/>
        </div>
    </section>
  )
  // * ---------------------------- template end --------------------------------- //

}

export default OurServices