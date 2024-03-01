import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import clsx from "clsx";
import { TradeToggleButtonProps } from "../../types";

export const ToggleButtonHeader = ({selectedButtonTitle, onTradeButtonToggle}: TradeToggleButtonProps) => {
    const navigate = useNavigate();
    const onGoBackClicked = () => {
        navigate(-1);
    }

    return (
        <div className="relative flex items-center justify-center w-full h-14 mt-4">
            <FaArrowLeft 
                className='absolute bottom-1/2 transform translate-y-1/2 left-4 text-[#717173] text-base bg-inherit cursor-pointer'
                onClick={onGoBackClicked}
            />
            <div className="w-36 h-12 flex justify-between items-center px-2 rounded-3xl border border-[#262632]">
                <div 
                    className={clsx(
                        'text-base px-4 py-2 rounded-3xl cursor-pointer',
                        selectedButtonTitle === 'Buy' && 'text-white bg-[#262632]',
                        selectedButtonTitle !== 'Buy' && 'text-[#717173]'
                    )}
                    onClick={onTradeButtonToggle}
                >
                    Buy
                </div>
                <div 
                    className={clsx(
                        'text-base px-4 py-2 rounded-3xl cursor-pointer',
                        selectedButtonTitle === 'Sell' && 'text-white bg-[#262632]',
                        selectedButtonTitle !== 'Sell' && 'text-[#717173]'
                    )}
                    onClick={onTradeButtonToggle}
                >
                    Sell
                </div>
            </div>
        </div>
    )
}