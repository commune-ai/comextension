
import clsx from "clsx";
import { ButtonIcon } from "./Icon/ButtonIcon";
import { useNavigate } from "react-router-dom";

export const BottomNavbar = ({selectedMenuItem}: {selectedMenuItem: string}) => {
    const navigate = useNavigate();
    const buttonTitles = [
        'Home',
        'Earn',
        'History',
        'Settings', 
    ]
    const onNavbarButtonClicked = (buttonTitle: string) => {
        if (buttonTitle === 'Home') {
            navigate('/homepage');
        }
        if (buttonTitle === 'Earn') {
            navigate('/earn');
        }
        if (buttonTitle === 'History') {
            navigate('/history');
        }
        if (buttonTitle === 'Settings') {
            navigate('/setting');
        }
    }

    return (
        <div className="flex justify-between items-center mt-6 w-72 h-14 px-6 bg-[#262632] rounded-2xl">
            {
                buttonTitles.map(buttonTitle => {
                    console.log('buttonTitle', typeof(buttonTitle))
                    return (
                        <div
                            className={clsx(
                                "flex flex-col items-center cursor-pointer text-sm",
                                selectedMenuItem === buttonTitle && "text-[#D97A7A]",
                                selectedMenuItem !== buttonTitle && "text-[#717173]"
                            )}
                            onClick={() => onNavbarButtonClicked(buttonTitle)}
                        >
                            <ButtonIcon iconName={buttonTitle} />
                            <p>{buttonTitle}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}
