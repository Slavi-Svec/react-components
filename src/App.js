import React from 'react'
import SocialFollow from './Components/SocialFollow/SocialFollow'
import Navbar from './Components/Navbar/Navbar'
import NavbarTwo from './Components/Navbar-2/NavbarTwo'

import './App.scss'
import ButtonTwo from './Components/ButtonTwo/ButtonTwo'
import ButtonThree from './Components/ButtonThree/ButtonThree'
import Counter from './Components/Counter/Counter'
import RenderString from './Components/RenderString/RenderString'
import Posts from './Components/Posts/Posts'
import Presidents from './Components/Presidents/Presidents'

function App() {
  return (
    <div className="App">
      <SocialFollow />
      {/* <Navbar /> */}
      <NavbarTwo />

      {/* <ButtonTwo
      text="press"
      alert="hello world"
      /> */}
      {/* <ButtonThree /> */}
      {/* <Counter /> */}
      {/* <RenderString /> */}
      {/* <Posts /> */}
      <Presidents />
    </div>
  )
}

export default App