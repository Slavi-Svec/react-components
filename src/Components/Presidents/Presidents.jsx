import React, { useState } from 'react';
import './styles.scss'
import Three from '../../Assets/presidents-3.jpg'
import Trump from '../../Assets/america.jpg'
import Putin from '../../Assets/russia.jpg'
import Jinping from '../../Assets/china.jpg'

const Presidents = () => {

const [item, setItem] = useState('select a dictator')
const [image, setImage] = useState(Three)

const setDictator = (name, image) => {
  setItem(name)
  setImage(image)


}

  return (
    <>
      <section className="hello">
        <h1>Who is Your Favourite?</h1>
        <h1>{item}</h1>
        <div className="btns">
          {/* <button className="btn" onClick={() => setImage(Trump) || setItem("'Dirty' Donald")}>Trump</button> */}
          {/* <button className="btn" onClick={() => setDictator(Trump,"'Dirty' Donald")}>Trump</button> */}

          <button className="btn" onClick={() => setImage(Putin) || setItem("'Prietty Boy' Putin")}>Putin</button>
          <button className="btn" onClick={() => setImage(Jinping) || setItem("'Greedy-face' Jinping")}>Jinping</button>
        </div>
        <img src={image} alt='president images'></img>
      </section>
    </>
  )
}

export default Presidents






