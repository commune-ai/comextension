import { useState } from "react";
import { GiConfirmed } from "react-icons/gi";
import clsx from "clsx";
import { BackHeader } from "../../../container";

export const DeveloperSettings = () => {

    const [isEnabled, setIsEnabled] = useState(true);
    const onIsEnableToggleButtonClicked = () => {
        setIsEnabled((prev) => !prev);
    }

    return (
        <div className="popup-container">
            <BackHeader headerTitle="Developer Setting" />
            <div className="flex justify-between items-start w-80 h-20 mt-4 p-2 bg-[#121316] rounded-xl">
                <div className="flex flex-col justify-start w-50">
                    <p className="text-[#F7FBFF] text-base">
                        Enable Testnets
                    </p>
                    <p className="text-[#717173] text-sm break-words">
                        Allows you to view and interact with testnet network
                    </p>
                </div>
                {/* <div
                    className={clsx(
                        "flex items-center w-14 h-7 px-1 border border-[#AF6262] rounded-3xl cursor-pointer transition-all duration-1000",
                        isEnabled && "justify-end bg-[#4A333A] ",
                        !isEnabled && "justify-start bg-[#717173]"
                        )}
                    onClick={onIsEnableToggleButtonClicked}
                >
                    <GiConfirmed
                        className={clsx(
                            'text-xl text-white rounded-full transition-all duration-1000',
                            isEnabled && 'bg-[#D97A7A]',
                            !isEnabled && 'bg-[#717173]'
                        )}
                    />
                </div> */}
            </div>
        </div>
        
    )
}
