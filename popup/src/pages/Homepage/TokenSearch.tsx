import clsx from "clsx"
import { SlMagnifier } from "react-icons/sl";
import { TokenSearchProps } from "../../types"

export const TokenSearch = ({selectedToken, selectedTokenClass, setSelectedToken, setSelectedTokenClass}: TokenSearchProps) => {
    return (
        <div className="flex justify-between px-10">
            <div className="flex justify-center gap-3">
                <span 
                    className={
                        clsx(
                            "w-[60px] h-[30px] flex justify-center items-center rounded-3xl text-xs cursor-pointer",
                            selectedTokenClass === 'Crypto' && "bg-[#D97A7A] text-white",
                            selectedTokenClass !== 'Crypto' && "bg-[#1D1D26] text-[#717173]"
                    )}
                    onClick={() => setSelectedTokenClass('Crypto')}
                >
                    Crypto
                </span>
                <span 
                    className={
                        clsx(
                            "w-[60px] h-[30px] flex justify-center items-center rounded-3xl text-xs cursor-pointer",
                            selectedTokenClass === 'NFTs' && "bg-[#D97A7A] text-white",
                            selectedTokenClass !== 'NFTs' && "bg-[#1D1D26] text-[#717173]"
                    )}
                    onClick={() => setSelectedTokenClass('NFTs')}
                >
                    NFTs
                </span>
            </div>
            <div className="relative w-28 h-7">
                <SlMagnifier className="absolute text-[#D97A7A] text-xs bg-inherit top-2 left-3" />
                <input
                    type="text"
                    className="w-full h-full text-white pl-7 text-sm border border-[#262632] rounded-xl bg-inherit"
                />
            </div>
        </div>
    )
}
