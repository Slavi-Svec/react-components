import React, { useState } from 'react';

const  ButtonThree = () => {
  const [heading, setHeading] = useState(false)

  return (
    <div>

      <p> {'hello'}</p>
      <button onClick={() => console.log('hi')}>
        Click me
      </button>
    </div>
  );
}

export default ButtonThree