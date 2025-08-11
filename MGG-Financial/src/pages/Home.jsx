import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fas, far, fab)

import heroImg from'../assets/Media/eva-darron.jpg';
import investmentImg from '../assets/Media/Investment.png';
import businessImg from '../assets/Media/Business.png';
import retirementImg from '../assets/Media/Retirement.png';
import adivorImg from '../assets/Media/Marcia-Gooden-George.png';

function Home() {
  return (
    <div className="home">
      <main className="main-content">
        <section className="hero-section h-85 flex bg-cover bg-center" style={{ backgroundImage: `url(${heroImg})` }}>
          <h1 className=" w-45 ml-50 text-white text-2xl absolute top-45 right-170">Plan for your dream future</h1>
        </section>
        <section className="service-section md:h-570 lg:h-80 xl:h-95 pt-10 mb-85 flex-col justify-items-center items-center">
          <h2 className="my-10">Services</h2>
          <section className="service-items flex justify-center py-5 text-center">
            <div id="Investment" className="w-3/12">
              <img src={investmentImg} alt="Someone stacking gold coins." />
              <h3 className="mt-4">Investments</h3>
            </div>
            <div id="Business"className="w-3/12 mx-10">
              <img src={businessImg} alt="Two women smiling at each other sitting infront a desk with open note books." />
              <h3 className="mt-4">Business</h3>
            </div>
            <div id="Retirement" className="w-3/12">
              <img src={retirementImg} alt="Old man holding baby up." />
              <h3 className="mt-4">Retirement</h3>
            </div>
          </section>
          <p className="text-center w-170 mt-40 mb-10 leading-loose">
            We offer a range of services to help you achieve your financial goals, including investment management,
            retirement planning, and insurance solutions. I am is dedicated to providing personalized
            advice and support to help you navigate the complexities of financial planning.
          </p>
          <div className="bg-amber-400">Learn more</div>
        </section>
        <section className="about-section h-130 py-60 mb-80 text-center flex-col justify-items-center ">
          <h2 className="mb-20">Meet the Advisor</h2>
          <div className="content flex w-240 lg:w-300">
            <div className="advisorImg h-70 w-3/6 justify-items-center content-center">
              <img src={adivorImg} alt="image of advisor" className="h-50 rounded-full"/>
            </div>
            <div className="text-btn h-70 w-3/6 mt-6 justify-items-center content-center">
              <p className="w-95">Lorem ipsum dolor sit amet consectetur. Vulputate pretium arcu urna
                 facilisis. Senectus parturient cras volutpat tellus sed adipiscing
                 cursus et dolor. Vivamus eget et lacus praesent. Iaculis vitae
                 egestas pretium
              </p>
              <div className="bg-amber-400 w-10 mt-7">Learn more</div>
            </div>
          </div>
        </section>
        <section className="info-section w-full h-60 bg-[#0B2E46] justify-items-center content-center text-center">
          <p className="text-white w-200">Lorem ipsum dolor sit amet consectetur. Tellus diam posuere senectus enim tempor duis erat. 
            Scelerisque. Aenean commodo varius sed donec eget varius.
          </p>
          <div className="bg-amber-400 mt-7">Learn more</div>
        </section>
        <section className="reasons-section h-140 flex-col justify-items-center">
          <h2 className="my-12 pb-7">Why Life Insurance</h2>
          <div className="content-container w-full items-center justify-items-center">
            <section className="row-1  w-210 flex justify-center text-center mb-10">
              <div className="reasonIcons w-4/12">
              <FontAwesomeIcon icon="fa-solid fa-sack-dollar" size="4x" color="#F3A916" className="cursor-pointer" />
              <h4 className="mt-5">Tax Advantage</h4>
            </div>
            <div className="reasonIcons w-4/12 ">
              <FontAwesomeIcon icon="fa-solid fa-house-chimney" size="4x" color="#F3A916" className="cursor-pointer" />
              <h4 className="mt-5">Peace of Mind</h4>
            </div>
            <div className="reasonIcons w-4/12">
              <FontAwesomeIcon icon="fa-solid fa-money-bill-trend-up" size="4x" color="#F3A916" className="cursor-pointer" />
              <h4 className="mt-5">Investments</h4>
            </div>
            </section>
            <section className="row-2 w-105 flex justify-between text-center">
            <div className="reasonIcons">
              <FontAwesomeIcon icon="fa-solid fa-umbrella" size="4x" color="#F3A916" className="cursor-pointer" />
              <h4 className="mt-5">Protection</h4>
            </div>
            <div className="reasonIcons">
              <FontAwesomeIcon icon="fa-solid fa-people-group" size="4x" color="#F3A916" className="cursor-pointer" />
              <h4 className="mt-5">Future Planning</h4>
            </div>
            </section>
        </div>
        </section>
        <section className="product-section h-75 justify-items-center bg-[#0B2E46] text-white">
          <h2>Products</h2>
          <div className="content-continer flex justify-between h-3/4 w-11/12 px-3 my-4 bg-amber-500">
           A carousel will go here
          </div>
        </section>
      </main>
    </div>
  );
}
export default Home;