import { useNavigate } from "react-router-dom";
import { SlMagnifier } from "react-icons/sl";
import { CoinContainer } from "../../container";
import { Button } from "../../components";
import { ButtonProps } from "@material-tailwind/react";

export const SendToken = () => {
    const navigate = useNavigate();
    const onCloseButtonClick = () => {
        navigate(-1);
    }
    const onCoinClicked = () => {
        navigate('/send-token-detail');
    }
    
    const closeButtonProps = {
        title: 'Close',
        buttonStyle: "rounded-2xl bg-[#D97A7A] text-white text-xl text-sm w-72 h-12 mt-12",
        onClick: onCloseButtonClick,
    }

    return (
        <>
            <p className="text-white text-base mt-5">
                Select token to Send
            </p>
            <div className="relative w-72 h-10 mt-5">
                <SlMagnifier className="absolute text-[#D97A7A] text-xs bg-inherit top-4 left-3" />
                <input
                    type="text"
                    className="w-full h-full text-white pl-10 text-sm border border-[#262632] rounded-xl bg-inherit"
                />
            </div>
            <CoinContainer 
                onCoinClicked={onCoinClicked}
            />
            <Button {...closeButtonProps} />
        </>
    )
}
