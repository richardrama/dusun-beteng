import React from 'react'
import { background } from '../assets'

const home = () => {
    return (
        <div className='h-[50vh]'>
            <div alt="" className='h-[50vh] text-white grid place-items-center'
                style={{
                    height: '50vh',
                    width: 'full',
                    background: `linear-gradient(rgba(0,0,0,.8), rgba(0,0,0,.7)), url(${background})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',

                }}>
                <div className='flex flex-col items-center text-[white]'>
                    <h1 className='text-[20px] font-[700]'>SELAMAT DATANG DI</h1>
                    <h1 className='text-[50px] font-[700] mt-[-10px]'>Dukuh Beteng</h1>
                    <p className='text-[17px] font-[300] mt-[-5px]'>Kel. Jatimulyo, Kec. Girimulyo, Kab. Kulon Progo, Prov. DI Yogyakarta</p>
                </div>
            </div>
        </div>
    )
}

export default home