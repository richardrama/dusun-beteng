import React from 'react'
import { Link } from 'react-router-dom'

const header = () => {
    return (
        <div className='flex justify-between items-center bg-darkBlue'>
            <div className="">
                <ul className='flex font-[400] text-[14px] text-[white]'>
                    <li className='cursor-pointer hover:bg-blue py-[12px] px-[30px]'><Link to={`/`}>Profil</Link></li>
                    <li className='cursor-pointer hover:bg-blue py-[12px] px-[30px] '><Link to={`/struktur-pemerintahan`}>Struktur Pemerintahan</Link></li>
                    <li className='cursor-pointer hover:bg-blue py-[12px] px-[30px] '><Link to={`/artikel-berita`}>Artikel Berita</Link></li>
                    <li className='cursor-pointer hover:bg-blue py-[12px] px-[30px] '><Link to={`/galeri-kegiatan`}>Galeri Kegiatan</Link></li>
                    <li className='cursor-pointer hover:bg-blue py-[12px] px-[30px] '><Link to={`/kontak-warga`}>Kontak</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default header