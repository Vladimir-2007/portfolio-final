import React from 'react'

import './App.scss'
import { Skills, Work } from './container'
import { Navbar } from './components'

const App = () => {

   return (
      <div className='app'>
         <Navbar />
         <div className='app__items'>
            <Work />
            <Skills />
         </div>
      </div>
   )
}

export default App
