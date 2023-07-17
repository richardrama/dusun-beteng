import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { home } from '../assets'

const header = () => {
    return (
        <div className='flex justify-between items-center bg-darkBlue'>
            <div className="w-[100%] flex flex-col items-center md:flex-row">
                <ul className='hidden md:flex flex-col md:flex-row font-[500] text-[14px] text-[white] w-[100%]'>
                    <li className='py-[10px] md:py-[0px] cursor-pointer grid place-items-center border-y-[1px] border-background md:border-none md:flex hover:bg-blue px-[20px] grid place-items-center'><Link to={`/`}><img src={home} alt="" className='w-[25px]' /></Link></li>
                    <li className='cursor-pointer grid place-items-center border-b-[1px] border-background md:border-none md:flex hover:text-darkBlue hover:bg-blue py-[12px] px-[30px]'><Link to={`/profil-padukuhan`}>Profil</Link></li>
                    <li className='cursor-pointer grid place-items-center border-b-[1px] border-background md:border-none md:flex hover:text-darkBlue hover:bg-blue py-[12px] px-[30px] '><Link to={`/struktur-pemerintahan`}>Struktur Pemerintahan</Link></li>
                    <li className='cursor-pointer grid place-items-center border-b-[1px] border-background md:border-none md:flex hover:text-darkBlue hover:bg-blue py-[12px] px-[30px] '><Link to={`/artikel-berita`}>Artikel Berita</Link></li>
                    <li className='cursor-pointer grid place-items-center border-b-[1px] border-background md:border-none md:flex hover:text-darkBlue hover:bg-blue py-[12px] px-[30px] '><Link to={`/galeri-kegiatan`}>Galeri Kegiatan</Link></li>
                    <li className='dropDown grid place-items-center border-b-[1px] border-background md:border-none md:flex relative hover:text-darkBlue hover:bg-blue py-[12px] px-[30px] '>
                        Informasi
                        <div className="dropMenu">
                            <div className="absolute w-[100%] top-[100%] left-0 z-[100]">
                                <Link to={`/kontak-padukuhan`}><p className='bg-darkBlue text-[white] hover:text-darkBlue hover:bg-blue py-[12px] px-[30px] w-[150%]'>Kontak</p></Link>
                                <p className='bg-darkBlue text-[white] hover:text-darkBlue hover:bg-blue py-[12px] px-[30px] w-[150%]'>Peta Kemiringan</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default header