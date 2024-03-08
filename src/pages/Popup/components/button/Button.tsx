import React from "react"
import { ButtonProps } from "../../types"

export const Button = ({ title, buttonStyle, isDisabled, onClick }: ButtonProps) => {

    return (
        <button
            disabled={ isDisabled }
            onClick={ onClick }
            className={buttonStyle}
        >
            {title}
        </button>
    )
}
