import { BackHeader } from "../../container";
import binaryImage from "../../assets/images/binary.png";
import { WalletAddressContainer } from "./WalletAddressCointainer";

export const ReceiveTokenDetail = () => {
    const headerTitle = 'Receive Commune.ai'
    const explanation = 'This address can only be use to receive compatible tokens';

    return (
        <div className="popup-container">
            <BackHeader
                headerTitle={headerTitle}
            />
            <img
                src={binaryImage}
                alt=""
                className=" mt-16"
            />
            <WalletAddressContainer />
            <p className=" w-80 text-[#D97A7A] text-lg text-center mt-12">
                {explanation}
            </p>
        </div>
    )
}
