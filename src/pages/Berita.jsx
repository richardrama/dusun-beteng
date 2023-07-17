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
                    <div className="mx-[10px] md:mx-[0px] text-[12px] md:text-[16px] text-[white] w-[100%] bg-darkBlue shadow-lg rounded-[10px] py-[5px] grid place-items-center mt-[30px]">
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdWT1MLDqPaG51xXDB10CxaQoxopL4BaZZ0ii4Sl-K2qbzPeA/viewform?usp=sf_link" target='_blank'>
                            + Tambahkan Artikel
                        </a>
                    </div>
                </div>
                <Right />
            </div>
            <Footer />
        </div>
    )
}

export default Berita