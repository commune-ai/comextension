import React from "react";
import { ButtonIcon } from "../Icon/ButtonIcon";
import { IconButtonProps } from "../../types";

export const IconButton = ({buttonTitle, onClickHandler}: IconButtonProps) => {
    
    return (
        <button className="button-with-icon" onClick={onClickHandler}>
            <span className="button-icon-container">
                <ButtonIcon iconName={buttonTitle}/>
            </span>
            <p className="text-sm text-[#F7FBFF]">
                {buttonTitle}
            </p>
        </button>
    )
}
