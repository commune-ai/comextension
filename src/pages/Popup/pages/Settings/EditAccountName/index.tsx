import React from "react";
import { BackHeader } from "../../../container";
import { AccountIcon } from "../../../components";
import { Button } from "../../../components";
import { useEffect, useState } from "react";
import { isDisabled } from "@testing-library/user-event/dist/utils";
import { useNavigate } from "react-router-dom";

export const EditAccountName = () => {
    const navigate = useNavigate();
    const [newName, setNewName] = useState('');
    const [isSaveButtonAcitve, setIsSaveButtonActive] = useState(false);
    const onSaveClicked = () => {
        console.log('onSaveClicked');
    }
    const onCancelClicked = () => {
        navigate(-1)
    }
    const saveAccountButtonProps = {
        title: 'Save',
        buttonStyle: "rounded-2xl bg-[#D97A7A] text-white text-lg w-40 h-10",
        isDisabled: !isSaveButtonAcitve,
        onClick: onSaveClicked,
    }
    const cancelButtonProps = {
        title: 'Cancel',
        buttonStyle: "rounded-2xl bg-[#262632] text-white text-lg w-40 h-10",
        onClick: onCancelClicked,
    }

    useEffect(() => {
        if (!newName.trim()) {
            setIsSaveButtonActive(true);
        }
    },[newName])

    return (
        <div className="popup-container">
            <BackHeader headerTitle="Edit Account" />
            <div className="mt-8">
                <AccountIcon accountName="Storm" />
            </div>
            <label className="text-white mt-8 ">Enter new Account Name</label>
            <input
                type="text"
                value={newName}
                className="text-white bg-inherit pl-4 w-80 h-16 border border-[#D97A7A] rounded-lg mt-4"
                onChange={(e) => setNewName(e.target.value)}
            />
            <div className="two-button-wrapper">
                <Button {...cancelButtonProps} />
                <Button {...saveAccountButtonProps} />
            </div>
        </div>
    )
}
