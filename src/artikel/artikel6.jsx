import React from 'react'
import { Footer, Header, Home, Right } from '../components'
import { ImgArtikel6 } from '../assets/artikel'

const artikel6 = () => {
    return (
        <div className='bg-background md:px-[150px] '>
            <Home />
            <Header />
            <div className='flex my-[20px] justify-between'>
                <div className='md:w-[65%]'>
                    <div className=" shadow-lg bg-[white] p-[20px]  rounded-[10px] text-gray">

                        <h1 className="font-[700] text-[20px] md:text-[28px]">Penyampaian Sosialisasi Pengembangan UMKM dan Literasi Digital</h1>
                        <div className="">
                            <p className='text-[10px] md:text-[13px]'>Admin Padukuhan - 16 Juli 2023</p>
                        </div>
                        <img src={ImgArtikel6} alt="" className='w-[100%] mt-[10px]' />
                        <div className="text-[11px] md:text-[14px] font-[400] flex flex-col gap-[10px] mt-[20px]">
                            <p>Edukasi UMKM melalui komunitas Facebook telah menjadi salah satu cara yang efektif untuk memberikan dukungan dan pembelajaran kepada para pelaku usaha kecil dan menengah (UMKM). Melalui platform ini, UMKM dapat terhubung dengan komunitas yang lebih besar, berbagi pengetahuan, dan mendapatkan saran dari praktisi dan ahli industri yang berpengalaman. Komunitas Facebook menyediakan ruang untuk pertukaran ide, diskusi, dan kolaborasi antara UMKM.
                            </p>
                            <p>Melalui grup dan halaman yang berfokus pada bisnis, pemilik UMKM dapat berbagi pengalaman mereka, memperoleh tips bisnis, dan mempelajari praktik terbaik dalam berbagai bidang seperti pemasaran, manajemen keuangan, dan strategi penjualan. Edukasi yang diberikan oleh komunitas ini dapat membantu UMKM dalam mengembangkan keterampilan dan pengetahuan mereka untuk menghadapi tantangan bisnis.
                            </p>
                            <p>Selain itu, Facebook juga menjadi tempat bagi UMKM untuk berinteraksi dengan pelanggan potensial dan menjalankan kampanye pemasaran. UMKM dapat memanfaatkan fitur iklan dan promosi yang disediakan oleh platform ini untuk memperluas jangkauan dan visibilitas bisnis mereka. Dengan memanfaatkan komunitas Facebook, UMKM dapat mengembangkan kehadiran online mereka dan meningkatkan kesadaran merek, yang pada gilirannya dapat membantu pertumbuhan bisnis mereka.
                            </p>
                            <p>Secara keseluruhan, edukasi UMKM melalui komunitas Facebook merupakan media yang dapat mengembangkan keterampilan, pengetahuan, dan jaringan mereka. Dengan pendekatan ini, Facebook memberikan kesempatan yang lebih besar bagi UMKM untuk tumbuh dan berhasil dalam dunia bisnis yang kompetitif.</p>
                        </div>
                    </div>

                </div>
                <Right />
            </div>
            <Footer />
        </div>
    )
}

export default artikel6