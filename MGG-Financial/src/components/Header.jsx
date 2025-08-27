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
                <li>
                    <div className="flex relative group">
                        <div className="border-none bg-none cursor-pointer flex gap-2 items-center">
                            <a href="/annuities">Products</a>
                        </div>
                        <div className="hidden group-hover:flex absolute top-full w-23 bg-[#0B2E46]  py-4 rounded flex-col gap-1 text-white text-center">    
                            <a href="/annuities">Annuities</a>
                            <div className="border-b border-white -mx-2"></div>
                            <a href="/annuities">Insurance</a>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="flex relative group">
                        <div className="border-none bg-none cursor-pointer flex gap-2 items-center">
                            <a href="/annuities">Services</a>
                        </div>
                        <div className="hidden group-hover:flex absolute top-full w-26 bg-[#0B2E46] py-4 rounded flex-col gap-1 text-white text-center">    
                            <a href="/annuities">Investments</a>
                            <div className="border-b border-white -mx-2"></div>
                            <a href="/annuities">Retirement</a>
                        </div>
                    </div>
                </li>
            </ul>
          </section>
        </div>
      </div>
    </header>
  );
}
export default Header;