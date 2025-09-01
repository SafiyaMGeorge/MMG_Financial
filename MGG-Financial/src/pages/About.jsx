import React from "react";
import ContactBtn from "../components/Buttons";
import advisorImg from '../assets/Media/Marcia-Gooden-George.png';
import logo from '../assets/Media/MGG-Logo.svg';
function About() {
  return (
    <div className="about flex-col justify-items-center content-center">
      <section className="Why w-full flex justify-evenly items-center my-30">
        <div id="agent" className="h-70 justify-items-center content-center">
          <div className="advisorImg h-50">
            <img src={advisorImg} alt="image of advisor" className="h-50 rounded-full"/>
          </div>
          <h2 className="mt-3">Marcia Gooden-George</h2>
        </div>
        <div id="aboutText">
          <h2 className="mb-3">My Why</h2>
          <p className="w-110 leading-7 text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, fugiat eaque nemo facere dolor blanditiis vitae aliquam assumenda velit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel sed nihil voluptas odit iure quo autem necessitatibus omnis sint, molestiae voluptates deleniti in eligendi quos, error sunt nobis dignissimos eaque architecto! Beatae enim molestiae tenetur eveniet ducimus quis expedita nulla tempore debitis doloribus?</p>
        </div>
      </section>
      <section className="Experience w-full mb-20">
        <div className="flex justify-evenly items-center">
          <section className="mb-20 mr-10">
            <h2>My Experience</h2>
            <p className="w-110 mt-3 leading-7 text-left">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere ab, expedita sequi officia molestias iure iusto architecto. Illo unde vitae reprehenderit qui animi omnis mollitia ullam. Cum sed enim aspernatur totam vero sunt aliquam laboriosam tenetur aliquid ex quod ut, iusto quasi deleniti non, repellat vitae laborum voluptatibus corporis accusamus iure.</p>
          </section>
          <section>
            <ContactBtn>Contact Me</ContactBtn>
          </section>
        </div>
        <div className="text-center flex-col justify-items-center py-20 bg-[#0B2E46] text-white">
          <h3>Companies I've worked with</h3>
          <hr className="w-200  my-3 text-[#F5BE29]"/>
          <ul className="w-full flex justify-evenly">
            <li>New York Life</li>
            <li>Costal Wealth</li>
            <li>Prudential</li>
          </ul>
        </div>
      </section>
      <section className="Specialties">
          <ul className="flex">
            <li></li>
            <li></li>
            <li></li>
          </ul>
      </section>
    </div>
  );
}
export default About;