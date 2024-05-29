import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddNumber from './components/AddNumber'
import { Routes, Route } from 'react-router-dom'
import BaseLayout from './components/BaseLayout/BaseLayout'
import Home from './components/AddNumber'
import DataTabble from './components/DataTabble/DataTabble'
import ErrorPage from './components/ErrorPage/ErrorPage'

function App() {

  return (
    <>
    <Routes>
      <Route element={<BaseLayout/>}>
        <Route path='/' element={<DataTabble/>}/>
        <Route path='/AddNumber' element={<AddNumber/>}/>
        <Route path='/ErrorPage' element={<ErrorPage/>}/>

      </Route>
    </Routes>
    </>
  )
}

export default App
