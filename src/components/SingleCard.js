import './SingleCard.css'

export default function SingleCard({card}) {
    return (
        <div className="card">
            <div>
                <img className='front' src={card.src} alt="card front"></img>
                <img className='back' alt="card back" src="/img/earth.jpg"></img>
            </div>
        </div>
    );
}