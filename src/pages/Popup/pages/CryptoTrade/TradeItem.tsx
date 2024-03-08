import React from "react";
import { TradeItemProps } from "../../types";

export const TradeItem = ({tradeItemTitle, coinName, amount}: TradeItemProps) => {

    return (
        <div className="flex flex-col py-4 bg-[#262632] rounded-xl">
            <p className="text-[#717173] pl-2">
                {tradeItemTitle}
            </p>
            <div className="flex justify-between px-4">
                
            </div>
        </div>
    )
}
