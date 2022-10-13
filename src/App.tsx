import React from 'react'
import { Routes, Route } from  "react-router-dom";
import { Login, UserDetails, Users } from "./pages";
import './App.scss'


const App:React.FC = () => {



   return (
      <>
      <Routes>
         <Route path='/' element={<Login />} />
         <Route path='/users' element={<Users />} />
         <Route path='/user/:id' element={<UserDetails />} />
      </Routes>
        
        
      </>
   )
}
export default App
