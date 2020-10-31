import React, { useState } from 'react';

const App = () => {
  const [filteredArr, setFilter] = useState([])
  const [isTypingInitialized, setTypingState] = useState(false)
  const [strictModeEnabled, setStrictMode] = useState(false)
  const initialVal = [
    'apple',
    'orange',
    'mango',
    'xyz',
    'abc',
    'daf aldf',
    'lkadsfe oieo'
  ];

  let cacheFilter = [];
  const handleInput = (e) => {
    const inputVal = e.target.value;
    setTypingState(true)
    if (!e.target.value) {
      setFilter([])
      return;
    };
    if (strictModeEnabled) {
      cacheFilter = initialVal.filter(val => val.toLowerCase() === e.target.value.toLowerCase())
      setFilter(cacheFilter);
    } else {
      cacheFilter = initialVal.filter(val => val.includes(inputVal))
      setFilter(cacheFilter);
    }
  }
  
  const displaySuggestionList = () => {
    if (!filteredArr.length) {
      if (!isTypingInitialized) return;
      return <p style={{ color: 'red' }}> found nothing! </p>
    }
    return filteredArr.map((val, index) => {
      return (
        <li
          key={index}
          style={{
            color: '#555',
            listStyleType: 'none'
          }}
        >
          {val}
        </li>
      )
    });
  }

  console.log('arr length', filteredArr.length)
    return (
      <div style={{ width: 300,  padding: 20 }}>
        <button
          onClick={() => strictModeEnabled ? setStrictMode(false) : setStrictMode(true)}
          style={{
            backgroundColor: strictModeEnabled ? 'red' : '#fff',
            color: strictModeEnabled ? '#fff' : '#000',
            marginBottom: 20,
            padding: 8
          }}
        > {strictModeEnabled ? 'strict mode enabled' : 'enable strict mode' } </button> <br />
        <label> type something </label> <br />
        <input onChange={(e) => handleInput(e)} style={{ width:'100%' }} />
        <div style={{ width: '100%', padding: 4 }}>
         {displaySuggestionList()}
         </div>
      </div>
    )
  }
  
  
export default App;
