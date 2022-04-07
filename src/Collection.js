import React from 'react'
import cardBack from './cardBack.png'

function Collection({cardCollection, removeCard, updateDetails, filter, updateFilter}) {

    const checkStringLength = (string) => {
        if (string.length > 15) {
            string = string.substring(0,15) + "..."
            return string
        } else {
            return string
        }
    }

    cardCollection.forEach((card)=> {
        card.shortName = checkStringLength(card.name);
        card.setName = checkStringLength(card.setName);
    })

  return (
    <>
        <div className='titleFilter'>
           <h3>COLLECTION:</h3> 
           <div className='input-group mb-3'>
                    <div className="input-group-prepend right">
                        <label className="input-group-text" htmlFor="inputGroupSelect01">Filter By</label>
                    </div>
                    <select className="custom-select" id="inputGroupSelect01" value={filter} onChange={updateFilter}>
                        <option value="">Any</option>
                        <option value="Creature">Creature</option>
                        <option value="Enchantment">Enchantment</option>
                        <option value="Instant">Instant</option>
                        <option value="Planeswalker">Planeswalker</option>
                        <option value="Sorcery">Sorcery</option>
                    </select>
            </div>
        </div>
        <div className='cards'>
            {cardCollection.map((card, index)=>{
                if (card.imageUrl !== undefined) {
                    return <div key={index} className="card cardCollection">
                        <img src={card.imageUrl} height="311" width="226" alt="mtg card"></img>
                        <span><b>Name:</b> {card.shortName} </span>
                        <span><b>Set:</b> {card.setName} </span>
                        <button className='btn btn-secondary' onClick={() => {updateDetails(card)}}>Details</button>
                        <button className='btn btn-danger' onClick={() => {removeCard(card.id)}}>Remove</button>
                    </div>
                } else {
                    return <div key={index} className="card cardCollection">
                        <img src={cardBack} height="311" width="226" alt="back of mtg card"></img>
                        <span><b>Name:</b> {card.shortName}</span>
                        <span><b>Set:</b> {card.setName}</span>
                        <button className='btn btn-danger' onClick={() => {removeCard(card.id)}}>Remove</button>
                    </div>
                } 
            })}
        </div>
    </>
    
  )
}

export default Collection