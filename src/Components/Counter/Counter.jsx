import React, { useState } from 'react';

const Counter = () =>{
  const [count, setCount] = useState(0)


  const decrementCount = () => {
    setCount (count -1)
  }

  return (
    <>
    <button onCLick={decrementCount}>-</button>
    <span>{count}</span>
    <button>+</button>
    </>
  )
}

export default Counter