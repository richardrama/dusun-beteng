import React from 'react'
import { Footer, Header, Home, Right } from '../components'

const profilePadukuhan = () => {
    return (
        <div className='bg-background md:px-[150px] '>
            <Home />
            <Header />
            <div className='flex my-[10px] mx-[10px] md:mx-[0px] md:my-[20px] justify-between'>
                <div className='md:w-[65%]'>
                    <div className=" shadow-lg bg-[white] p-[20px]  rounded-[10px] text-gray">

                        <h1 className="font-[700] text-[20px] md:text-[28px]">Profil Wilayah Padukuhan Beteng</h1>
                        <div className="">
                            <p className='text-[10px] md:text-[13px]'>Admin Padukuhan - 13 Juli 2023</p>
                        </div>
                        <div className="text-[11px] md:text-[14px] font-[400] flex flex-col gap-[10px] mt-[20px]">
                            <p>Padukuhan Beteng terletak di Kalurahan Jatimulyo, Kapanewon Girimulyo, Kabupaten Kulon progo, Daerah Istimewa Yogyakarta. Beteng memiliki ketinggian permukaan sekitar 600 - 700 meter di atas permukaan laut karena wilayahnya yang terletak di barisan perbukitan Menoreh wilayah utara.</p>
                            <p>Mata pencaharian penduduk wilayah ini sebagian besar adalah beternak. Sebagian penduduk memiliki peternakan kambing dan terdapat pula 3 tempat budidaya ikan lele. Wilayah ini juga dikenal dengan potensi pengembangan peternakan kambing ettawa (PE).</p>
                            <p>Selain itu, penduduk bercocok tanam cengkih, kelapa dan salak pondoh sebagai mata pencaharian lainnya. Cengkih merupakan tanaman yang memberikan keuntungan besar, akan tetapi cengkih hanya dapat dipanen secara besar-besaran tiap 5 tahun sekali. </p>
                            <p>Beteng memiliki fasilitas umum yaitu sarana pendidikan, sarana kesehatan, dan tempat ibadah bagi penduduk yang beragama Islam, dengan rincian satu PAUD dan satu SD, satu posyandu, dan empat tempat ibadah.</p>
                        </div>
                        <div className="mt-[10px]">
                            <table className='text-[11px] md:text-[14px] '>
                                <tr className='bg-background'>
                                    <td className='border-[1px] px-[10px] py-[5px]'>No</td>
                                    <td className='border-[1px] px-[30px] py-[5px]'>Nama</td>
                                    <td className='border-[1px] px-[50px] py-[5px]'>Jabatan</td>
                                </tr>
                                <tr>
                                    <td className='border-[1px] text-center py-[5px]'>1</td>
                                    <td className='border-[1px] text-center py-[5px]'>Ngadi</td>
                                    <td className='border-[1px] text-center py-[5px]'>Kepala Dukuh</td>
                                </tr>
                                <tr>
                                    <td className='border-[1px] text-center py-[5px]'>2</td>
                                    <td className='border-[1px] text-center py-[5px]'>Marno</td>
                                    <td className='border-[1px] text-center py-[5px]'>Ketua RW 16</td>
                                </tr>
                                <tr>
                                    <td className='border-[1px] text-center py-[5px]'>3</td>
                                    <td className='border-[1px] text-center py-[5px]'>Haryoko</td>
                                    <td className='border-[1px] text-center py-[5px]'>Ketua RW 17</td>
                                </tr>
                                <tr>
                                    <td className='border-[1px] text-center py-[5px]'>4</td>
                                    <td className='border-[1px] text-center py-[5px]'>Widayat</td>
                                    <td className='border-[1px] text-center py-[5px]'>Ketua RT 61</td>
                                </tr>
                                <tr>
                                    <td className='border-[1px] text-center py-[5px]'>5</td>
                                    <td className='border-[1px] text-center py-[5px]'>Setiagit</td>
                                    <td className='border-[1px] text-center py-[5px]'>Ketua RT 62</td>
                                </tr>
                                <tr>
                                    <td className='border-[1px] text-center py-[5px]'>6</td>
                                    <td className='border-[1px] text-center py-[5px]'>Tukiman</td>
                                    <td className='border-[1px] text-center py-[5px]'>Ketua RT 63</td>
                                </tr>
                                <tr>
                                    <td className='border-[1px] text-center py-[5px]'>7</td>
                                    <td className='border-[1px] text-center py-[5px]'>Sunarto</td>
                                    <td className='border-[1px] text-center py-[5px]'>Ketua RT 64</td>
                                </tr>
                                <tr>
                                    <td className='border-[1px] text-center py-[5px]'>8</td>
                                    <td className='border-[1px] text-center py-[5px]'>Sutikno</td>
                                    <td className='border-[1px] text-center py-[5px]'>Ketua RT 65</td>
                                </tr>
                                <tr>
                                    <td className='border-[1px] text-center py-[5px]'>9</td>
                                    <td className='border-[1px] text-center py-[5px]'>Sukijo</td>
                                    <td className='border-[1px] text-center py-[5px]'>Ketua RT 66</td>
                                </tr>
                                <tr>
                                    <td className='border-[1px] text-center py-[5px]'>10</td>
                                    <td className='border-[1px] text-center py-[5px]'>Sarono</td>
                                    <td className='border-[1px] text-center py-[5px]'>Ketua RT 67</td>
                                </tr>
                                <tr>
                                    <td className='border-[1px] text-center py-[5px]'>11</td>
                                    <td className='border-[1px] text-center py-[5px]'>Wiji Sutrisno</td>
                                    <td className='border-[1px] text-center py-[5px]'>Ketua RT 68</td>
                                </tr>
                            </table>
                        </div>
                    </div>

                </div>
                <Right />
            </div>
            <Footer />
        </div>
    )
}

export default profilePadukuhan