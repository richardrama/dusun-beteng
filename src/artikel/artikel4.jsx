import React from 'react'
import { Footer, Header, Home, Right } from '../components'
import { ImgArtikel4 } from '../assets/artikel'

const artikel4 = () => {
    return (
        <div className='bg-background md:px-[150px] '>
            <Home />
            <Header />
            <div className='flex my-[20px] justify-between'>
                <div className='md:w-[65%]'>
                    <div className=" shadow-lg bg-[white] p-[20px]  rounded-[10px] text-gray">

                        <h1 className="font-[700] text-[20px] md:text-[28px]">Gotong Royong Membantu Persiapan Hajatan Warga</h1>
                        <div className="">
                            <p className='text-[10px] md:text-[13px]'>Admin Padukuhan - 16 Juli 2023</p>
                        </div>
                        <img src={ImgArtikel4} alt="" className='w-[100%] mt-[10px]' />
                        <div className="text-[11px] md:text-[14px] font-[400] flex flex-col gap-[10px] mt-[20px]">
                            <p>Gotong royong merupakan budaya yang kental dengan masyarakat Indonesia, terutama yang tinggal di daerah pedesaan. Ada banyak contoh bentuk gotong royong bagi masyarakat, mulai dari membantu keperluan tetangga, kerja bakti, atau bahkan untuk membangun fasilitas umum untuk pengembangan wilayah.</p>
                            <p>Gotong royong memiliki arti mengerjakan pekerjaan bersama-sama. Gotong royong memiliki sifat kerakyatan sehingga dapat menyatukan penduduk dari berbagai kelas dan kelompok menjadi satu kesatuan komunitas. Hal tersebut juga dengan dasar bahwa dengan bergotong royong, pekerjaan yang berat bisa selesai lebih cepat. Oleh karena itu, gotong royong perlu untuk dipelajari dan dilestarikan.</p>
                            <p>Pada hari Kamis, (29/6/2023), bertepatan dengan Hari Raya idul Adha 2023,Setelah melakukan proses penyembelihan hewan kurban, sebagian warga membantu persiapan hajatan aqiqah warga lainnya. Kegiatan dilakukan mulai dari membantu penyembelihan kambing, pemotongan daging, dan mengelompokkan bagian-bagian daging kambing.  Menurut warga, kegiatan membantu aqiqah tersebut ditujukan untuk melakukan kewajiban sebagai tetangga dan menjaga silaturahmi antar sesama sehingga terbina kerukunan hidup.</p>
                        </div>
                    </div>

                </div>
                <Right />
            </div>
            <Footer />
        </div>
    )
}

export default artikel4