import React from "react";
import { BackHeader } from "../../container";
import { EarnCoinContainer } from "./EarnCoinContainer";
import { BottomNavbar } from "../../components";
import { Stake } from "./Stake";

export const Earn = () => {
    const headerTitle = 'Earn';
    const selectedMenuItem = 'Earn';

    return (
        <>
            <BackHeader headerTitle={headerTitle}/>
            <Stake />
            <EarnCoinContainer />
            <BottomNavbar
                selectedMenuItem={selectedMenuItem}
            />
        </>
    )
}
