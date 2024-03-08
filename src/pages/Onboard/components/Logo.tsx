import React from "react";
import logoImage from "../assets/images/icon-46-48.png";

// const image = require("/images/icon-86-84.png")
export const Logo = () => {
    return (
        <div className="absolute top-12 left-24 flex">
            <img src={logoImage} alt="Commune-logo" />
            <p className="text-3xl font-semibold text-white">ommune.ai</p>
        </div>
    )
}