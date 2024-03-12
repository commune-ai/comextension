
import { SecretWordWrapper } from "./SecretWordWrapper";
import clsx from "clsx";

export const SecretWordContainer = ({words, showSecretWords}: {words: string[], showSecretWords: boolean}) => {
    return (
        <div
            className={clsx(
                showSecretWords && "blur",
                "relative flex flex-wrap gap-4 w-[484px] bg-[#121316] rounded-xl my-8 py-5 px-4"
            )}
        >
            {
                words.map((word, index) => (
                    <SecretWordWrapper
                        key={index}
                        word={word}
                    />
                ))
            }
        </div>
    )
}
