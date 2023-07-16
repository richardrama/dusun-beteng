import React from 'react'
import { Footer, Header, Home, Left, Right } from './components'


function App() {

  return (
    <div className='bg-background px-[150px] '>
      <Home />
      <Header />
      <div className='flex my-[20px] justify-between'>
        <Left />
        <Right />
      </div>
      <Footer />
    </div>
  )
}

export default App
