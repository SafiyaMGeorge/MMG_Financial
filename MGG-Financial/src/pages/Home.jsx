import React from "react";
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fas, far, fab)

import heroImg from'../assets/Media/eva-darron.jpg';
import wealthImg from '../assets/Media/Investment.png';
import businessImg from '../assets/Media/Business.png';
import retirementImg from '../assets/Media/Retirement.png';
import adivorImg from '../assets/Media/Marcia-Gooden-George.png';
import insuranceImg from '../assets/Media/Insurance-img.jpg';
import investmentImg from '../assets/Media/Investment-img.jpg';

import Button from '../components/Buttons'

function Home() {
  const navigate = useNavigate();
  const handleClick = (link) => {
  navigate(link);
};


  return (
    <div className="home">
      <main className="main-content">
        <section className="hero-section h-85 flex bg-cover bg-center" style={{ backgroundImage: `url(${heroImg})` }}>
          <h1 className=" w-45 ml-50 mt-30 text-white text-2xl ">Plan for your dream future</h1>
        </section>
        <section className="service-section pt-10 mb-0 flex-col justify-items-center text-center">
          <h2 className="my-10">Services</h2>
          <section className="service-items flex justify-center py-5 text-center">
            <div id="Wealth Management" onClick={() => handleClick('/Services')} className="w-3/12 cursor-pointer">
              <img src={wealthImg} alt="Someone stacking gold coins." />
              <h3 className="mt-4">Wealth Management</h3>
            </div>
            <div id="Business" onClick={() => handleClick('/Services')} className="w-3/12 mx-10 cursor-pointer">
              <img src={businessImg} alt="Two women smiling at each other sitting infront a desk with open note books." />
              <h3 className="mt-4">Financial Planning</h3>
            </div>
            <div id="Retirement" onClick={() => handleClick('/Services')} className="w-3/12 cursor-pointer">
              <img src={retirementImg} alt="Old man holding baby up." />
              <h3 className="mt-4">Retirement Planning</h3>
            </div>
          </section>
          <p className="text-center w-170 mt-40 mb-10 leading-loose">
            We offer a range of services to help you achieve your financial goals, including investment management,
            retirement planning, and insurance solutions. I am is dedicated to providing personalized
            advice and support to help you navigate the complexities of financial planning.
          </p>
          <Button to="/service">Learn more</Button>
        </section>
        <section className="about-section py-60 text-center flex-col justify-items-center ">
          <h2 className="mb-20">Meet the Advisor</h2>
          <div className="content flex w-240 lg:w-300">
            <div className="advisorImg h-70 w-3/6 justify-items-center content-center">
              <img src={adivorImg} alt="image of advisor" className="h-50 rounded-full"/>
            </div>
            <div className="text-btn h-70 w-3/6 justify-items-center content-center">
              <p className="w-95 mb-6 leading-loose">Lorem ipsum dolor sit amet consectetur. Vulputate pretium arcu urna
                 facilisis. Senectus parturient cras volutpat tellus sed adipiscing
                 cursus et dolor. Vivamus eget et lacus praesent. Iaculis vitae
                 egestas pretium
              </p>
              <Button to="/about">Learn more</Button>
            </div>
          </div>
        </section>
        <section className="info-section w-full h-60 bg-[#0B2E46] justify-items-center content-center text-center">
          <p className="text-white w-200 mb-6 leading-loose">Lorem ipsum dolor sit amet consectetur. Tellus diam posuere senectus enim tempor duis erat. 
            Scelerisque. Aenean commodo varius sed donec eget varius.
          </p>
          <Button to="/service">Learn more</Button>
        </section>
        <section className="reasons-section h-160 flex-col justify-items-center content-center">
          <h2 className="mb-7">Why Life Insurance</h2>
          <div className="content-container w-full items-center justify-items-center">
            <section className="row-1  w-210 flex justify-center text-center mb-25">
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
        <section className="product-section h-95 justify-items-center content-center bg-[#0B2E46] text-white">
          <h2>Products</h2>
          <section className="prodect-items flex justify-center py-5 text-center">
            <div id="Insurances" onClick={() => handleClick('/Insurance')} className="w-3/12 cursor-pointer">
              <img src={insuranceImg} alt="Someone stacking gold coins." />
              <h3 className="mt-4">Insurance</h3>
            </div>
            <div id="Investments" onClick={() => handleClick('/Investment')}className="w-3/12 mx-10 cursor-pointer">
              <img src={investmentImg} alt="Two women smiling at each other sitting infront a desk with open note books." />
              <h3 className="mt-4">Investments</h3>
            </div>
            <div id="Retirement" onClick={() => handleClick('/Retirement')} className="w-3/12 cursor-pointer">
              <img src={retirementImg} alt="Old man holding baby up." />
              <h3 className="mt-4">Retirement</h3>
            </div>
          </section>
        </section>
      </main>
    </div>
  );
}
export default Home;