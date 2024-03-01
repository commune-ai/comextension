import React from "react";
const secretWords = [
    'man',
    'hare',
    'Classic',
    'People',
    'Think',
    'Kazumi',
    'Haruto',
    'Brave',
    'Strong',
    'Smart',
    'Top',
    'Beautiful',
]

export const VerifyWordContainer = () => {
    const secretWordIdNumber = [4, 10, 3, 6, 12, 7];

    return (
        <div className="flex flex-wrap gap-x-6 gap-y-4 w-[536px] px-6 py-8 mt-14 bg-[#0F0F12]">
            {
                secretWordIdNumber.map((idNumber, index) =>(
                    <div className="flex items-center justify-between w-[47%]">
                        <p className="text-base text-white">Word #{idNumber}:</p>
                        <input type="text" className=" w-36 h-12 rounded-3xl bg-inherit text-white border border-[#D97A7A] pl-4" />
                    </div>
                ))
            }
        </div>
    )
}