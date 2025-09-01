import React from "react";
import logo from '../assets/Media/MGG-logo.svg'

function Header() {
  return (
    <header className="header bg-[#0B2E46]">
      <div className="h-container w-screen">
        <div className="content px-6 flex justify-between items-center">
            <section className="footer-logo">
                <img src={logo} alt="MGG Financial Logo" className="w-25"/>
            </section>
          <section className="header-links flex gap-16 lg:gap-28">
            <ul className="flex flex-col md:flex-row gap-10 mr-8 text-white">
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/products">Products</a></li>
                <li><a href="/services">Services</a></li>
            </ul>
          </section>
        </div>
      </div>
    </header>
  );
}
export default Header;