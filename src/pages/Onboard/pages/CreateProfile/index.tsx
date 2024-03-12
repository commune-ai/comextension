
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProfileInputContainer } from "./ProfileInputContainer";
import { AgreeTermsOfService } from "../../components/AgreeTermsOfService";
import { Button } from "../../components/Button";

const TITLE = 'Create a Profile';
const DESCRIPTION = 'You will use this profile to secure your wallet';

export const CreateProfile = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isChecked, setIsChecked] = useState(false);

    const onCreateProfileClicked = () => {
        navigate('/finish');
    }
    const checkBoxToggle = () => {
        setIsChecked((prev) => !prev);
        console.log(isChecked)
    }
    const createProfileButtonProps = {
        title: 'Create a new profile',
        buttonStyle: "rounded-2xl bg-[#D97A7A] disabled:bg-[#262632] text-base text-white disabled:text-[#717173] w-[484px] h-[60px] mt-10",
        isDisabled: !isChecked,
        onClick: onCreateProfileClicked,
    }

    return (
            <>
                <p className="text-white text-2xl pt-24">{TITLE}</p>
                <p className="text-[#717173] text-lg pt-4">{DESCRIPTION}</p>
                <ProfileInputContainer
                    name={name}
                    password={password}
                    confirmPassword={confirmPassword}
                    setName={setName}
                    setPassword={setPassword}
                    setConfirmPassword={setConfirmPassword}
                />
                <AgreeTermsOfService
                    isChecked={isChecked}
                    checkBoxToggle={checkBoxToggle}
                />
                <Button {...createProfileButtonProps} />
            </>
    )
}
