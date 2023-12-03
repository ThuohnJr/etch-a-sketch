import React from 'react'
import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Grid from './components/Grid'
import Color from './components/Color'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)
  const container = document.getElementById("container");



  return (
    <>
    <Header />
    <Color />
    <Grid />
<Footer />
    </>
  )
}

export default App
