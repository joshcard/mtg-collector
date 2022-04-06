import React from 'react'
import { useState } from 'react'

function SearchBar({updateCardOptions, setCardInput}) {
    const [inputValue, setInputValue] = useState("")

    const handleChange = (e) => {
        setInputValue(e.target.value)
    }

  return (
    <>
        <label>
            Card Name:
            <input type="text" value={inputValue} onChange={handleChange}></input>
        </label>
        
        <button className='btn btn-primary' onClick={() => updateCardOptions(inputValue)}>Search</button>
    </>
    
  )
}

export default SearchBar