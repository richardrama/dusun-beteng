import React from 'react'
import { youtube } from '../assets'

const footer = () => {
    return (
        <div className='flex items-center justify-between bg-[#36454f] px-[30px] py-[20px]'>
            <div className="flex flex-col gap-[5px]">
                <div className="text-[14px] text-[white]">Copyright © 2023 - Padukuhan Beteng</div>
                <h1 className='text-[10px] text-[white]'>by <a href="https://instagram.com/kkn.064.kp" target='_blank' className='transition hover:border-b-[1px] pb-[1px]'>KKN AB.79.064.KP UPN "Veteran" Yogyakarta</a> </h1>
            </div>
            <div className="">
                <ul>
                    <li><a href="https://youtube.com" target='_blank'><img src={youtube} alt="" className='w-[30px]' /></a></li>
                    <li><a href=""></a></li>
                </ul>
            </div>
        </div>
    )
}

export default footer