import communeImage from '../../assets/images/icon-84-86.png'

const WELCOME = 'Welcome to Commune ai'

export const WelcomeTextContainer = () => {
    return (
        <>
            <div className="flex items-center gap-4">
                <img src={communeImage} alt={WELCOME}/>
                <p className="text-[#717173] text-3xl font-semibold">Welcome to</p>
            </div>
            <p className="text-4xl text-white font-semibold">Commune.ai</p>
            
        </>
    )
}