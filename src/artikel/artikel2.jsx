import React from 'react'
import { Footer, Header, Home, Right } from '../components'
import { ImgArtikel2 } from '../assets/artikel'

const artikel2 = () => {
    return (
        <div className='bg-background md:px-[150px] '>
            <Home />
            <Header />
            <div className='flex my-[20px] justify-between'>
                <div className='md:w-[65%]'>
                    <div className=" shadow-lg bg-[white] p-[20px]  rounded-[10px] text-gray">

                        <h1 className="font-[700] text-[20px] md:text-[28px]">Pendampingan Pembuatan Sabun Cuci Piring dari  Minyak Jelantah</h1>
                        <div className="">
                            <p className='text-[10px] md:text-[13px]'>Admin Padukuhan - 16 Juli 2023</p>
                        </div>
                        <img src={ImgArtikel2} alt="" className='w-[100%] mt-[10px]' />
                        <div className="text-[11px] md:text-[14px] font-[400] flex flex-col gap-[10px] mt-[20px]">
                            <p>Minyak jelantah merupakan minyak sisa yang biasanya langsung dibuang tanpa diolah kembali, padahal minyak jelantah jika diolah sesuai cara yang benar dapat dijadikan sabun cuci piring.</p>
                            <p>Pada Hari Jumat, (7/7/2023), Masyarakat Padukuhan Beteng mendapatkan pendampingan untuk mengolah minyak jelantah menjadi sabun cuci piring, sehingga limbah minyak jelantah tidak sembarangan dibuang dan menghasilkan manfaat rumah tangga.</p>
                            <p>Upaya mengolah kembali minyak jelantah membuat masyarakat dapat mengurangi kemungkinan pencemaran air dan lingkungan. Limbah minyak jelantah akan membentuk lemak yang berkumpul sehingga membentuk suatu lapisan yang dapat menutupi permukaan air hingga menghalangi masuknya sinar matahari dan oksigen. Akibatnya, mikro-organisme dalam perairan akan kekurangan oksigen sehingga bisa membuat siklus kehidupan di lingkungan tersebut akan mati. Yang tadinya ada proses piramida makanan, akan berubah menjadi tidak ada karena ketiadaan oksigen.
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

export default artikel2