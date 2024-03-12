
import image from "../../assets/images/finishCreateProfile.png";
import { Button } from "../../components/Button";

const TITLE = 'You are all set !';
const DESCRIPTION = 'Experience the full potential of your wallet';
export const Finish = () => {
    const onGetStartedClicked = () => {
        console.log('get started')
        localStorage.setItem("isPopup", "popup");
    }
    const getStartedButtonProps = {
        title: 'advance',
        buttonStyle: "rounded-2xl bg-[#D97A7A] disabled:bg-[#262632] text-base text-white disabled:text-[#717173] w-[484px] h-[60px] mt-24",
        onClick: onGetStartedClicked,
    }
    return (
            <>
                <img
                    src={image}
                    alt="You are all set, Commune"
                    className="pt-[150px]"
                />
                <p className="text-white text-3xl pt-12">
                    {TITLE}
                </p>
                <p className="text-[#717173] text-base pt-4">
                    {DESCRIPTION}
                </p>
                <Button {...getStartedButtonProps} />
            </>
    )
}
