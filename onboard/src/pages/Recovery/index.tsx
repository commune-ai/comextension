import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SecretWordContainer } from "./SecretWordContainer";
import { CopyToClipBoardWithEyeToggle } from "./CopyToClipBoardWithEyeToggle";
import { Warning } from "./Warning";
import { AgreeTermsOfService } from "../../components/AgreeTermsOfService";
import { Button } from "../../components/Button";

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

const TITLE = 'Secret Recovery Phrase';
const DESCRIPTION = 'you will use this to secure your wallet';

export const Recovery = () => {
    const navigate = useNavigate();
    const [showSecretWords, setShowSecretWords] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const onEyeToggleClicked = () => {
        setShowSecretWords((prev) => !prev);
    }
    const checkBoxToggle = () => {
        setIsChecked((prev) => !prev);
        console.log(isChecked)
    }
    const onCopyToClipboardClicked = () => {
        console.log('copy')
    }
    const onAdvanceClick = () => {
        navigate('/verify');
    }
    const advanceButtonProps = {
        title: 'advance',
        buttonStyle: "rounded-2xl bg-[#D97A7A] disabled:bg-[#262632] text-base text-white disabled:text-[#717173] w-[484px] h-[60px] mt-10",
        isDisabled: !isChecked,
        onClick: onAdvanceClick,
    }
    return (
            <>
                <p className="text-white text-3xl mt-12">
                    {TITLE}
                </p>
                <p className="text-[#717173] text-xl mt-2">
                    {DESCRIPTION}
                </p>
                <SecretWordContainer
                    words={secretWords}
                    showSecretWords={showSecretWords}
                />
                <CopyToClipBoardWithEyeToggle
                    showSecretWords={showSecretWords}
                    onEyeToggleClicked={onEyeToggleClicked}
                    onCopyToClipboardClicked={onCopyToClipboardClicked}
                />
                <Warning/>
                <AgreeTermsOfService
                    isChecked={isChecked}
                    checkBoxToggle={checkBoxToggle}
                />
                <Button {...advanceButtonProps} />
            </> 
    )
}