import React from 'react'
import img1 from '../../assets/direktor.png'
import img2 from '../../assets/emp2.png'
import img3 from '../../assets/emp3.png'
import img4 from '../../assets/emp4.png'
import raxbar1 from '../../assets/RAXBAR1.jpg'
import raxbar2 from '../../assets/ТЕМИРОВ-ШАРОФИДДИН.jpg'
import raxbar3 from '../../assets/ЎРОЗОВ-ДЎСМУРОД.jpg'
import raxbar4 from '../../assets/АГАНИЯЗОВ-ТОЛИБЖОН.jpg'


const MaktabRahbaryati = () => {
  return (
    <section className='bg-[#eee] mt-10'>
      <div className='bg-white max-w-[1000px] pt-10 m-auto'>
        <div className='p-10 md:flex items-center justify-between gap-8'>
          <div className='md:max-w-[300px]'>
           <img className='w-full' src={raxbar1} alt="" />
          </div>
          {/* <div className='mt-7 md:mb-10'>
            <h2 className='text-3xl font-bold'>Raxmonov Umidjon Ibroxim o‘g‘li</h2>
            <h3 className='text-2xl my-3 font-medium'>34-sonli bolalar musiqa va san’at maktabi direktori</h3>
            <p className='text-xl'>Telefon: +998 55 901-54-34</p>
            <p className='text-xl my-1'>Qabul kunlari: Dushanba - 1000 - 1200</p>
            <p className='text-xl'>Chorshanba - 1000 - 1200</p>
          </div> */}
        </div>
      </div>

      <div className='bg-white max-w-[1000px] mt-10 m-auto'>
        <div className='p-10 md:flex items-center justify-between gap-8'>
          <div className='md:max-w-[300px]'>
           <img className='w-full' src={raxbar2} alt="" />
          </div>
          <div className='mt-7 md:mb-10'>
            <h2 className='text-3xl font-bold'>Temirov Sharofiddin Kuvatovich</h2>
            <h3 className='text-2xl my-3 font-medium'>19-sonli bolalar musiqa va san’at maktabi <br />O'quv ishlari bo'yicha direktor o'rinbosari</h3>
            {/* <p className='text-xl'>Telefon: +998 55 901-54-34</p>
            <p className='text-xl my-1'>Qabul kunlari: Seshanba - 1400 - 1600</p>
            <p className='text-xl'>Payshanba - 1000 - 1200</p> */}
          </div>
        </div>
      </div>

      <div className='bg-white max-w-[1000px] mt-10 m-auto '>
        <div className='p-10 md:flex items-center justify-between gap-8'>
          <div className='md:max-w-[300px]'>
           <img className='w-full' src={raxbar3} alt="" />
          </div>
          <div className='mt-7 md:mb-10'>
            <h2 className='text-3xl font-bold'>O'razov Do'smurod Ruzikulovich</h2>
            <h3 className='text-2xl my-3 font-medium'>19-sonli bolalar musiqa va san’at maktabi <br />Ho'jalik ishlari bo'yicha o'rinbosari</h3>
            {/* <p className='text-xl'>Telefon: +998 55 901-54-34</p>
            <p className='text-xl my-1'>Qabul kunlari: Chorshanba - 1000 - 1200</p>
            <p className='text-xl'>Shanba - 1000 - 1200</p> */}
          </div>
        </div>
      </div>

      <div className='bg-white max-w-[1000px] mt-10 m-auto '>
        <div className='p-10 md:flex items-center justify-between gap-8'>
          <div className='md:max-w-[300px]'>
           <img className='w-full' src={raxbar4} alt="" />
          </div>
          <div className='mt-7 md:mb-10'>
            <h2 className='text-3xl font-bold'>Aganizov Tolibjon Muzrapovich</h2>
            <h3 className='text-2xl my-3 font-medium'>19-sonli bolalar musiqa <br />va san’at maktabi bosh hisobchisi</h3>
            {/* <p className='text-xl'>Telefon: +998 55 901-54-34</p>
            <p className='text-xl my-1'>Qabul kunlari: Seshanba - 1000 - 1200</p>
            <p className='text-xl'>Payshanba - 1500 - 1700</p> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default MaktabRahbaryati