import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { home } from '../assets'

const mobileHeader = () => {
    const [isActive, setActive] = useState(false);

    const toggleClass = () => {
        setActive(!isActive);
    };


    return (
        <div className='block md:hidden absolute right-[10px] top-[10px] '>
            <div id='hamburger' className={isActive ? 'open' : null} onClick={toggleClass}>
                <div id='nav-icon1'>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <ul className='hamburgerMenu md:flex flex-col md:flex-row font-[500] text-[10px] text-[white] mt-[5px] z-[9999] '>
                    <li className='text-center w-[100%] bg-darkBlue py-[10px] md:py-[0px] cursor-pointer grid place-items-center border-y-[1px] border-background md:border-none md:flex hover:bg-blue px-[20px] grid place-items-center'><Link to={`/`}><img src={home} alt="" className='w-[25px]' /></Link></li>
                    <li className='text-center w-[100%] bg-darkBlue cursor-pointer grid place-items-center border-b-[1px] border-background md:border-none md:flex hover:text-darkBlue hover:bg-blue py-[12px] px-[30px]'><Link to={`/profil-padukuhan`}>Profil</Link></li>
                    <li className='text-center w-[100%] bg-darkBlue cursor-pointer grid place-items-center border-b-[1px] border-background md:border-none md:flex hover:text-darkBlue hover:bg-blue py-[12px] px-[30px] '><Link to={`/struktur-pemerintahan`}>Struktur Pemerintahan</Link></li>
                    <li className='text-center w-[100%] bg-darkBlue cursor-pointer grid place-items-center border-b-[1px] border-background md:border-none md:flex hover:text-darkBlue hover:bg-blue py-[12px] px-[30px] '><Link to={`/artikel-berita`}>Artikel Berita</Link></li>
                    <li className='text-center w-[100%] bg-darkBlue cursor-pointer grid place-items-center border-b-[1px] border-background md:border-none md:flex hover:text-darkBlue hover:bg-blue py-[12px] px-[30px] '><Link to={`/galeri-kegiatan`}>Galeri Kegiatan</Link></li>
                    <li className='text-center w-[100%] bg-darkBlue cursor-pointer grid place-items-center border-b-[1px] border-background md:border-none md:flex hover:text-darkBlue hover:bg-blue py-[12px] px-[30px] '><Link to={`/galeri-kegiatan`}>Kontak</Link></li>
                    <li className='text-center w-[100%] bg-darkBlue cursor-pointer grid place-items-center border-b-[1px] border-background md:border-none md:flex hover:text-darkBlue hover:bg-blue py-[12px] px-[30px] '><Link to={`/galeri-kegiatan`}>Peta Kemiringan</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default mobileHeader