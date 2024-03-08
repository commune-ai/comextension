import React from "react";
import { useNavigate } from "react-router-dom";
import { IconButton } from "../../components";

export const ButtonContainer = () => {
    const navigate = useNavigate();

    const onSendButtonClicked = () => {
        navigate('/send-token');
    }
    const onReceiveButtonClicked = () => {
        console.log('I am here Receive Button Clicked')
        navigate('/receive-token');
    }
    const onBuyButtonClicked = () => {
        navigate('/crypto-trade');
    }

    return (
        <div className="flex items center justify-between gap-3 px-4 mt-6">
            <IconButton buttonTitle={'Send'} onClickHandler={onSendButtonClicked} />
            <IconButton buttonTitle={'Receive'} onClickHandler={onReceiveButtonClicked} />
            <IconButton buttonTitle={'Buy'} onClickHandler={onBuyButtonClicked} />  
        </div>
    )
}
