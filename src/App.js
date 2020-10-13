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
import ProjectCard from './Components/ProjectCard/ProjectsCard'
import ProjectOneL from './Assets/projectoneL.png'
import ProjectButton from './Components/ProjectCard/ProjectButton/ProjectButton'
import Simpsons from './Assets/simpsons-app.png'
import Laptop from './Assets/laptop.png'
import LaptopTwo from './Assets/laptop-phone-template.png'
import ButtonFour from './Components/ButtonThree/ButtonFour'
import RandomPresidents from './Components/Presidents/randomPresidents'
import ColorChanger from './Components/Presidents/ColorChanger'

function App() {
  return (
    <div className="App">
      {/* <SocialFollow /> */}
      {/* <Navbar /> */}
      {/* <NavbarTwo /> */}
      {/* <ButtonThree /> */}
      {/* <ButtonFour   /> */}
      <RandomPresidents />
      <ColorChanger />

      {/* <ProjectButton
            heading="view on codepen"
            variant="primary"
            src="https://codepen.io/slavi-svec/full/ZEQvJjY"
          /> */}
{/*
      <ProjectCard
        variant="primary"
        src={LaptopTwo}
        title="weather app"
        description="A simple weather app that displays the current weather and 5 day forecast. Using React and
                     SASS. The updated datais are accessed from open weather maps api."
       />
       <ProjectCard
        variant="secondary"
        src={Laptop}
        title="Simpsons Quote Generator"
        description="This app calls an api request to return random
                    simpons quotes and images upon pressing a button, in additon quotes can be posted to twitter."
       /> */}
    </div>
  )
}

export default App