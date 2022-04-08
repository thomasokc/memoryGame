import { useState } from 'react';
import './App.css';
import SingleCard from './components/SingleCard';

const cardImages = [
  { "src": "/img/cow.jpg" },
  { "src": "/img/giraffe.jpg" },
  { "src": "/img/monkey.jpg" },
  { "src": "/img/polarBear.jpg" },
  { "src": "/img/pug.jpg" },
  { "src": "/img/panda.jpg" }, 
]

function App() {
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)

  // shuffle cards
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
    .sort(() => Math.random() - 0.5)
    .map((card) => ({ ...card, id: Math.random() }))

    setCards(shuffledCards)
    setTurns(0)
  }

  // handle a choice
  const handleChoice = (card) => { //passing this function to the single card component
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)                      
  }                                 

  return (
    <div className="App">
      <h1>Animal Match</h1>
      <button onClick={shuffleCards}>New Game</button>

      <div className="card-grid"> 
        {cards.map(card => (
          <SingleCard key={card.id} card={card} handleChoice={handleChoice}/>
        ))}
      </div>

    </div>
  );
}

export default App;
