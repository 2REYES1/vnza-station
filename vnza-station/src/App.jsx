import { useState } from 'react'

import './App.css'
import LandingPage from './components/LandingPage/LandingPage'
import SongDisplayPage from './components/SongDisplayPage/SongDisplayPage'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>     
      <LandingPage/>  
      <SongDisplayPage/>
    </>
  )
}

export default App
