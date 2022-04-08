import './SingleCard.css'

export default function SingleCard({card, handleChoice}) {

    const handleClick = () => {
        handleChoice(card)
    } 

    return (
        <div className="card">
            <div>
                <img className='front' src={card.src} alt="card front"></img>
                <img className='back' alt="card back" src="/img/earth.jpg" onClick={handleClick}></img>
            </div>
        </div>
    );
}