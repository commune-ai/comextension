
export interface ButtonProps {
    title: string,
    buttonStyle: string,
    isDisabled?: boolean,
    onClick: () => void,
}

export interface InputPasswordProps {
    password: string,
    setPassword: React.Dispatch<React.SetStateAction<string>>,
}

export interface TokenSearchProps {
    selectedTokenClass: string,
    selectedToken: string,
    setSelectedTokenClass: React.Dispatch<React.SetStateAction<string>>,
    setSelectedToken: React.Dispatch<React.SetStateAction<string>>,
}

export interface IconButtonProps {
    buttonTitle: string,
    onClickHandler: () => void,
}

export interface CoinProps {
    chainTitle: string,
    coinName: string,
    onClickHandler: () => void,
}

export interface MaxAmountLabelProps {
    amount: any,
    setAmount: React.Dispatch<React.SetStateAction<any>>,
    maxAmount: number,
}

type Date = {
    year: number,
    month: string,
    day: number,
}

type TransferDetail = {
    transferAddress: string,
    transferCoinName: string,
    transferAmount: number,
}

type SwapDetail = {
    soldCoinName: string,
    boughtCoinName: string,
    soldCoinAmount: number,
    boughtCoinAmount: number,
}

export interface TransactionItemProps {
    transactionType: string,
    date: Date,
    swapDetail?: SwapDetail,
    transferDetail?: TransferDetail,
}

export interface settingItemProps {
    title: string,
    onItemClicked: () => void,
}

export interface TradeToggleButtonProps {
    selectedButtonTitle: string,
    onTradeButtonToggle: () => void,
}

export interface TradeItemProps {
    tradeItemTitle: string,
    coinName: string,
    amount: number,
}