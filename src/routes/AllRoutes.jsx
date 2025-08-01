import React from 'react'
import { Route, Routes } from 'react-router-dom'
import {Home} from '../pages'
import {Cart} from '../pages'

function AllRoutes() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </>
  )
}

export default AllRoutes