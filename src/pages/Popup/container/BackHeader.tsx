import React from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

export const BackHeader = ({headerTitle}: {headerTitle: string}) => {
    const navigate = useNavigate();
    const onGoBackClicked = () => {
        navigate(-1);
    }
    return (
        <div className="relative flex items-center justify-center w-full h-14">
            <FaArrowLeft 
                className='absolute bottom-1/2 transform translate-y-1/2 left-4 text-[#717173] text-base bg-inherit cursor-pointer'
                onClick={onGoBackClicked}
            />
            <p className="text-lg text-white">{headerTitle}</p>
        </div>
    )
}
