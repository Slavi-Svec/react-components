import React, { useState } from 'react';

const RandomPresidents = () => {
  const [changeArray, SetChangeArray] = useState('Nixon')

  const getRandom = () => {
    const presidents =  ['clinton', 'Obama', 'Bush', 'Ford', 'Trump']
    const onePresident = presidents[Math.floor(Math.random() * presidents.length)]
    return onePresident
  }

  const getRandomColors = () => {
    const 
  }

  return (
    <>
      <button onClick={() => SetChangeArray(getRandom)}>press</button>
      <h1>{changeArray}</h1>
    </>
  )
}

export default RandomPresidents