import React from "react";
import { useNavigate } from "react-router-dom";
import { BackHeader } from "../../../container";
import { AccountItem } from "./AccountItem";
import { Button } from "../../../components";

export const ManageAccount = () => {
    const navigate = useNavigate();
    const accountNames = [
        'Storm',
        'Storm',
        'Storm',
        'Storm',
    ]
    const onAccountClicked = () => {
        navigate('/edit-account');
    }

    const onAddCustomAccountButtonClicked = () => {
        localStorage.setItem("isPopup", "onboard");
    }
    const addCustomAccountButtonProps = {
        title: 'Add Custom Account',
        buttonStyle: "rounded-2xl bg-[#D97A7A] text-white text-xl text-xs w-72 h-12 mt-12",
        onClick: onAddCustomAccountButtonClicked,
    }

    return (
        <div className="popup-container">
            <BackHeader headerTitle="Manage Accounts"/>
            <div className="flex flex-col gap-2 mt-8 min-h-80 max-h-80">
                {
                    accountNames.map((accountName) => {
                        return (
                            <AccountItem
                                accountName={accountName}
                                onAccountClicked={onAccountClicked}
                            />
                        )
                    })
                }
            </div>
            <Button {...addCustomAccountButtonProps} />
        </div>
    )
}
