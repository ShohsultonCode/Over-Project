import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Error from './pages/error'
import Navbar from './components/Navbar'
import Loading from './components/Loading'
import Home from './pages/home'
import Login from './pages/auth/login'
import Register from './pages/auth/register'
import MyAccount from './pages/User/myaccount'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/loading' element={<Loading />} />
        <Route path='/my-account' element={<MyAccount />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </>
  )
}
export default App
