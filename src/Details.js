import React from 'react'
// import cardBack from './cardBack.png'
import './styles.css'
import { useEffect, useRef } from 'react';

function Options({cardDetails, updateDetails}) {

  const useOutsideAlerter = (ref) => {
      useEffect(() => {
        function handleClickOutside(event) {
          if (ref.current && !ref.current.contains(event.target)) {
            updateDetails();
          }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
      }, [ref]);
    }
  
  const optionsRef = useRef(null);
  useOutsideAlerter(optionsRef);

  const legalitiesParcer = (legalities) => {
    let legalitiesArr = []
    legalities.forEach(legality => {
      legalitiesArr.push(legality.format + ": " + legality.legality)
    })

    return legalitiesArr
  }

  cardDetails.legalitiesParced = legalitiesParcer(cardDetails.legalities)

  if (cardDetails.flavor === undefined) {
    cardDetails.flavor = "N/A"
  }

  return (
    <>
        <div ref={optionsRef} className='shadow-lg p-3 mb-5 bg-white rounded border border-secondary cards tryingDetails'>
            <div className='image'>
                <center><img src={cardDetails.imageUrl} height="404" width="293" alt="mtg card"></img></center>
            </div>
            <div className='info'>
                <p><b>Name: </b>{cardDetails.name}</p>
                <p><b>Set: </b>{cardDetails.setName}</p>
                <p><b>Type: </b>{cardDetails.type}</p>
                <p><b>Colors: </b>{cardDetails.colors.join(', ')}</p>
                <p><b>Rarity: </b>{cardDetails.rarity}</p>
                <p><b>Play Text: </b>{cardDetails.text}</p>
                <p><b>Flavor Text: </b>{cardDetails.flavor}</p>
                {/* <p><b>Legalities: </b>{cardDetails.legalitiesParced.join(', \n')}</p>
                {cardDetails.legalitiesParced.forEach(legality => <p>{legality}</p>)} */}
            </div>
        </div>
    </>
    
  )
}

export default Options