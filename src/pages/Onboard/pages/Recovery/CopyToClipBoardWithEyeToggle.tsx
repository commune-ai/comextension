import React from "react";
import { FaRegCopy } from "react-icons/fa6";
import { LuEye } from "react-icons/lu";
import { RiEyeCloseFill } from "react-icons/ri";
import { CopyToClipBoardWithEyeToggleProps } from "../../types";

export const CopyToClipBoardWithEyeToggle = ({showSecretWords, onEyeToggleClicked, onCopyToClipboardClicked}: CopyToClipBoardWithEyeToggleProps) => {
    return (
        <div className="flex justify-between items-center w-[484px] px-2">
            <div className="flex items-center gap-2">
                <FaRegCopy className="text-[#717173] text-lg bg-inherit cursor-pointer" onClick={onCopyToClipboardClicked}/>
                <p className="text-base text-[#717173]">Copy to clip board</p>
            </div>
            {
                showSecretWords 
                ? <LuEye className="text-[#717173] bg-inherit text-xl cursor-pointer" onClick={onEyeToggleClicked}/> 
                : <RiEyeCloseFill className="text-[#717173] text-xl cursor-pointer" onClick={onEyeToggleClicked}/>
            }
        </div>
    )
}
