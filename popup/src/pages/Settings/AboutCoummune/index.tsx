import { BackHeader } from "../../../container";
import { AboutCommuneItemContainer } from "./AboutCommuneItemContainer";
import image from "../../../assets/images/finishCreateProfile.png";

export const AboutCommune = () => {

    return (
        <div className="popup-container">
            <BackHeader headerTitle="" />
            <img
                src={image}
                alt="About Commune.AI"
                className="w-[130px] mt-4 pr-6"
            />
            <p className="text-[#D97A7A] text-xl mt-2">
                COMMUNE.AI
            </p>
            <p className="text-[#717173] text-lg">
                Version 24.1
            </p>
            <AboutCommuneItemContainer />
        </div>
    )
}
