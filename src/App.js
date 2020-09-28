import React from 'react'
import SocialFollow from './Components/SocialFollow/SocialFollow'
import Navbar from './Components/Navbar/Navbar'
import './App.scss'
import ButtonTwo from './Components/ButtonTwo/ButtonTwo'
import ButtonThree from './Components/ButtonThree/ButtonThree'
import Counter from './Components/Counter/Counter'

function App() {
  return (
    <div className="App">
      <SocialFollow />
      <Navbar />
      <ButtonTwo
      text="press"
      alert="hello world"
      />
      <ButtonThree />
      <Counter />
    </div>
  )
}

export default App