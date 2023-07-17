import React from 'react'
import { Footer, Header, Home, Right } from '../components'
import { Lele1, Lele2, Lele3, Lele4 } from '../assets/galeri/budidaya-ikan-lele'
import { Kambing1, Kambing2, Kambing3, Kambing4 } from '../assets/galeri/kambing-peranakan-ettawa'
import { Kegiatan1, Kegiatan10, Kegiatan11, Kegiatan2, Kegiatan3, Kegiatan4, Kegiatan5, Kegiatan6, Kegiatan7, Kegiatan8, Kegiatan9 } from '../assets/galeri/kegiatan-masyarakat'
import { SD1, SD3, SD4, SD5, SD6 } from '../assets/galeri/pengunjungan-sd2'
import { Senam1, Senam2, Senam3, Senam4, Senam5 } from '../assets/galeri/senam-minggu-pagi'
import { Sosialisasi1, Sosialisasi2, Sosialisasi3 } from '../assets/galeri/sosialisasi-kkn'
import { Tpa1, Tpa2, Tpa3, Tpa4, Tpa5, Tpa6 } from '../assets/galeri/tpa'

const Galeri = () => {
    return (
        <div className='bg-background md:px-[150px] '>
            <Home />
            <Header />
            <div className='flex my-[20px] justify-between'>
                <div className='md:w-[65%] px-[10px] md:px-[0px]'>
                    <h1 className='text-[16px] md:text-[20px] font-[700] mb-[5px] text-darkBlue'>Galeri Kegiatan</h1>
                    <div className="galeri">
                        <div className="section">
                            <h1 className='text-[12px] md:text-[16px] font-[500] mb-[10px]'>Budidaya Ikan Lele</h1>
                            <div className="w-[100%] grid grid-cols-2 md:grid-cols-3 gap-[10px]">
                                <img src={Lele1} alt="" />
                                <img src={Lele2} alt="" />
                                <img src={Lele3} alt="" />
                                <img src={Lele4} alt="" />
                            </div>
                        </div>
                        <div className="section">
                            <h1 className='text-[12px] md:text-[16px] font-[500] mt-[10px] mb-[10px]'>Kambing Peranakan Ettawa</h1>
                            <div className="w-[100%] grid grid-cols-2 md:grid-cols-3 gap-[10px]">
                                <img src={Kambing1} alt="" />
                                <img src={Kambing2} alt="" />
                                <img src={Kambing3} alt="" />
                                <img src={Kambing4} alt="" />
                            </div>
                        </div>
                        <div className="section">
                            <h1 className='text-[12px] md:text-[16px] font-[500] mt-[10px] mb-[10px]'>Kegiatan Masyarkat</h1>
                            <div className="w-[100%] grid grid-cols-2 md:grid-cols-3 gap-[10px]">
                                <img src={Kegiatan1} alt="" />
                                <img src={Kegiatan2} alt="" />
                                <img src={Kegiatan3} alt="" />
                                <img src={Kegiatan4} alt="" />
                                <img src={Kegiatan5} alt="" />
                                <img src={Kegiatan6} alt="" />
                                <img src={Kegiatan7} alt="" />
                                <img src={Kegiatan8} alt="" />
                                <img src={Kegiatan9} alt="" />
                                <img src={Kegiatan10} alt="" />
                                <img src={Kegiatan11} alt="" />
                            </div>
                        </div>
                        <div className="section">
                            <h1 className='text-[12px] md:text-[16px] font-[500] mt-[10px] mb-[10px]'>KBM SDN 2 Jonggrangan</h1>
                            <div className="w-[100%] grid grid-cols-2 md:grid-cols-3 gap-[10px]">
                                <img src={SD1} alt="" />
                                <img src={SD3} alt="" />
                                <img src={SD4} alt="" />
                                <img src={SD5} alt="" />
                                <img src={SD6} alt="" />
                            </div>
                        </div>
                        <div className="section">
                            <h1 className='text-[12px] md:text-[16px] font-[500] mt-[10px] mb-[10px]'>Senam Minggu Pagi</h1>
                            <div className="w-[100%] grid grid-cols-2 md:grid-cols-3 gap-[10px]">
                                <img src={Senam1} alt="" />
                                <img src={Senam2} alt="" />
                                <img src={Senam3} alt="" />
                                <img src={Senam4} alt="" />
                                <img src={Senam5} alt="" />
                            </div>
                        </div>
                        <div className="section">
                            <h1 className='text-[12px] md:text-[16px] font-[500] mt-[10px] mb-[10px]'>Sosialisasi KKN</h1>
                            <div className="w-[100%] grid grid-cols-2 md:grid-cols-3 gap-[10px]">
                                <img src={Sosialisasi1} alt="" />
                                <img src={Sosialisasi2} alt="" />
                                <img src={Sosialisasi3} alt="" />
                            </div>
                        </div>
                        <div className="section">
                            <h1 className='text-[12px] md:text-[16px] font-[500] mt-[10px] mb-[10px]'>Taman Pendidikan Al-Quran</h1>
                            <div className="w-[100%] grid grid-cols-2 md:grid-cols-3 gap-[10px]">
                                <img src={Tpa1} alt="" />
                                <img src={Tpa2} alt="" />
                                <img src={Tpa3} alt="" />
                                <img src={Tpa4} alt="" />
                                <img src={Tpa5} alt="" />
                                <img src={Tpa6} alt="" />
                            </div>
                        </div>
                        <div className="text-[12px] md:text-[16px] text-[white] w-[100%] bg-darkBlue shadow-lg rounded-[10px] py-[5px] grid place-items-center mt-[30px]">
                            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdEa1uixjGrFRvd9tKLK5eyKiLICokOUEObUaERjfwa5dX_Yg/viewform?usp=sf_link" target='_blank'>
                                + Tambahkan Gambar ke Galeri
                            </a>
                        </div>
                    </div>
                </div>
                <Right />
            </div>
            <Footer />
        </div>
    )
}

export default Galeri