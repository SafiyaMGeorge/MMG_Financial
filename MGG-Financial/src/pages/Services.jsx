import React from "react";
import serviceData from "../data/serviceData"
import ServiceCards from "../components/ServiceCards"
import planData from "../data/financialData"
import SlidingCards from "../components/SlideCards"
import Button from "../components/Buttons"
import businessImg from '../assets/Media/Business.png'
import carouselData from "../data/ProductCarousel"
import ServiceCarousel from '../components/carousel'
function Services() {
  return (
    <div className="services w-full mt-5 flex flex-col items-center">
      <h1 className="text-gold text-center my-17 text-4xl">Services</h1>
      <ServiceCards services={serviceData} />
      <section className="w-full h-130 flex flex-col md:flex-row justify-evenly items-center">
        <div className="text-dark-blue">
             <h2 className="text-2xl mb-5">Financial Planning</h2>
             <p className="w-100">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis, expedita quisquam a officiis delectus possimus.</p>
        </div>
        <img src={businessImg} alt="Two women sitting at a table smiling at each other" className="w-85 rounded-3xl" />
      </section>
      <section className="financialPlan flex flex-col items-center">
        <div className="w-100 md:w-160 text-center text-dark-blue flex flex-col items-center">
          <h2 className="mb-10 mt-40 text-2xl">Elements of A Financial Plan</h2>
          <p className="text-center md:text-left md:pl-3">
            A good financial plan is a personalized roadmap to guide you from where you are 
            to allow you  to meet all your financial goals. It does this by nudging you by doing
            three things:
          </p>
        </div>
        <SlidingCards data={planData} />
      </section>
      <section className="FinancialCarousel flex flex-col items-center w-full mt-30">
        <h2 className="text-2xl mb-10">Benefits of Good Financial Planning</h2>
        <ServiceCarousel data={carouselData}/>
      </section>
      <section className="text-center my-30 text-lg">
        <p>Not just selling products, but providing solutions</p>
        <p className="my-10">Reach out Today!</p>
        <Button>Contact Me</Button>
      </section>
    </div>
  );
}
export default Services;