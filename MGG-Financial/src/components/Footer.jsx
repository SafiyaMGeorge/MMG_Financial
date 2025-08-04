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
    <footer className="footer w-full">
      <div className="container w-full bg-red-900">
        <div className="content flex justify-between items-center bg-blue-900">
          <secton className="social-icons">
          <FontAwesomeIcon icon="fa-brands fa-linkedin" />
          <FontAwesomeIcon icon="fa-brands fa-square-facebook" />
        </secton>
        <section className="footer-logo">
          <img src={logo} alt="MGG Financial Logo" />
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