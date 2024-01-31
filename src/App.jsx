import { useState } from 'react'
import './App.scss'
import Navbar from './layout/Navbar';
import MainBody from "./layout/MainBody";
// import LeftCenter from './components/LeftCenter';


function App() {
  return (
    <>
      <Navbar />
      <MainBody/>
      {/* <LeftCenter /> */}
    </>
  )
}

export default App
