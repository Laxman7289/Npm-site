import { BrowserRouter, Route, Routes } from 'react-router-dom'
import React from 'react'
import Details from './component/Details'
import { Header } from "./component/Header"
import { Login } from './component/Login'
import Pro from "./component/Pro"
import Teams from "./component/Teams"
import Pricing from './component/Pricing'
import Documentation from './component/Documentation'


export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<>
          <Header />
          <Details />
        </>} />

        <Route path='/login' element={<Login />} />
        <Route path='Pro' element={<Pro/>}/>
        <Route path='Teams' element={<Teams/>}/>
        <Route path='Pricing' element={<Pricing/>}/>
        <Route path='Documentation' element={<Documentation/>}/>
      </Routes>
    </BrowserRouter>





    // <div>
    //     <Header/>
    //     <Details/>
    //     <Login/>
    // </div>
  )
}


