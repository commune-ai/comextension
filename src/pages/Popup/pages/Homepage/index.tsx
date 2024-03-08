import React from "react";
import { useState } from "react";
import { TotalAvailable } from "./TotalAvailable";
import { ButtonContainer } from "./ButtonContainer";
import { TokenSearchBoard } from "./TokenSearchBoard";
import { BottomNavbar } from "../../components";

export const Homepage = () => {
    const [amount, setAmount] = useState(0);
    const selectedMenuItem = 'Home';

    return (
        <>
            <TotalAvailable amount={amount} />
            <ButtonContainer />
            <TokenSearchBoard />
            <BottomNavbar
                selectedMenuItem={selectedMenuItem}
            />
        </>
    )
}
