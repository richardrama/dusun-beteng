import React from 'react'
import { Footer, Header, Home, Right } from '../components'

const Galeri = () => {
    return (
        <div className='bg-background md:px-[150px] '>
            <Home />
            <Header />
            <div className='flex my-[20px] justify-between'>
                <div className='md:w-[65%] px-[10px] md:px-[0px]'>
                    <h1 className='text-[20px] font-[700] mb-[15px] text-darkBlue'>Galeri Kegiatan</h1>
                </div>
                <Right />
            </div>
            <Footer />
        </div>
    )
}

export default Galeri