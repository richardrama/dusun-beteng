import React from 'react'
import { background } from '../assets'
import { MobileHeader } from '.'

const home = () => {
    return (
        <div className='h-[50vh]'>
            <div alt="" className='relative h-[35vh] md:h-[50vh] text-white grid place-items-center'
                style={{
                    height: '50vh',
                    width: 'full',
                    background: `linear-gradient(rgba(0,0,0,.8), rgba(0,0,0,.7)), url(${background})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',

                }}>
                <MobileHeader />
                <div className='flex flex-col items-center text-[white] px-[20px] md:px-[0px]'>
                    <h1 className='text-[14px] md:text-[20px] font-[700]'>SELAMAT DATANG DI</h1>
                    <h1 className='text-[24px] md:text-[50px] font-[700] md:mt-[-10px]'>Padukuhan Beteng</h1>
                    <p className='text-[10px] text-center md:text-[17px] font-[300] md:mt-[-5px]'>Kal. Jatimulyo, Kap. Girimulyo, Kab. Kulon Progo, Prov. DI Yogyakarta</p>
                </div>
            </div>
        </div>
    )
}

export default home