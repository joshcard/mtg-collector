import './App.css';
import Header from './Header.js'
import SearchBar from './SearchBar';
import Collection from './Collection';
import Options from './Options';
import { useState } from 'react';

function App() {
  const [cardCollection, setCardCollection] = useState([]);
  const [cardOptions, setCardOptions] = useState([]);

  const updateCardCollection = (card) => {
    setCardCollection(cardCollection.concat(card))
    setCardOptions([])
  };

  const updateCardOptions = (options) => {
    // setCardOptions(cards)

    fetch(`https://api.magicthegathering.io/v1/cards?name=${options}`)
      .then(response => response.json())
      .then(json => {
        // json.cards.forEach(card => {
        //   setCardOptions([...cardOptions, card])
        // })
        // for (let i=0; i < json.cards.length; i++) {
        //   // console.log(json.cards[i])
        //   // setCardOptions(json.cards[i])
        // }
        setCardOptions(json.cards)
      });
  };

  


  return (
    <>
      <Header/>
      <SearchBar updateCardOptions={updateCardOptions}/>
      <Collection cardCollection={cardCollection} />
      {cardOptions.length > 0 ? 
        <Options 
          cardOptions={cardOptions} 
          updateCardCollection={updateCardCollection} 
          updateCardOptions={updateCardOptions}
        /> 
        : null}
    </>
    
  );
}

export default App;
