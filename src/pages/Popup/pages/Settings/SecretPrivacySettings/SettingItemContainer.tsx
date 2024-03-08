import React from "react";
import { SettingItem } from "../../../components";
import { settingItemProps } from "../../../types";

export const SettingItemContainer = () => {
    const onConnectedWebsiteClicked = () => {
        console.log('onConnectedWebsiteClicked')
    }
    const onChangePasswordClicked = () => {
        console.log('onChangePasswordClicked')
    }
    const onAutoLockTimerClicked = () => {
        console.log('onAutoLockTimerClicked')
    }
    const settingItemProps: settingItemProps[] = [
        {
            title: 'Connected Website',
            onItemClicked: onConnectedWebsiteClicked,
        },
        {
            title: 'Change Password',
            onItemClicked: onChangePasswordClicked,
        },
        {
            title: 'Auto-lock Timer',
            onItemClicked: onAutoLockTimerClicked,
        }
    ]
    return (
        <div className="flex flex-col gap-2 items-center mt-6">
            {
                settingItemProps.map((settingItemProp) => {
                    return (
                        <SettingItem {...settingItemProp} />
                    )
                })
            }
        </div>
    )
}