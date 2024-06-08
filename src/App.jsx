import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Parent from './assets/components/Parent'
import Color from "./assets/components/Color"
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Parent/>}></Route>
        <Route path="/color" element={<Color/>}></Route>
      </Routes>
    </div>
  )
}

export default App
