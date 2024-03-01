import { VerifyWordContainer } from "./VerifyWordContainer";
import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";

const TITLE = 'Verify Recovery Phrase';
const DESCRIPTION = 'Fill out the words according tonthier number to verify that you have stored your phrase  key safely';

export const Verify = () => {
    const navigate = useNavigate();
    const isDisabled = false;
    const onNextClicked = () => {
        navigate("/create-profile");
    }
    const buttonProps = {
        title: 'next',
        buttonStyle: 'w-[484px] h-[60px] bg-[#D97A7A] disabled:bg-[#262632] text-base text-white disabled:text-[#717173] mt-20 rounded-3xl',
        onClick: onNextClicked,
        isDisabled: isDisabled,
    }
    return(
            <>
                <p className="text-white text-2xl pt-16 pb-6">{TITLE}</p>
                <p className="max-w-[512px] text-[#717173] text-lg">{DESCRIPTION}</p>
                <VerifyWordContainer />
                <Button {...buttonProps} />

            </>
    )
}