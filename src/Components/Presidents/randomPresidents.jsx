import React, { useState } from 'react';

const presidents = ['clinton', 'Obama', 'Bush', 'Ford', 'Trump']
const getRandom = (arr) => arr[Math.floor(Math.random() * arr.length)]

const RandomPresidents = () => {
  const [president, setPresident] = useState('Nixon')

  return (
    <>
      <button onClick={() => setPresident(getRandom(presidents))}>press</button>
      <h1>{president}</h1>
    </>
  )
}

export default RandomPresidents


