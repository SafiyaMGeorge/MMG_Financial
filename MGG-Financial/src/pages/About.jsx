import React from "react";
import ContactBtn from "../components/Buttons";
import advisorImg from '../assets/Media/Marcia-Gooden-George.png';
function About() {
  return (
    <div className="about flex-col justify-items-center content-center">
      <section className="Why w-full flex">
        <div id="agent" className="w-1/2 h-70 justify-items-center content-center">
          <div className="advisorImg h-50 w-50">
            <img src={advisorImg} alt="image of advisor" className="h-50 rounded-full"/>
          </div>
          <h2>Marcia Gooden-George</h2>
        </div>
        <div id="aboutText">
          <h2>My Why</h2>
          <p></p>
        </div>
      </section>
      <section className="Experience text-center">
        <h2>My Experience</h2>
        <p></p>
        <section className="Specialties">
          <ul className="flex">
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </section>
        <div>
          <h3>Companies I've worked with</h3>
          <hr className="w-200 text-[#F5BE29]"/>
          <ul className="flex justify-evenly">
            <li>New York Life</li>
            <li>Costal Wealth</li>
            <li>Prudential</li>
          </ul>
        </div>
      </section>
      <section>
        <ContactBtn>Contact Me</ContactBtn>
      </section>
    </div>
  );
}
export default About;