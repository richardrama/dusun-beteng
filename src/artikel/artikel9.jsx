import React from 'react'
import { Footer, Header, Home, Right } from '../components'
import { ImgArtikel9 } from '../assets/artikel'

const artikel9 = () => {
    return (
        <div className='bg-background md:px-[150px] '>
            <Home />
            <Header />
            <div className='flex my-[20px] justify-between'>
                <div className='md:w-[65%]'>
                    <div className=" shadow-lg bg-[white] p-[20px]  rounded-[10px] text-gray">

                        <h1 className="font-[700] text-[20px] md:text-[28px]">Taman Pendidikan Al-Quran untuk Anak-Anak Belajar Mengaji</h1>
                        <div className="">
                            <p className='text-[10px] md:text-[13px]'>Admin Padukuhan - 16 Juli 2023</p>
                        </div>
                        <img src={ImgArtikel9} alt="" className='w-[100%] mt-[10px]' />
                        <div className="text-[11px] md:text-[14px] font-[400] flex flex-col gap-[10px] mt-[20px]">
                            <p>Mengajar mengaji di Tempat Pengajian Al-Qur’an (TPA) merupakan tugas yang mulia dan penting dalam menyebarkan pengetahuan agama Islam kepada generasi muda. Sebagai seorang pengajar mengaji di TPA, ada beberapa hal yang perlu diperhatikan untuk memberikan pengajaran yang efektif dan bermakna bagi para santri TPA.</p>
                            <p>Maksud dari mengajar Mengaji di TPA adalah kegiatan yang dilakukan secara bersama-sama dalam mengajarkan Al-Qur’an kepada anak-anak di Padukuhan Beteng adalah anak-anak dapat memahami dan membaca Al-Qur’an dengan baik dan benar.</p>
                            <p>Selain itu, TPA ditujukan untuk memudahkan anak-anak dalam pengenalan dan memahami serta membaca Al-Qur’an dengan baik dan benar. Tindak Lanjut dari kegiatan mengajar mengaji di TPA ini adalah anak-anak yang sudah dapat membaca dengan baik dan benar serta dapat mengajarkannya kembali kepada anak-anak yang belum bisa membaca Al-Qur’an dengan baik.</p>
                            <p>Anak-anak yang mengikuti TPA memiliki sifat antusias ketika kegiatan belajar mengaji dilakukan. Hal tersebut memudahkan kelancaran kegiatan dan suasana belajar mengaji yang menyenangkan sehingga anak-anak tidak merasa bosan.</p>
                        </div>
                    </div>

                </div>
                <Right />
            </div>
            <Footer />
        </div>
    )
}

export default artikel9