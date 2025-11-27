import React from 'react';
import { useNavigate } from 'react-router-dom';
function Button ({to, children}){
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(to);
    };
    return (
        <button onClick={handleClick} className="justify-center font-bold text-sm bg-[#F5BE29] px-5 py-2 rounded shadow cursor-pointer">
        {children}
        </button>
    );
}
export default Button;
