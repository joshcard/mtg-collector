import './App.css';
import Header from './Header.js'
import SearchBar from './SearchBar';
import Collection from './Collection';
import Options from './Options';
import Details from './Details';
import { useState } from 'react';

function App() {
  const [cardCollection, setCardCollection] = useState([]);
  const [cardOptions, setCardOptions] = useState([]);
  const [cardDetails, setCardDetails] = useState({});

  const updateCardCollection = (card) => {
    setCardCollection(cardCollection.concat(card))
    setCardOptions([])
  };

  const removeCard = (cardId) => {
    let array = [...cardCollection]; // make a separate copy of the array
    let result = array.filter((card) => card.id !== cardId)
    setCardCollection(result)
  };

  const updateDetails = (card) => {
    console.log(card)
    setCardDetails(card);
  }

  const updateCardOptions = (options) => {
    fetch(`https://api.magicthegathering.io/v1/cards?name=${options}`)
      .then(response => response.json())
      .then(json => {
        setCardOptions(json.cards)
      });
  };

  return (
    <>
      <Header/>
      <SearchBar updateCardOptions={updateCardOptions}/>
      <Collection 
        cardCollection={cardCollection} 
        updateDetails={updateDetails}
        removeCard={removeCard}
      />
      {cardOptions.length > 0 ? 
        <Options 
          cardOptions={cardOptions} 
          updateCardCollection={updateCardCollection} 
          updateCardOptions={updateCardOptions}
        /> 
        : null}
      {cardDetails !== undefined && cardDetails.id !== undefined ? 
        <Details 
          cardDetails={cardDetails}
          updateDetails={updateDetails}
        />
      : null}
        
    </>
    
  );
}

export default App;
