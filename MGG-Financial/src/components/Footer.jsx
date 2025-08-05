import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import logo from '../assets/Media/MGG-logo.svg'

library.add(fas, far, fab)
function Footer() {
  return (
    <footer className="footer">
      <div className="f-container w-screen">
        <div className="content px-6 flex justify-between items-center">
          <secton className="social-icons w-20 mr-25">
          <FontAwesomeIcon icon="fa-brands fa-linkedin" size="2x" color="#F3A916" className="cursor-pointer" />
          <FontAwesomeIcon icon="fa-brands fa-square-facebook" size="2x" color="#F3A916" className="cursor-pointer" />
        </secton>
        <section className="footer-logo">
          <img src={logo} alt="MGG Financial Logo" className="w-30"/>
        </section>
        <section className="footer-links">
          <ul className="flex flex-col md:flex-row gap-4 ">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </section>
        </div>
        <p className=" w-full text-center">&copy; {new Date().getFullYear()} MGG Financial. All rights reserved.</p>
      </div>
    </footer>
  );
}
export default Footer;