import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import Newsbar from './Components/Newsbar'

function App() {
  const [category,setCategory]=useState("general");
  return (
    <>
      <Navbar logo="News App" setCategory={setCategory}></Navbar>
      <Newsbar category={category}></Newsbar>
    </>
  )
}

export default App
