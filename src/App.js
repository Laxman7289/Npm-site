import { BrowserRouter, Route, Routes } from 'react-router-dom'
import React from 'react'
import Details from './component/Details'
import { Header } from "./component/Header"
import { Login } from './component/Login'



export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<>
          <Header />
          <Details />
        </>} />
        <Route path='/login' element={<Login />} />


      </Routes>
    </BrowserRouter>





    // <div>
    //     <Header/>
    //     <Details/>
    //     <Login/>
    // </div>
  )
}


