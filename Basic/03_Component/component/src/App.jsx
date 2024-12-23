import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ClassComponent from './component/ClassComponent'
import FunctionComponent from './component/FunctionComponent'

function App() {
  return (
    <>
      <ClassComponent />
      <hr />
      <FunctionComponent />
    </>
  )
}

export default App
