import { BackHeader } from "../../container";
import { AccountName } from "./AccountName";
import { BasicSetting } from "./BasicSetting";
import { SecuritySetting } from "./SecuritySetting";
import { DeveloperSetting } from "./DeveloperSetting";
import { Help } from "./Help";

export const Settings = () => {
    return (
        <div className="popup-container">
            <BackHeader headerTitle="Settings" />
            <AccountName accountName="Storm" />
            <BasicSetting />
            <SecuritySetting />
            <DeveloperSetting />
            <Help />
        </div>
    )
}