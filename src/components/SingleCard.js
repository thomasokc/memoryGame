import './SingleCard.css'

export default function SingleCard({card, handleChoice, flipped, disabled}) {

    const handleClick = () => {
        if (!disabled) {
            handleChoice(card)
        }
    } 

    return (
        <div className="card">
            <div className={flipped ? "flipped" : ""}>
                <img className='front' src={card.src} alt="card front"></img>
                <img className='back' alt="card back" src="/img/earth.jpg" onClick={handleClick}></img>
            </div>
        </div>
    );
}