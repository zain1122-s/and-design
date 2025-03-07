import { useState } from 'react'
import {  Routes , Route} from 'react-router'
import HomePage from './container/homePage'
import Profile from './container/profile/Profile'

function App() {


  return (
  <>
     <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Profile/:id" element={<Profile />} />
      </Routes>
  </>

  )
};

export default App
