import React from 'react'
import { Footer, Header, Home, Right } from '../components'
import { ImgArtikel8 } from '../assets/artikel'


const artikel8 = () => {
    return (
        <div className='bg-background md:px-[150px] '>
            <Home />
            <Header />
            <div className='flex my-[20px] justify-between'>
                <div className='md:w-[65%]'>
                    <div className=" shadow-lg bg-[white] p-[20px]  rounded-[10px] text-gray">

                        <h1 className="font-[700] text-[20px] md:text-[28px]">Penyediaan Perlengkapan Ibadah & Alat Kebersihan Tempat Ibadah</h1>
                        <div className="">
                            <p className='text-[10px] md:text-[13px]'>Admin Padukuhan - 16 Juli 2023</p>
                        </div>
                        <img src={ImgArtikel8} alt="" className='w-[100%] mt-[10px]' />
                        <div className="text-[11px] md:text-[14px] font-[400] flex flex-col gap-[10px] mt-[20px]">
                            <p>Setelah melakukan peninjauan terhadap tempat ibadah yang ada di Padukuhan Beteng, penyediaan perlengkapan ibadan dan alat kebersihan merupakan hal yang perlu untuk dilakukan. Tempat ibadah merupakan tempat yang penting dan krusial bagi warga Beteng. Tempat ibadah digunakan dengan sebagaimana mestinya untuk salat, pengajian, dan TPA untuk anak-anak, sehingga ketersediaan perlengkapan ibadah untuk menunjang kegiatan peribadatan sangat dibutuhkan.</p>
                            <p>Perlengkapan ibadah yang diberikan berupa sarung, mukena, iqro’, dan sajadah. Pemberian tersebut diharapkan dapat dimanfaatkan dengan baik dan dapat membantu dalam menunjang kegiatan peribadatan warga Beteng.</p>
                            <p>Disamping kebutuhan akan perlengkapan ibadah, alat kebersihan juga dibutuhkan untuk mendukung aspek sanitasi tempat ibadah yang ada di Dusun Beteng. Perlengkapan kebersihan yang dibagikan adalah sapu, pel, pengki, sikat kamar mandi, sikat lantai, dan cairan pel yang diserahkan kepada perwakilan dari pengurus tempat ibadah yang ada di Beteng.</p>
                            <p>Tempat ibadah yang bersih dan terjaga kebersihannya mencerminkan rasa hormat dan kecintaan terhadap tempat suci tersebut. Oleh karena itu, alat kebersihan yang memadai sangat diperlukan untuk memenuhi kebutuhan pembersihan dan pemeliharaan kebersihan masjid. Melalui pemenuhan kebutuhan alat kebersihan yang sesuai, tempat ibadah akan tetap terjaga kebersihannya.</p>
                            <p>Perlengkapan ibadah dan alat kebersihan diberikan di empat titik tempat ibadah di Beteng.</p>
                        </div>
                    </div>

                </div>
                <Right />
            </div>
            <Footer />
        </div>
    )
}

export default artikel8