import React from 'react'
import { Footer, Header, Home, Right } from '../components'
import { ImgArtikel3 } from '../assets/artikel'

const artikel3 = () => {
    return (
        <div className='bg-background md:px-[150px] '>
            <Home />
            <Header />
            <div className='flex my-[20px] justify-between'>
                <div className='md:w-[65%]'>
                    <div className=" shadow-lg bg-[white] p-[20px]  rounded-[10px] text-gray">

                        <h1 className="font-[700] text-[20px] md:text-[28px]">Penyerahan Pakan dan Bibit Lele</h1>
                        <div className="">
                            <p className='text-[10px] md:text-[13px]'>Admin Padukuhan - 16 Juli 2023</p>
                        </div>
                        <img src={ImgArtikel3} alt="" className='w-[100%] mt-[10px]' />
                        <div className="text-[11px] md:text-[14px] font-[400] flex flex-col gap-[10px] mt-[20px]">
                            <p>Pada hari Rabu, (28/6/2023) dilakukan penyerahan bibit dan pakan ikan lele kepada tiga kelompok budidaya ikan lele di Padukuhan Beteng.</p>
                            <p>Lele merupakan salah satu jenis ikan yang mudah dipelihara. Karena kemudahannya itu, lele sering dijadikan sebagai hewan ternak untuk dijual maupun konsumsi pribadi. Budidaya ikan lele dijalankan oleh kelompok budidaya ikan lele yang disebut “pokdakan budidaya ikan”, dimana kelompok tersebut bertanggung jawab untuk merawat dan mengelola pembudidayaan ikan dari masa pembibitan hingga panen.</p>
                            <p>Kolamnya sudah terbagi-bagi menurut ukuran ikan, dari ukuran 2 cm sampai 30 cm. Kolam ini sesuai dengan standar pembudidayaan ikan lele yang seharusnya. Lele yang berbeda ukuran tidak boleh dicampur dalam satu kolam karena ikan yang lebih kecil akan dimakan oleh ikan yang lebih besar. Selain untuk mencegah lele besar makan lele yang lebih kecil, pemisahan kolam juga berfungsi untuk memudahkan perawatan kolam dan ikannya sendiri.</p>
                            <p>Untuk pakan lele, jenisnya berbeda sesuai dengan ukurannya masing-masing, dimana ikan lele yang lebih besar pakannya lebih besar pula, begitupun sebaliknya. Untuk urusan jumlah ikan dalam satu kolam, satu kolam dengan ukuran sama dapat terisi ikan lele ukuran besar lebih sedikit daripada dengan lele berukuran kecil.</p>
                        </div>
                    </div>

                </div>
                <Right />
            </div>
            <Footer />
        </div>
    )
}

export default artikel3