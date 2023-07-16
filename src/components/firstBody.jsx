import React from 'react'
import { background, calendar, filter, person } from '../assets'
import { ImgArtikel1 } from '../assets/artikel'
import { Link } from 'react-router-dom'

const firstBody = () => {
    return (
        <div className=' '>
            <div className="mx-[10px] md:mx-[0px] flex flex-col gap-[10px] md:gap-[20px]">
                <h1 className='md:hidden text-[20px] font-[700] md:mb-[15px] text-darkBlue'>Artikel Terkini</h1>
                <div className="artikel shadow-lg bg-[white] p-[10px] md:p-[20px]  rounded-[10px] text-gray ">
                    <div className="flex gap-[10px]">
                        <img src={ImgArtikel1} alt="" className='w-[30%] md:w-[30%]' />
                        <div className="w-[70%]">
                            <Link to={`/peranakan-kambing-ettawa`}>
                                <h1 className='text-[13px] md:text-[18px] hover:cursor-pointer hover:text-darkBlue font-[700] pb-[10px]'>
                                    Kambing Peranakan Ettawa Sebagai Komoditas Unggulan
                                </h1>
                            </Link>
                            <p className='text-[9px] md:text-[14px] font-[400]'>
                                Sebagian penduduk Padukuhan Beteng memiliki kandang kambing di halaman rumahnya. Kambing yang diternak tersebut merupakan kambing jenis Peranakan Ettawa.
                            </p>
                        </div>
                    </div>
                    <div className="">
                        <ul className='flex mt-[12px] gap-[20px]'>
                            <li className='text-[10px] md:text-[14px] font-[300] flex gap-[5px] items-center'> <img src={calendar} alt="" className='w-[10px] md:w-[15px] text-[#C2E3FC]' />13 Juli 2023</li>
                            <li className='text-[10px] md:text-[14px] font-[300] flex gap-[5px] items-center'><img src={person} alt="" className='w-[10px] md:w-[15px]' />Admin Padukuhan</li>
                            <li className='text-[10px] md:text-[14px] font-[300] flex gap-[5px] items-center'><img src={filter} alt="" className='w-[10px] md:w-[15px]' />Artikel Desa</li>
                        </ul>
                    </div>
                </div>
                <div className="artikel shadow-lg bg-[white] p-[20px]  rounded-[10px] text-gray">
                    <div className="flex gap-[10px]">
                        <img src={background} alt="" className='w-[30%]' />
                        <div className="">
                            <h1 className='text-[18px] hover:cursor-pointer hover:text-darkBlue font-[700] pb-[10px]'>
                                Lorem ipsum dolor sit amet.
                            </h1>
                            <p className='text-[14px] font-[400]'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita accusantium eaque ratione quia doloremque enim sapiente. Quibusdam consequatur non neque.
                            </p>
                        </div>
                    </div>
                    <div className="">
                        <ul className='flex mt-[12px] gap-[20px]'>
                            <li className='text-[14px] font-[300] flex gap-[5px] items-center'> <img src={calendar} alt="" className='w-[15px] text-[#C2E3FC]' />07 Juli 2023</li>
                            <li className='text-[14px] font-[300] flex gap-[5px] items-center'><img src={person} alt="" className='w-[15px]' />Admin Padukuhan</li>
                            <li className='text-[14px] font-[300] flex gap-[5px] items-center'><img src={filter} alt="" className='w-[15px]' />Artikel Desa</li>
                        </ul>
                    </div>
                </div>
                <div className="artikel shadow-lg bg-[white] p-[20px]  rounded-[10px] text-gray">
                    <div className="flex gap-[10px]">
                        <img src={background} alt="" className='w-[30%]' />
                        <div className="">
                            <h1 className='text-[18px] hover:cursor-pointer hover:text-darkBlue font-[700] pb-[10px]'>
                                Lorem ipsum dolor sit amet.
                            </h1>
                            <p className='text-[14px] font-[400]'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita accusantium eaque ratione quia doloremque enim sapiente. Quibusdam consequatur non neque.
                            </p>
                        </div>
                    </div>
                    <div className="">
                        <ul className='flex mt-[12px] gap-[20px]'>
                            <li className='text-[14px] font-[300] flex gap-[5px] items-center'> <img src={calendar} alt="" className='w-[15px] text-[#C2E3FC]' />07 Juli 2023</li>
                            <li className='text-[14px] font-[300] flex gap-[5px] items-center'><img src={person} alt="" className='w-[15px]' />Admin Padukuhan</li>
                            <li className='text-[14px] font-[300] flex gap-[5px] items-center'><img src={filter} alt="" className='w-[15px]' />Artikel Desa</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default firstBody