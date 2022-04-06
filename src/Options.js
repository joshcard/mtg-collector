import React from 'react'
import cardBack from './cardBack.png'
import './styles.css'
import { useEffect, useRef } from 'react';

function Options({cardOptions, updateCardCollection, updateCardOptions}) {

    const useOutsideAlerter = (ref) => {
        useEffect(() => {
          function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
              updateCardOptions();
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

    const checkStringLength = (string) => {
        if (string.length > 15) {
            string = string.substring(0,15) + "..."
            return string
        } else {
            return string
        }
    }

    cardOptions.forEach((card)=> {
        card.shortName = checkStringLength(card.name);
        card.setName = checkStringLength(card.setName);
    })

  return (
    <>
        <div ref={optionsRef} className='shadow-lg p-3 mb-5 bg-white rounded border border-secondary trying cards'>
            {cardOptions.map((card, index)=>{
                if (card.imageUrl !== undefined) {
                    return <div className='card' key={index}>
                        <img src={card.imageUrl} height="311" width="226" alt="mtg card"></img>
                        <span><b>Name:</b> {card.shortName}</span>
                        <span><b>Set:</b> {card.setName}</span>
                        <button className='btn btn-primary' onClick={() => updateCardCollection(card)}>Add to Collection</button>
                    </div>
                } else  {
                    return <div key={index} className="card">
                        <img src={cardBack} height="311" width="226" alt="back of mtg card"></img>
                        <span><b>Name:</b> {card.shortName}</span>
                        <span><b>Set:</b> {card.setName}</span>
                        <button className='btn btn-primary' onClick={() => updateCardCollection(card)}>Add to Collection</button>
                    </div>
                } 
            })}

        </div>
    </>
    
  )
}

export default Options