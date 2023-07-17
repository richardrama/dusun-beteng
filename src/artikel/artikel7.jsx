import React from 'react'
import { Footer, Header, Home, Right } from '../components'
import { ImgArtikel7 } from '../assets/artikel'

const artikel7 = () => {
    return (
        <div className='bg-background md:px-[150px] '>
            <Home />
            <Header />
            <div className='flex my-[20px] justify-between'>
                <div className='md:w-[65%]'>
                    <div className=" shadow-lg bg-[white] p-[20px]  rounded-[10px] text-gray">

                        <h1 className="font-[700] text-[20px] md:text-[28px]">Penerapan Gaya Hidup Sehat Melalui Senam Pagi</h1>
                        <div className="">
                            <p className='text-[10px] md:text-[13px]'>Admin Padukuhan - 16 Juli 2023</p>
                        </div>
                        <img src={ImgArtikel7} alt="" className='w-[100%] mt-[10px]' />
                        <div className="text-[11px] md:text-[14px] font-[400] flex flex-col gap-[10px] mt-[20px]">
                            <p>Banyak cara untuk dapat memiliki tubuh yang sehat dan bugar. Diantara banyaknya cara diet, program olahraga, pergi ke gimnasium, terdapat cara tanpa harus mengeluarkan biaya. Jenis olahaga yang dimaksud adalah senam pagi.</p>
                            <p>Senam pagi merupakan kegiatan yang rutin dilakukan oleh ibu-ibu Padukuhan Beteng pada tiap minggu pagi. Kegiatan dilaksanakan antara pukul 7.00 - 8.00 pagi. Kegiatan olahraga di pagi hari efektif untuk kesehatan karena tubuh masih dalam keadaan segar. Selain itu, matahari baru terbit sehingga tidak memancarkan panas yang terik.</p>
                            <p>Senam pagi dapat membantu membangkitkan energi tubuh, meningkatkan kejelasan mental, dan meningkatkan kondisi fisik.  Kondisi fisik yang kuat akan membantu kelancaran aktivitas sehari-hari. Selain itu, senam pagi memiliki sejumlah manfaat lain seperti membantu memperkuat otot, meningkatkan fleksibilitas, memperbaiki postur tubuh, dan meningkatkan koordinasi dan keseimbangan, Mengurangi stres dan meningkatkan suasana hati. </p>
                        </div>
                    </div>

                </div>
                <Right />
            </div>
            <Footer />
        </div>
    )
}

export default artikel7