import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';
import insuranceData from "../data/insuranceData";
//This component takes in an object with the carosel items. This way the list of items can be edited without changing the component

function Carousel(){
    //building carosel function
     const [currentIndex, setCurrentIndex] = useState(0);
     const visibleItems = 3;
     const navigate = useNavigate();
     
    const prevSlide = () => {
     setCurrentIndex((prev) =>
          Math.max(prev - visibleItems, 0)
        );
    };

    const nextSlide = () => {
     setCurrentIndex((prev) =>
          Math.min(prev + visibleItems, insuranceData.length - visibleItems)
        );
    };

    const visible = insuranceData.slice(currentIndex, currentIndex + visibleItems);
    const handleClick = (link) => {
          navigate(link);
  };

    return(
        <div className="carousel-container w-full h-68 flex justify-between items-center">
            <button onClick={prevSlide} disabled={currentIndex === 0} className="ml-5 cursor-pointer">
                 ◀
            </button>
            <div className="carousel h-60 flex items-center overflow-hidden">
                 {visible.map((item, index) => (
                    <div onClick={() => handleClick(item.link)} className="carousel-item w-90 h-full mx-2 text-center cursor-pointer" key={index}>
                        {item.image && <img src={item.image} alt={item.name} className="w-full h-48 object-cover mb-2" />}
                        <p className="mt-6">{item.name}</p>
                    </div>
                ))}
            </div>
            <button onClick={nextSlide} disabled={currentIndex >= insuranceData.length - visibleItems} className="mr-5 cursor-pointer">
                ▶
            </button>
        </div>
    );
}
export default Carousel;