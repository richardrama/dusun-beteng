import React from 'react'
import { camera, map, pin, socmed, video, youtube } from '../assets'

const secondBody = () => {
    return (
        <div className='w-[33%] hidden md:flex flex-col gap-[20px] '>
            <div className="drop-shadow-lg">
                <div className="py-[10px] px-[15px] text-darkBlue bg-lightBlue  rounded-t-[8px] flex gap-[10px] items-center">
                    <img src={pin} alt="" className='w-[25px]' />
                    <h1 className='text-[18px] font-[700]'>Peta Wilayah Padukuhan</h1>
                </div>
                <div className="p-[15px] bg-[white]">
                    <img src={map} alt="" />
                </div>
            </div>
            <div className="drop-shadow-lg">
                <div className="py-[10px] px-[15px] text-darkBlue bg-lightBlue  rounded-t-[8px] flex gap-[10px] items-center">
                    <img src={camera} alt="" className='w-[25px]' />
                    <h1 className='text-[18px] font-[700]'>Galeri Kegiatan</h1>
                </div>
            </div>
            <div className="drop-shadow-lg">
                <div className="py-[10px] px-[15px] text-darkBlue bg-lightBlue  rounded-t-[8px] flex gap-[10px] items-center">
                    <img src={video} alt="" className='w-[25px]' />
                    <h1 className='text-[18px] font-[700]'>Profil Padukuhan</h1>
                </div>
            </div>
            <div className="drop-shadow-lg">
                <div className="py-[10px] px-[15px] text-darkBlue bg-lightBlue  rounded-t-[8px] flex gap-[10px] items-center">
                    <img src={socmed} alt="" className='w-[25px]' />
                    <h1 className='text-[18px] font-[700]'>Social Media</h1>
                </div>
                <div className="bg-[white] px-[20px] py-[8px]">
                    <a href="https://youtube.com" target='_blank'>
                        <img src={youtube} alt="" className='w-[50px]' />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default secondBody