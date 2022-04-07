import React from 'react'
import { useState } from 'react'

function SearchBar({updateCardOptions, setCardInput}) {
    const [inputValue, setInputValue] = useState("")

    const handleChange = (e) => {
        setInputValue(e.target.value)
    }

  return (
    <div className='input-group input'>
        <input type="text" className='form-control rounded' placeholder='Card Name' value={inputValue} onChange={handleChange}></input>
        <button className='btn btn-primary' onClick={() => updateCardOptions(inputValue)}>Search</button>
    </div>
  )
}

export default SearchBar