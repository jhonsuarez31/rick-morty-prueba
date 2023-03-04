import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Login } from '../auth/page/Login'
import { CharacterPage } from '../rick-morty/pages/CharacterPage'
import { Episode } from '../rick-morty/pages/Episode'
import { Home } from '../rick-morty/pages/Home'


export const AppRoute = () => {
  return (
    <>
        <Routes>
            <Route path='/auth/login' element = {<Login/>}/>
            <Route path='/' element = {<Home/>}/>
            <Route path='/episode' element = {<Episode/>}/>
            <Route path='/locations' element = {<Location/>}/>
            <Route path='/character/:id' element ={<CharacterPage/>}/>



        </Routes>
    </>
  )
}
