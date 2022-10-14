import React, { Suspense } from 'react'
import { Routes, Route } from  "react-router-dom";
import { Login, UserDetails, Users } from "./pages";
import './App.scss'
import { Fallback } from './components';


const App:React.FC = () => {



   return (
      <>
         <Suspense fallback={<Fallback/>}>
            <Routes>
               <Route path='/' element={<Login />} />
               <Route path='/users' element={<Users />} />
               <Route path='/user/:id' element={<UserDetails />} />
            </Routes>
         </Suspense>   
      </>
   )
}
export default App
