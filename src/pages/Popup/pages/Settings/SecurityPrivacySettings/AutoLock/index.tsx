import { useState } from "react";
import { BackHeader } from "../../../../container";
import { ToggleButton } from "../../../../components";

export const AutoLock = () => {
    const [checked, setChecked] = useState<boolean>(false);

    return (
        <div className="popup-container">
            <BackHeader
                headerTitle="Auto Lock"
            />

            <div className="mt-20">
                <ToggleButton
                    checked={checked}
                    setChecked={setChecked}
                    size='lg'
                />
            </div>
        </div>
    )
}
