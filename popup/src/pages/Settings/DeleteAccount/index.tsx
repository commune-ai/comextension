import { BackHeader } from "../../../container";
import { TrashAccount } from "./TrashAccount";
import { Button } from "../../../components";
import { useNavigate } from "react-router-dom";

export const DeleteAccount = () => {
    const navigate = useNavigate();
    const onCancelClicked = () => {
        navigate(-1);
    }
    const onDeleteButtonClicked = () => {
        console.log('onDeleteButtonClicked');
    }
    const deleteButtonProps = {
        title: 'Delete',
        buttonStyle: "rounded-2xl bg-[#E32020] text-white text-lg w-40 h-10",
        onClick: onDeleteButtonClicked,
    }
    const cancelButtonProps = {
        title: 'Cancel',
        buttonStyle: "rounded-2xl bg-[#262632] text-white text-lg w-40 h-10",
        onClick: onCancelClicked,
    }

    return (
        <div className="popup-container">
            <BackHeader headerTitle="Delete Account" />
            <TrashAccount accountName="Storm"/>
            <div className="two-button-wrapper">
                <Button {...cancelButtonProps} />
                <Button {...deleteButtonProps} />
            </div>
        </div>
    )
}