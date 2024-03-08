import React from "react"
import { CoinImage } from "./Icon/CoinImage"

export const Coin = ({coinName, chainTitle}: {coinName: string, chainTitle: string}) => {
    return (
        <div className="flex items-center gap-1">
            <CoinImage chainTitle={chainTitle} />
            <div className="flex flex-col justify-center items-start">
                <p className="text-base text-white">{coinName}</p>
                <p className="text-sm text-[#6F6F6F]">{chainTitle}</p>
            </div>
        </div>
    )
}
