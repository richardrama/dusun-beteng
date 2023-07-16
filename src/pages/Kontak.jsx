import React from 'react'
import { Footer, Header, Home, Right } from '../components'

const Kontak = () => {
    return (
        <div className='bg-background px-[150px] '>
            <Home />
            <Header />
            <div className='flex my-[20px] justify-between'>
                <div className='w-[65%]'>
                    <h1 className='text-[20px] font-[700] mb-[15px] text-darkBlue'>Informasi Kontak Dukuh</h1>
                </div>
                <Right />
            </div>
            <Footer />
        </div>
    )
}

export default Kontak