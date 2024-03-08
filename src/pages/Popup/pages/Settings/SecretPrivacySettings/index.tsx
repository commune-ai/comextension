import React from "react";
import { BackHeader } from "../../../container";
import { SettingItemContainer } from "./SettingItemContainer";

export const SecretPrivacySettings = () => {

    return (
        <div className="popup-container">
            <BackHeader headerTitle="Security & Privacy"/>
            <SettingItemContainer />
        </div>
    )
}
