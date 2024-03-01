import { BackHeader } from "../../../container";
import { AccountIcon } from "../../../components";
import { AccountSetting } from "./AccountSetting";
import { Button } from "../../../components";
import { useNavigate } from "react-router-dom";

export const EditAccount = () => {
    const navigate = useNavigate();
    const onDeleteAccountButtonClicked = () => {
        navigate('/delete-account');
    }
    const deleteAccountButtonProps = {
        title: 'Delete Account',
        buttonStyle: "rounded-2xl bg-[#D97A7A] text-white text-xl text-sm w-72 h-12 mt-28",
        onClick: onDeleteAccountButtonClicked,
    }

    return (
        <div className="popup-container">
            <BackHeader headerTitle="Edit Account" />
            <AccountIcon accountName="Storm" />
            <AccountSetting />
            <Button {...deleteAccountButtonProps} />
        </div>
    )
}