import React, { useState } from "react";

function SlideCard({ data }) {
  const [stateValue, setStateValue] = useState(data[0]?.id);

  const handleClick = (id) => {
    setStateValue(id);
  };

  return (
    <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-4 my-10 cursor-pointer">
      {data.map((item) => {
        const isActive = stateValue === item.id;

        return (
          <div key={item.id} onClick={() => handleClick(item.id)}>

            {/* ========================= */}
            {/* ⭐ IF ACTIVE → BIG CARD ⭐ */}
            {/* ========================= */}
            {isActive ? (
              <div className="flex items-center cursor-pointer">
                <div className="bg-light-gray h-110 w-100 rounded-xl relative p-4">
                  
                  <div className="absolute right-3 -top-5 text-3xl">
                    {item.id}
                  </div>

                  <section className="pt-9 px-2">
                    <h2 className="mb-3">{item.title}</h2>
                    <p className="my-8">{item.description}</p>
                  </section>

                  <section className="pl-2">
                    <h3 className="mb-4">{item.listTitle}</h3>

                    {item.details.map((listItem, index) => (
                      <ul key={index} className="pl-4">
                        <li className="mb-2 list-disc">{listItem}</li>
                      </ul>
                    ))}
                  </section>
                </div>
              </div>

            ) : (
              /* ============================ */
              /* ⭐ IF NOT ACTIVE → SMALL CARD ⭐ */
              /* ============================ */
              <div className="relative bg-light-gray w-100 h-16 md:w-16 md:h-110 pl-3 px-2 rounded-xl cursor-pointer transition-all duration-300">
                <div className="absolute right-3 -top-5 md:left-10 md:-top-5 text-3xl">
                  {item.id}
                </div>

                <div className="h-full flex justify-start items-center md:items-end">
                  <h2 className="md:w-1 pl-2 md:transform md:-rotate-90 whitespace-nowrap">
                    {item.title}
                  </h2>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default SlideCard;