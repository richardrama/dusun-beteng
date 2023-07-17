import React from 'react'
import { Footer, Header, Home, Right } from '../components'
import { ImgArtikel5 } from '../assets/artikel'

const artikel5 = () => {
    return (
        <div className='bg-background md:px-[150px] '>
            <Home />
            <Header />
            <div className='flex my-[20px] justify-between'>
                <div className='md:w-[65%]'>
                    <div className=" shadow-lg bg-[white] p-[20px]  rounded-[10px] text-gray">

                        <h1 className="font-[700] text-[20px] md:text-[28px]">Kegiatan Mengajar Anak-Anak Disertai dengan Edukasi Menabung</h1>
                        <div className="">
                            <p className='text-[10px] md:text-[13px]'>Admin Padukuhan - 16 Juli 2023</p>
                        </div>
                        <img src={ImgArtikel5} alt="" className='w-[100%] mt-[10px]' />
                        <div className="text-[11px] md:text-[14px] font-[400] flex flex-col gap-[10px] mt-[20px]">
                            <p>Mengajar matematika kepada anak-anak adalah kegiatan yang penting dalam membantu mereka membangun pemahaman dan keterampilan matematika sejak dini. Kegiatan mengajar matematika kepada anak-anak dapat menjadi inisiatif yang sangat berarti dalam memperluas pemahaman dan keterampilan matematika pada anak-anak dilingkungan sekitar. Melalui kegiatan mengajar matematika ini dapat membantu anak-anak memahami konsep-konsep matematika yang mungkin mereka hadapi di sekolah.
                            </p>
                            <p>Kegiatan mengajar matematika kepada anak-anak yang disertai dengan edukasi menabung dapat menjadi kombinasi yang efektif untuk membantu mereka mengembangkan keterampilan matematika sekaligus kesadaran tentang pentingnya pengelolaan keuangan. Kegiatan edukasi menabung sejak dini memberikan pemahaman kepada anak-anak tentang pentingnya menabung untuk mencapai tujuan masa depan.</p>
                            <p>Edukasi menabung juga harus melibatkan pembelajaran tentang manajemen keuangan yang bijaksana. Anak-anak perlu diajarkan untuk membedakan antara kebutuhan dan keinginan serta memprioritaskan menabung sebelum membelanjakan uang untuk hal-hal yang kurang penting.
                            </p>
                        </div>
                    </div>

                </div>
                <Right />
            </div>
            <Footer />
        </div>
    )
}

export default artikel5