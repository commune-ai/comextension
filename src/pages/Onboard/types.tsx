export interface ButtonProps {
    title: string,
    buttonStyle: string,
    isDisabled?: boolean,
    onClick: () => void,
}

export interface AgreeTermsOfServiceProps {
    isChecked: boolean,
    checkBoxToggle: () => void,
}

export interface ProfileInputContainerProps {
    name: string,
    password: string,
    confirmPassword: string,
    setName: React.Dispatch<React.SetStateAction<string>>,
    setPassword: React.Dispatch<React.SetStateAction<string>>,
    setConfirmPassword: React.Dispatch<React.SetStateAction<string>>,
}

export interface InputPasswordProps {
    password: string,
    setPassword: React.Dispatch<React.SetStateAction<string>>,
}

export interface CopyToClipBoardWithEyeToggleProps {
    showSecretWords: boolean,
    onEyeToggleClicked: () => void,
    onCopyToClipboardClicked: () => void,
}

