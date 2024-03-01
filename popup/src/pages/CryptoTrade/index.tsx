import { useEffect, useState } from "react";
import { ToggleButtonHeader } from "./ToggleButtonHeader";

export const CryptoTrade = () => {
    
    const [selectedButtonTitle, setSelectedButtonTitle] = useState('Buy');
    const onTradeButtonToggle = () => {
        if (selectedButtonTitle === 'Buy') {
            setSelectedButtonTitle('Sell');
        } else {
            setSelectedButtonTitle('Buy');
        }
    }
    const lowTransactionFee = 'Get a reduce transaction fee for holding 1000COM';
    const [tradeItemTitle, setTradeItemTitle] = useState('I want to pay');
    const [givingCoinName, setGivingCoin] = useState('');
    

    useEffect(() => {
        if (selectedButtonTitle === 'Buy') {
            setTradeItemTitle('I want to pay')
        } else {
            setTradeItemTitle('I want to sell')
        }
    },[selectedButtonTitle])

    return (
        <>
            <ToggleButtonHeader
                selectedButtonTitle={selectedButtonTitle}
                onTradeButtonToggle={onTradeButtonToggle}
            />
            <p className="inline-block p-2 bg-[#AF6262] text-sm text-white text-center mt-8 rounded-lg">
                {lowTransactionFee}
            </p>
        </>
    )
}
