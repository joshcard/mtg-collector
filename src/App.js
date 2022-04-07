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
  const [filteredCards, setFilteredCards] = useState([]);
  const [filter, setFilter] = useState("");

  const updateFilter = (e) => {
    setFilter(e.target.value);
    updateFilteredCards(e.target.value);
  }

  const updateFilteredCards = (word) => {
    let newFilteredCards = cardCollection.filter(card => card.types.includes(word))
    setFilteredCards(newFilteredCards)
  };

  const updateCardCollection = (card) => {
    setCardCollection(cardCollection.concat(card))
    setCardOptions([])
  };

  const removeCard = (cardId) => {
    let array = [...cardCollection]; 
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
    <div className='mainContainer'>
      <div className='header'>
        <Header/>
      </div>
      <div className='search'>
        <SearchBar updateCardOptions={updateCardOptions}/>
      </div>
      <div className='collection'>
        {filter !== "" ? 
          <Collection 
            updateFilter = {updateFilter}
            filter = {filter}
            cardCollection={filteredCards} 
            updateDetails={updateDetails}
            removeCard={removeCard}
          /> : 
          <Collection 
            updateFilter = {updateFilter}
            filter = {filter}
            cardCollection={cardCollection} 
            updateDetails={updateDetails}
            removeCard={removeCard}
          />
        }
        
      </div>
      <div className='footer'>
        <center>
          <span>Created by</span><br/>
          <span>Joshua Card</span>
        </center>
      </div>
      
      
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
        
    </div>
    
  );
}

export default App;
