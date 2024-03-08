import React from "react";
import { VscAccount } from "react-icons/vsc";

export const AccountItem = ({accountName, onAccountClicked}: {accountName: string, onAccountClicked: () => void}) => {

    return (
        <div
            className="flex items-center w-80 h-16 pl-6 bg-[#121316] rounded-xl cursor-pointer"
            onClick={onAccountClicked}
        >
            <VscAccount className="text-[#D97A7A] text-4xl"/>
            <p className="text-lg text-[#F7FBFF] pl-4">
                {accountName}
            </p>
        </div>
    )
}
