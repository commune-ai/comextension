import { useState, useEffect } from 'react';
import image from '../../assets/images/icon-84-86.png'
import { InputPassword } from './InputPassword';
import { Button } from '../../components';
import { useNavigate } from 'react-router-dom';

const TITLE = 'Commune.ai';
const DESCRIPTION = 'Secure and fast multi-chain crypto wallet.';

export const Login = () => {

    const navigate = useNavigate();
    const [password, setPassword] = useState('');
    const onUnlockWalletButtonClicked = () => {
        localStorage.setItem("isPopup", "false");
        navigate('/homepage');
    }
    const unlockWalletButtonProps = {
        title: 'Unlock wallet',
        buttonStyle: "rounded-2xl bg-[#D97A7A] disabled:bg-[#262632] text-white text-lg disabled:text-[#717173] w-[288px] h-[48px] mt-12",
        onClick: onUnlockWalletButtonClicked,
    }
    return (
        <div className="popup-container">
            <img
                src={image}
                alt="Commune login"
                className='pt-16'
            />
            <p className='text-3xl text-white pt-2'>
                {TITLE}
            </p>
            <p className='text-base text-[#717173] w-[212px] pt-6 text-center'>
                {DESCRIPTION}
            </p>
            <InputPassword
                password={password}
                setPassword={setPassword}
            />
            <Button {...unlockWalletButtonProps} />
        </div>
    )
}
