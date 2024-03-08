import React, { useEffect, useState } from "react";
import { MaxAmountLabel } from "../../components";
import { BackHeader } from "../../container";
import communeImage from "../../assets/images/icon-46-48.png";
import { NetworkLabel } from "./NetworkLabel";
import { RecipientAddress } from "./RecipientAddress";
import { Button } from "../../components";

export const SendTokenDetail = () => {

    const headerTitle = 'Send Commune.ai';
    const [amount, setAmount] = useState();
    const [maxAmount, setMaxAmount] = useState(1000000.67);
    const [address, setAddress] = useState('');
    const [isNextButtonDisabled, setIsNextButtonDisabled] = useState(true);

    const onNextButtonClicked = () => {

    }
    const validateInputData = () => {
        console.log('')
        if (amount && address.trim()) {
            setIsNextButtonDisabled(false);
        } else {
            setIsNextButtonDisabled(true);
        }
    }

    const NextButtonProps = {
        title: 'Next',
        buttonStyle: "rounded-2xl bg-[#D97A7A] text-[#F7FBFF] disabled:bg-[#262632] disabled:text-[#717173] text-base w-72 h-12 mt-24",
        isDisabled: isNextButtonDisabled,
        onClick: onNextButtonClicked,
    }

    useEffect(() => {
        validateInputData();
    },[amount, address])

    return (
        <div className="popup-container">
            <BackHeader 
                headerTitle={headerTitle}
            />
            <img
                src={communeImage}
                alt=""
                className="my-6"
            />
            <NetworkLabel />
            <RecipientAddress
                address={address}
                setAddress={setAddress}
            />
            <MaxAmountLabel
                amount={amount}
                setAmount={setAmount}
                maxAmount={maxAmount}
            />
            <Button {...NextButtonProps} />
        </div>
    )
}
