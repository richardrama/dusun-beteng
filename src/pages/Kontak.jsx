import React from 'react'
import { Footer, Header, Home, Right } from '../components'

const Kontak = () => {
    return (
        <div className='bg-background md:px-[150px] '>
            <Home />
            <Header />
            <div className='flex my-[20px] justify-between'>
                <div className='md:w-[65%] px-[10px] md:px-[0px]'>
                    <h1 className='text-[20px] font-[700] mb-[15px] text-darkBlue'>Informasi Kontak Dukuh</h1>
                    <div className="shadow-lg bg-[white] p-[10px] md:p-[20px]  rounded-[10px] text-gray ">
                        <h1 className='text-[13px] md:text-[20px] font-[700]'>Kepala dukuh</h1>
                        <p className='text-[11px] md:text-[16px] font-[700]'>Bapak Ngadi</p>
                        <p className='text-[11px] md:text-[16px]'>No. Telp. +62 811-2644-291</p>
                    </div>
                </div>
                <Right />
            </div>
            <Footer />
        </div>
    )
}

export default Kontak