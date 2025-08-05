import React from "react";

import heroImg from'../assets/Media/eva-darron.jpg';

function Home() {
  return (
    <div className="home">
      <main className="main-content">
        <section className="hero-section h-65 flex bg-cover bg-center" style={{ backgroundImage: `url(${heroImg})` }}>
          <h1 className=" w-45 ml-50 text-white text-2xl absolute top-45 right-170">Plan for your dream future</h1>
        </section>
        <section className="service-section h-50 flex items-center justify-center bg-gray-100">This is the service section</section>
        <div>This section is an info section </div>
        <section className="about-section h-50 flex items-center justify-center bg-gray-100">This is the about section</section>
        <div>Another info section</div>
        <section className="reasons-section h-50 flex items-center justify-center bg-gray-100">This is a reason section</section>
        <section className="product-section h-50 flex items-center justify-center bg-gray-100">This is the product section</section>
      </main>
    </div>
  );
}
export default Home;