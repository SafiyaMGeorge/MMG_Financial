import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";

function Carousel({ data }) {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
    },
    [
      AutoScroll({
        playOnInit: true,
        speed: 1,
        stopOnHover: true,
        stopOnInteraction: false,
      }),
    ]
  );

  return (
    <div className="overflow-hidden w-full py-6" ref={emblaRef}>
      <div className="flex">
        {data.map((item, i) => (
          <div
            key={i}
            className="embla__slide shrink-0 mr-10 flex items-center w-60 md:w-125 md:h-80 bg-linear-to-b from-[#4A90E2] to-[#0C243C] text-white rounded-2xl py-2">
            <section className="flex flex-col items-center text-center">
              <img src={item.image} alt="" className="w-21 md:w-42 mb-5" />
              <h3 className="mb-3 text-md md:text-lg">{item.name}</h3>
              <p className="leading-relaxed md:px-10 text-sm md:text-md">{item.description}</p>
            </section>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
