import React from 'react'
import { background, calendar, filter, person } from '../assets'
import { ImgArtikel1, ImgArtikel2, ImgArtikel3, ImgArtikel4, ImgArtikel5, ImgArtikel6, ImgArtikel7, ImgArtikel8, ImgArtikel9 } from '../assets/artikel'
import { Link } from 'react-router-dom'

const firstBody = () => {
    return (
        <div className=' '>
            <div className="mx-[10px] md:mx-[0px] flex flex-col gap-[10px] md:gap-[20px]">
                <h1 className='md:hidden text-[20px] font-[700] md:mb-[15px] text-darkBlue'>Artikel Terkini</h1>
                <div className="artikel shadow-lg bg-[white] p-[10px] md:p-[20px]  rounded-[10px] text-gray ">
                    <div className="flex gap-[10px]">
                        <img src={ImgArtikel1} alt="" className='w-[30%] md:w-[30%]' />
                        <div className="w-[70%] md:h-[130px]">
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
                            <li className='text-[10px] md:text-[14px] font-[300] flex gap-[5px] items-center'> <img src={calendar} alt="" className='w-[10px] md:w-[15px] text-[#C2E3FC]' />16 Juli 2023</li>
                            <li className='text-[10px] md:text-[14px] font-[300] flex gap-[5px] items-center'><img src={person} alt="" className='w-[10px] md:w-[15px]' />Admin Padukuhan</li>
                            <li className='text-[10px] md:text-[14px] font-[300] flex gap-[5px] items-center'><img src={filter} alt="" className='w-[10px] md:w-[15px]' />Artikel Desa</li>
                        </ul>
                    </div>
                </div>
                <div className="artikel shadow-lg bg-[white] p-[10px] md:p-[20px]  rounded-[10px] text-gray ">
                    <div className="flex gap-[10px]">
                        <img src={ImgArtikel2} alt="" className='w-[30%] md:w-[30%]' />
                        <div className="w-[70%] md:h-[130px]">
                            <Link to={`/pembuatan-sabun-cuci-piring-dari-minyak-jelantah`}>
                                <h1 className='text-[13px] md:text-[18px] hover:cursor-pointer hover:text-darkBlue font-[700] pb-[10px]'>
                                    Pendampingan Pembuatan Sabun Cuci Piring dari  Minyak Jelantah
                                </h1>
                            </Link>
                            <p className='text-[9px] md:text-[14px] font-[400]'>
                                Minyak jelantah merupakan minyak sisa yang biasanya langsung dibuang tanpa diolah kembali, padahal minyak jelantah jika diolah sesuai cara yang benar-
                            </p>
                        </div>
                    </div>
                    <div className="">
                        <ul className='flex mt-[12px] gap-[20px]'>
                            <li className='text-[10px] md:text-[14px] font-[300] flex gap-[5px] items-center'> <img src={calendar} alt="" className='w-[10px] md:w-[15px] text-[#C2E3FC]' />16 Juli 2023</li>
                            <li className='text-[10px] md:text-[14px] font-[300] flex gap-[5px] items-center'><img src={person} alt="" className='w-[10px] md:w-[15px]' />Admin Padukuhan</li>
                            <li className='text-[10px] md:text-[14px] font-[300] flex gap-[5px] items-center'><img src={filter} alt="" className='w-[10px] md:w-[15px]' />Artikel Desa</li>
                        </ul>
                    </div>
                </div>
                <div className="artikel shadow-lg bg-[white] p-[10px] md:p-[20px]  rounded-[10px] text-gray ">
                    <div className="flex gap-[10px]">
                        <img src={ImgArtikel3} alt="" className='w-[30%] md:w-[30%]' />
                        <div className="w-[70%] md:h-[130px]">
                            <Link to={`/penyerahan-bibit-dan-pakan-lele`}>
                                <h1 className='text-[13px] md:text-[18px] hover:cursor-pointer hover:text-darkBlue font-[700] pb-[10px]'>
                                    Penyerahan Bibit dan Pakan Lele
                                </h1>
                            </Link>
                            <p className='text-[9px] md:text-[14px] font-[400]'>
                                Pada hari Rabu, (28/6/2023) dilakukan penyerahan bibit dan pakan ikan lele kepada tiga kelompok budidaya ikan lele di Padukuhan Beteng.
                            </p>
                        </div>
                    </div>
                    <div className="">
                        <ul className='flex mt-[12px] gap-[20px]'>
                            <li className='text-[10px] md:text-[14px] font-[300] flex gap-[5px] items-center'> <img src={calendar} alt="" className='w-[10px] md:w-[15px] text-[#C2E3FC]' />16 Juli 2023</li>
                            <li className='text-[10px] md:text-[14px] font-[300] flex gap-[5px] items-center'><img src={person} alt="" className='w-[10px] md:w-[15px]' />Admin Padukuhan</li>
                            <li className='text-[10px] md:text-[14px] font-[300] flex gap-[5px] items-center'><img src={filter} alt="" className='w-[10px] md:w-[15px]' />Artikel Desa</li>
                        </ul>
                    </div>
                </div>
                <div className="artikel shadow-lg bg-[white] p-[10px] md:p-[20px]  rounded-[10px] text-gray ">
                    <div className="flex gap-[10px]">
                        <img src={ImgArtikel4} alt="" className='w-[30%] md:w-[30%]' />
                        <div className="w-[70%] md:h-[130px]">
                            <Link to={`/gotong-royong-persiapan-hajatan`}>
                                <h1 className='text-[13px] md:text-[18px] hover:cursor-pointer hover:text-darkBlue font-[700] pb-[10px]'>
                                    Gotong Royong Membantu Persiapan Hajatan Warga
                                </h1>
                            </Link>
                            <p className='text-[9px] md:text-[14px] font-[400]'>
                                Gotong royong merupakan budaya yang kental dengan masyarakat Indonesia, terutama yang tinggal di daerah pedesaan. Ada banyak contoh-
                            </p>
                        </div>
                    </div>
                    <div className="">
                        <ul className='flex mt-[12px] gap-[20px]'>
                            <li className='text-[10px] md:text-[14px] font-[300] flex gap-[5px] items-center'> <img src={calendar} alt="" className='w-[10px] md:w-[15px] text-[#C2E3FC]' />16 Juli 2023</li>
                            <li className='text-[10px] md:text-[14px] font-[300] flex gap-[5px] items-center'><img src={person} alt="" className='w-[10px] md:w-[15px]' />Admin Padukuhan</li>
                            <li className='text-[10px] md:text-[14px] font-[300] flex gap-[5px] items-center'><img src={filter} alt="" className='w-[10px] md:w-[15px]' />Artikel Desa</li>
                        </ul>
                    </div>
                </div>
                <div className="artikel shadow-lg bg-[white] p-[10px] md:p-[20px]  rounded-[10px] text-gray ">
                    <div className="flex gap-[10px]">
                        <img src={ImgArtikel5} alt="" className='w-[30%] md:w-[30%]' />
                        <div className="w-[70%] md:h-[130px]">
                            <Link to={`/kegiatan-mengajar-dan-edukasi-menabung`}>
                                <h1 className='text-[13px] md:text-[18px] hover:cursor-pointer hover:text-darkBlue font-[700] pb-[10px]'>
                                    Kegiatan Mengajar Anak-Anak Disertai dengan Edukasi Menabung
                                </h1>
                            </Link>
                            <p className='text-[9px] md:text-[14px] font-[400]'>
                                Mengajar matematika kepada anak-anak adalah kegiatan yang penting dalam membantu mereka membangun pemahaman dan keterampilan matematika-
                            </p>
                        </div>
                    </div>
                    <div className="">
                        <ul className='flex mt-[12px] gap-[20px]'>
                            <li className='text-[10px] md:text-[14px] font-[300] flex gap-[5px] items-center'> <img src={calendar} alt="" className='w-[10px] md:w-[15px] text-[#C2E3FC]' />16 Juli 2023</li>
                            <li className='text-[10px] md:text-[14px] font-[300] flex gap-[5px] items-center'><img src={person} alt="" className='w-[10px] md:w-[15px]' />Admin Padukuhan</li>
                            <li className='text-[10px] md:text-[14px] font-[300] flex gap-[5px] items-center'><img src={filter} alt="" className='w-[10px] md:w-[15px]' />Artikel Desa</li>
                        </ul>
                    </div>
                </div>
                <div className="artikel shadow-lg bg-[white] p-[10px] md:p-[20px]  rounded-[10px] text-gray ">
                    <div className="flex gap-[10px]">
                        <img src={ImgArtikel6} alt="" className='w-[30%] md:w-[30%]' />
                        <div className="w-[70%] md:h-[130px]">
                            <Link to={`/sosialisasi-umkm-dan-literasi-digital`}>
                                <h1 className='text-[13px] md:text-[18px] hover:cursor-pointer hover:text-darkBlue font-[700] pb-[10px]'>
                                    Penyampaian Sosialisasi Pengembangan UMKM dan Literasi Digital
                                </h1>
                            </Link>
                            <p className='text-[9px] md:text-[14px] font-[400]'>
                                Edukasi UMKM melalui komunitas Facebook telah menjadi salah satu cara yang efektif untuk memberikan dukungan dan pembelajaran kepada-
                            </p>
                        </div>
                    </div>
                    <div className="">
                        <ul className='flex mt-[12px] gap-[20px]'>
                            <li className='text-[10px] md:text-[14px] font-[300] flex gap-[5px] items-center'> <img src={calendar} alt="" className='w-[10px] md:w-[15px] text-[#C2E3FC]' />16 Juli 2023</li>
                            <li className='text-[10px] md:text-[14px] font-[300] flex gap-[5px] items-center'><img src={person} alt="" className='w-[10px] md:w-[15px]' />Admin Padukuhan</li>
                            <li className='text-[10px] md:text-[14px] font-[300] flex gap-[5px] items-center'><img src={filter} alt="" className='w-[10px] md:w-[15px]' />Artikel Desa</li>
                        </ul>
                    </div>
                </div>
                <div className="artikel shadow-lg bg-[white] p-[10px] md:p-[20px]  rounded-[10px] text-gray ">
                    <div className="flex gap-[10px]">
                        <img src={ImgArtikel7} alt="" className='w-[30%] md:w-[30%]' />
                        <div className="w-[70%] md:h-[130px]">
                            <Link to={`/penerapan-gaya-hidup-sehat`}>
                                <h1 className='text-[13px] md:text-[18px] hover:cursor-pointer hover:text-darkBlue font-[700] pb-[10px]'>
                                    Penerapan Gaya Hidup Sehat Melalui Senam Pagi
                                </h1>
                            </Link>
                            <p className='text-[9px] md:text-[14px] font-[400]'>
                                Banyak cara untuk dapat memiliki tubuh yang sehat dan bugar. Diantara banyaknya cara diet, program olahraga, pergi ke gimnasium, terdapat-
                            </p>
                        </div>
                    </div>
                    <div className="">
                        <ul className='flex mt-[12px] gap-[20px]'>
                            <li className='text-[10px] md:text-[14px] font-[300] flex gap-[5px] items-center'> <img src={calendar} alt="" className='w-[10px] md:w-[15px] text-[#C2E3FC]' />16 Juli 2023</li>
                            <li className='text-[10px] md:text-[14px] font-[300] flex gap-[5px] items-center'><img src={person} alt="" className='w-[10px] md:w-[15px]' />Admin Padukuhan</li>
                            <li className='text-[10px] md:text-[14px] font-[300] flex gap-[5px] items-center'><img src={filter} alt="" className='w-[10px] md:w-[15px]' />Artikel Desa</li>
                        </ul>
                    </div>
                </div>
                <div className="artikel shadow-lg bg-[white] p-[10px] md:p-[20px]  rounded-[10px] text-gray ">
                    <div className="flex gap-[10px]">
                        <img src={ImgArtikel8} alt="" className='w-[30%] md:w-[30%]' />
                        <div className="w-[70%] md:h-[130px]">
                            <Link to={`/penyediaan-perlengkapan-ibadah-dan-alat-kebersihan`}>
                                <h1 className='text-[13px] md:text-[18px] hover:cursor-pointer hover:text-darkBlue font-[700] pb-[10px]'>
                                    Penyediaan Perlengkapan Ibadah & Alat Kebersihan Tempat Ibadah
                                </h1>
                            </Link>
                            <p className='text-[9px] md:text-[14px] font-[400]'>
                                Setelah melakukan peninjauan terhadap tempat ibadah yang ada di Padukuhan Beteng, penyediaan perlengkapan ibadan dan alat kebersihan merupakan-
                            </p>
                        </div>
                    </div>
                    <div className="">
                        <ul className='flex mt-[12px] gap-[20px]'>
                            <li className='text-[10px] md:text-[14px] font-[300] flex gap-[5px] items-center'> <img src={calendar} alt="" className='w-[10px] md:w-[15px] text-[#C2E3FC]' />16 Juli 2023</li>
                            <li className='text-[10px] md:text-[14px] font-[300] flex gap-[5px] items-center'><img src={person} alt="" className='w-[10px] md:w-[15px]' />Admin Padukuhan</li>
                            <li className='text-[10px] md:text-[14px] font-[300] flex gap-[5px] items-center'><img src={filter} alt="" className='w-[10px] md:w-[15px]' />Artikel Desa</li>
                        </ul>
                    </div>
                </div>
                <div className="artikel shadow-lg bg-[white] p-[10px] md:p-[20px]  rounded-[10px] text-gray ">
                    <div className="flex gap-[10px]">
                        <img src={ImgArtikel9} alt="" className='w-[30%] md:w-[30%]' />
                        <div className="w-[70%] md:h-[130px]">
                            <Link to={`/taman-pendidikan-alquran`}>
                                <h1 className='text-[13px] md:text-[18px] hover:cursor-pointer hover:text-darkBlue font-[700] pb-[10px]'>
                                    Taman Pendidikan Al-Quran untuk Anak-Anak Belajar Mengaji
                                </h1>
                            </Link>
                            <p className='text-[9px] md:text-[14px] font-[400]'>
                                Mengajar mengaji di Tempat Pengajian Al-Qur’an (TPA) merupakan tugas yang mulia dan penting dalam menyebarkan pengetahuan agama Islam kepada-
                            </p>
                        </div>
                    </div>
                    <div className="">
                        <ul className='flex mt-[12px] gap-[20px]'>
                            <li className='text-[10px] md:text-[14px] font-[300] flex gap-[5px] items-center'> <img src={calendar} alt="" className='w-[10px] md:w-[15px] text-[#C2E3FC]' />16 Juli 2023</li>
                            <li className='text-[10px] md:text-[14px] font-[300] flex gap-[5px] items-center'><img src={person} alt="" className='w-[10px] md:w-[15px]' />Admin Padukuhan</li>
                            <li className='text-[10px] md:text-[14px] font-[300] flex gap-[5px] items-center'><img src={filter} alt="" className='w-[10px] md:w-[15px]' />Artikel Desa</li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default firstBody