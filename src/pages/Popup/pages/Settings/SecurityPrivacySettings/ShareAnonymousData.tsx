import { useState } from "react";
import { ToggleButton } from "../../../components";

export const ShareAnonymousData = () => {

    const [shareAnonymousData, setShareAnonymousData] = useState(false);

    return (
        <div className="flex justify-between items-start w-72 bg-[#121316] rounded-xl border border-[#262632]">
            <div className="flex flex-col items-start gap-2 w-56">
                <p className="text-xl text-[#F7FBFF]">
                    Share anonymous Data
                </p>
                <p className="text-base text-[#717173]">
                    Help us improve our performance to serve you better
                </p>
            </div>
            
            <ToggleButton
                size='lg'
                checked={shareAnonymousData}
                setChecked={setShareAnonymousData}
            />
        </div>
    )
}
