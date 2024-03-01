import { IoMdArrowDropright } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export const AccountName = ({accountName}: {accountName: string}) => {
    const navigate = useNavigate();
    const onAccountClicked = () => {
        navigate('/edit-account');
    }
    
    return (
        <div
            className="relative bg-[#22222e] text-[#F7FBFF] text-lg py-3 rounded-lg w-44 text-center mt-3 cursor-pointer"
            onClick={onAccountClicked}
        >
            {accountName}
            <IoMdArrowDropright className="absolute right-3 bottom-1/2 transform translate-y-1/2 text-lg"/>
        </div>
    )
}