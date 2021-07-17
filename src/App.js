import React from 'react'
import './App.scss'
import ContactForm from './Components/ContactForm/ContactForm'

function App() {
  return (
    <div className="App">
      {/* <SocialFollow /> */}
      {/* <Navbar /> */}
      {/* <NavbarTwo /> */}
      {/* <ButtonThree /> */}
      {/* <ButtonFour   /> */}
      {/* <RandomPresidents /> */}
      {/* <ColorChanger */}
      {/* text='hello' */}
      {/* /> */}
      {/* <MessageSender /> */}

      {/* <ProjectButton
            heading="view on codepen"
            variant="primary"
            src="https://codepen.io/slavi-svec/full/ZEQvJjY"
          /> */}

      {/* <ProjectCard
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
       />  */}
      {/* <ReactGrid /> */}
      <ContactForm />
    </div>
  )
}

export default App
