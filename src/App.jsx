import { useState } from 'react'
import {  Routes , Route} from 'react-router'
import HomePage from './container/homePage'

function App() {


  return (
  <>
     <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
  </>

  )
};

export default App
