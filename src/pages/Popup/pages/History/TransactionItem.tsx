import React from "react";
import { TransactionItemProps } from "../../types";
import { TransactionIcon } from "../../components";
import { useEffect, useState } from "react";
import clsx from "clsx";

export const TransactionItem = ({transactionType, date, swapDetail, transferDetail}: TransactionItemProps) => {

    const [sign, setSign] = useState('');
    useEffect(() => {
        if (swapDetail && swapDetail?.boughtCoinAmount > 0) {
            console.log('I am here swap +')
            setSign('+')
        }
        if (transferDetail && transferDetail.transferAmount > 0) {
            console.log('I am here transfer +')
            setSign('+')
        }
    },[])

    return (
        <div className="flex justify-between items-center w-80 h-16 rounded-lg bg-[#121316] px-3 py-2">
            <div className="flex justify-center gap-2 items-center">
                <TransactionIcon transactionType = {transactionType} />
                <div className="flex flex-col items-start justify-center gap-1">
                    <p className="text-sm text-[#CCE3FF]">
                        {transactionType}
                    </p>
                    {
                        transactionType === 'Swap' &&
                        <p className="text-[#717173] text-xs">
                            {swapDetail?.soldCoinAmount} {swapDetail?.soldCoinName} for {swapDetail?.boughtCoinAmount} {swapDetail?.boughtCoinName}
                        </p>
                    }
                    {
                        transactionType === 'Transfer' &&
                        <p className="text-[#717173] text-xs">
                            from: {transferDetail?.transferAddress}
                        </p>
                    }
                </div>
            </div>
            <div className="flex flex-col justify-end items-center gap-1">
                <p className="text-[#717173] text-xs">
                    {date.month} & {date.day}, {date.year}
                </p>
                <p 
                    className={clsx(
                        "text-sm text-[#CCE3FF]",
                        sign === '+' && 'text-[#86AA89]',
                        sign !== '+' && 'text-[#E12E2E]'
                        )}
                >
                    {sign === '+' && sign} {swapDetail && swapDetail.boughtCoinAmount} {transferDetail && transferDetail.transferAmount} {swapDetail && swapDetail.boughtCoinName} {transferDetail && transferDetail.transferCoinName}
                </p>
            </div>

        </div>
    )
}
