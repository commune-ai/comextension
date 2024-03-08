import React from "react";
import { BackHeader } from "../../../container";
import { NetworkContainer } from "./NetworkContainer";
import { Button } from "../../../components";

export const Network = () => {
    const onAddCustomNetworkButtonClicked = () => {
        console.log('onAddCustomNetworkButtonClicked');
    }
    const addCustomNetworkButtonProps = {
        title: 'Add Custom Network',
        buttonStyle: "rounded-2xl bg-[#D97A7A] text-white text-xl text-sm w-72 h-12 mt-12",
        onClick: onAddCustomNetworkButtonClicked,
    }

    return (
        <div className="popup-container">
            <BackHeader headerTitle="Network" />
            <NetworkContainer />
            <Button {...addCustomNetworkButtonProps} />
        </div>
    )
}
