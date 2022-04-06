import React from 'react'
import cardBack from './cardBack.png'

function Collection({cardCollection}) {

  return (
    <>
        <p>COLLECTION:</p>
        <div className='cards'>
            {cardCollection.map((card, index)=>{
                if (card.imageUrl !== undefined) {
                    return <div key={index} className="card">
                        <img src={card.imageUrl} alt="mtg card"></img>
                        <span><b>Name:</b> {card.name}</span>
                        <span><b>Set:</b> {card.setName}</span>
                    </div>
                } else {
                    return <div key={index} className="card">
                        <img src={cardBack} height="311" width="226" alt="back of mtg card"></img>
                        <span><b>Name:</b> {card.name}</span>
                        <span><b>Set:</b> {card.setName}</span>
                    </div>
                }
            })}
        </div>
    </>
    
  )
}

export default Collection