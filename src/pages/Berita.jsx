import React from 'react'
import { Footer, Header, Home, Left, Right } from '../components'

const Berita = () => {
    return (
        <div className='bg-background md:px-[150px] '>
            <Home />
            <Header />
            <div className='flex my-[20px] justify-between'>
                <div className="md:w-[65%]">
                    <h1 className='hidden md:block text-[20px] font-[700] mb-[15px] text-darkBlue'>Artikel Terkini</h1>
                    <Left />
                </div>
                <Right />
            </div>
            <Footer />
        </div>
    )
}

export default Berita