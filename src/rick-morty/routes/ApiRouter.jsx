import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Navbar } from '../../UI/components/Navbar'
import { CharacterPage } from '../pages/CharacterPage'
import { Episode } from '../pages/Episode'
import { Home } from '../pages/Home'

export const ApiRouter = () => {
  return (
    <>
        <Navbar/>
        <Routes>
            <Route path='/' element = {<Home/>}/>
            <Route path='/episode' element = {<Episode/>}/>
            <Route path='/locations' element = {<Location/>}/>
            <Route path='/character/:id' element ={<CharacterPage/>}/>

            <Route path="/" element={<Navigate to = '/'/>} /> 
        </Routes>
        
        
    </>
  )
}
