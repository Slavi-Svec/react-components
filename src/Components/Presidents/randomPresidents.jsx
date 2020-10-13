import React, { useState } from 'react';
import RandomColors from './RandomColors'

const presidents = ['clinton', 'Obama', 'Bush', 'Ford', 'Trump']
const getRandom = (arr) => arr[Math.floor(Math.random() * arr.length)]
const colorPallete = '0123456789ABCDER'

const RandomPresidents = () => {
  const [president, setPresident] = useState('Nixon')

  return (
    <>
      <button onClick={() => setPresident(getRandom(presidents))}>press</button>
      <h1>{president}</h1>
      <div>{document.body.style.backgroundColor = RandomColors(colorPallete)}</div>
    </>
  )
}

export default RandomPresidents


