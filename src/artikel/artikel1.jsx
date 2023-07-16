import React from 'react'
import { Footer, Header, Home, Right } from '../components'
import { ImgArtikel1 } from '../assets/artikel'

const artikel1 = () => {
    return (
        <div className='bg-background md:px-[150px] '>
            <Home />
            <Header />
            <div className='flex my-[20px] justify-between'>
                <div className='md:w-[65%]'>
                    <div className=" shadow-lg bg-[white] p-[20px]  rounded-[10px] text-gray">

                        <h1 className="font-[700] text-[20px] md:text-[28px]">Kambing Peranakan Ettawa Sebagai Komoditas Unggulan</h1>
                        <div className="">
                            <p className='text-[10px] md:text-[13px]'>Admin Padukuhan - 16 Juli 2023</p>
                        </div>
                        <img src={ImgArtikel1} alt="" className='w-[100%] mt-[10px]' />
                        <div className="text-[11px] md:text-[14px] font-[400] flex flex-col gap-[10px] mt-[20px]">
                            <p>Sebagian penduduk Padukuhan Beteng memiliki kandang kambing di halaman rumahnya. Kambing yang diternak tersebut merupakan kambing jenis Peranakan Ettawa.</p>
                            <p>Kambing Peranakan Ettawa merupakan salah satu plasma nutfah asli Jatimulyo, merupakan komoditas unggulan Kalurahan Jatimulyo dan juga komoditas unggulan ternak di Kabupaten Kulon Progo. Hampir 80% penduduk Kalurahan Jatimulyo memelihara kambing PE dengan rata-rata jumlah kepemilikan 4 ekor / KK. Selain ternak kambing PE bisa dimanfaatkan bibitnya untuk dijual, juga kambing PE betina dapat diperah susunya yang kandungan kadar gizinya lebih baik dari pada susu sapi. </p>
                            <p>Keistimewaan susu kambing apabila dikonsumsi secara teratur dapat untuk mengobati penyakit TBC, asma, Hephatitis B dan dapat meningkatkan vitalitas. Susu kambing PE dapat diolah menjadi produk makanan bergizi antara lain : permen susu (karamel), krupuk susu, tahu susu yogurt dan dapat pula diolah menjadi susu bubuk (skim) dan juga dapat diolah menjadi sabun kecantikan,dll.</p>
                        </div>
                    </div>

                </div>
                <Right />
            </div>
            <Footer />
        </div>
    )
}

export default artikel1