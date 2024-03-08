import React from "react";
import { useNavigate } from "react-router-dom";
import { SettingItem } from "../../components";
import { settingItemProps } from "../../types";

export const DeveloperSetting = () => {
    const navigate = useNavigate();
    const onDeveloperSettingClicked = () => {
        navigate('/developer-settings')
    }
    const developerSetting: settingItemProps = {
        title: 'Developer Setting',
        onItemClicked: onDeveloperSettingClicked,
    }
    return (
        <div className="mt-3">
            <SettingItem {...developerSetting} />
        </div>
    )
}
