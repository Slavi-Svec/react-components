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

function App() {
  return (
    <div className="App">
      {/* <SocialFollow /> */}
      {/* <Navbar /> */}
      <NavbarTwo />
      <ProjectButton
            heading="view on codepen"
            variant="primary"
            src={"https://codepen.io/slavi-svec/full/ZEQvJjY"}
          />

      <ProjectCard
        className="App__ProjectCard"
        src={ProjectOneL}
        title="weather app"
        description="this simple weather app displays the current weather as well as a 5 day forecast. Using react and
                      sass as well as accessing the json data from the open weather maps database."
       />
       <ProjectCard
        className="App__ProjectCard"
        src={ProjectOneL}
        title="weather app"
        description="this simple weather app displays the current weather as well as a 5 day forecast. Using react and
                      sass as well as accessing the json data from the open weather maps database."
       />
    </div>
  )
}

export default App