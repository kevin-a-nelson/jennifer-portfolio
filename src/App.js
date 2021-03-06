import React, { useState } from 'react';
import MyNavBar from './Components/MyNavbar'
import LandingPage from './Components/LandingPage'
import About from './Components/About'
import FixedBackground from './Components/FixedBackground'
import Videos from './Components/Videos'
import Images from './Components/Images'
import Contact from './Components/Contact'
import MyModal from './Components/Modal'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.scss'

function App() {
  const [modalIsOpen,setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
    console.log("Hello World");
  }

  function closeModal(){
    setIsOpen(false);
  }

  return (
    <div id="the-app"className="App">
      <MyNavBar />
      <LandingPage />
      <About />
      <FixedBackground 
        url="https://scontent-msp1-1.xx.fbcdn.net/v/t1.0-9/17264908_10155169740914082_6620517161052996829_n.jpg?_nc_cat=100&_nc_ohc=W3xhbeHJZqwAQlvepvl-0WHm8_kcptwRMFMjR-zVAOM2jEyfCztjVO-Lg&_nc_ht=scontent-msp1-1.xx&oh=c02de1ef62b9e8d54f018f7d12f7e0d2&oe=5E826672"
        text="MEDIA"
        color="black"
        />
      <MyModal 
        isOpen={modalIsOpen}
        closeModal={closeModal}
      />
      <Videos />
      <Images
        openModal={openModal}
      />
      <Contact />
    </div>
  );
}

export default App;
