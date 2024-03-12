
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";

export const ButtonContainer = () => {
    const navigate = useNavigate();
    const createWallet = () => {
        navigate('/recovery')
    }
    const importWallet = () => {
        console.log('importWallet');
    }
    const createButtonProps = {
        title: 'Create a new wallet',
        buttonStyle: 'rounded-xl w-[376px] h-[60px] bg-[#D97A7A] text-lg text-[#ffffff]',
        onClick: createWallet,
    }
    const importButtonProps = {
        title: 'Import an existing wallet',
        buttonStyle: 'rounded-xl w-[376px] h-[60px] bg-[#0D0D0E] text-lg text-[#717173] border border-[#717173]',
        onClick: importWallet,
    }

    return (
        <div className="flex flex-col items-center gap-3 w-full pt-16">
            <Button {...createButtonProps}/>
            <Button {...importButtonProps}/>
        </div>
    )
}
