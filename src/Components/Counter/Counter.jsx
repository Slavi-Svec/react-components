import React, { useState } from 'react';

const Counter = () => {
  // const [count, setCount] = useState(0)
  const [count, setCount] = useState(10)

  return (
    <>
      <button onClick={() => setCount(count - 10)}>-</button>
      <span>{count}</span>
      <button onClick={() => setCount(count + 10)}>+</button>
    </>
  )
}

export default Counter