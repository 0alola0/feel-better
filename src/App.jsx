import { useState, useEffect } from 'react'
import { Route, Routes, Link, Navigate } from 'react-router-dom'
// import useFetch from './hooks/UseFetch'
import './App.css'
import AdvicePage from './components/AdvicePage'
import DogsPage from './components/DogsPage'
import JokesPage from './components/JokesPage'
import Landing from './components/Landing'
import LoadingScreen from './components/LoadingScreen'
import getData from './hooks/getData'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/advisor' element={<AdvicePage/>}/>
        <Route path='/doggy' element={<DogsPage/>}/>
        <Route path='/joke' element={<JokesPage/>}/>
      </Routes>
    </>
  )
}

export default App
