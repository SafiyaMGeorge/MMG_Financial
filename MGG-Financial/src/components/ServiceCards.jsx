import React, { useState, useEffect } from "react";

function ServiceCards({ services }) {
  // Set first service as active on mount
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    if (services?.length > 0) {
      setActiveCard(services[0].id);
    }
  }, [services]);

  return (
    <div className="flex justify-center py-5 mb-25">
      <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-10 ">
        {services.map((item) => {
          const isActive = activeCard === item.id;

          return (
            <div key={item.id} onClick={() => setActiveCard(item.id)} className={`w-85 rounded-3xl px-1 py-6 cursor-pointer transform transition-all duration-300 
                ${ isActive ? "bg-gradient-to-b from-[#4A90E2] to-[#0C243C] text-gold shadow-lg scale-[1.02]"  : "bg-light-gray text-[#0C243C] shadow-sm hover:-translate-y-2 hover:shadow-xl"}`}>
              <section className="w-66 flex justify-evenly items-center">
                <div className={`w-10 h-10 rounded-full transition-all duration-300 ${isActive ? "bg-white" : "bg-blue-800"}`}>
                </div>
                <h1 className={`text-xl font-semibold transition-all duration-300 ${isActive ? "text-gold" : "text-black"}`}>
                  {item.title}
                </h1>
              </section>
              <p className={`mt-5 px-12 text-justify leading-relaxed text-sm break-normal transition-all duration-300 ${isActive ? "text-gold" : "text-black"}`}>
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ServiceCards;

