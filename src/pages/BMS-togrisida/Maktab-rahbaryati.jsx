import React from 'react'

import raxbar1 from '../../assets/RAXBAR1.jpg'
import raxbar2 from '../../assets/ТЕМИРОВ-ШАРОФИДДИН.jpg'
import raxbar3 from '../../assets/ЎРОЗОВ-ДЎСМУРОД.jpg'
import raxbar4 from '../../assets/АГАНИЯЗОВ-ТОЛИБЖОН.jpg'


const MaktabRahbaryati = () => {
  return (
    <section className='bg-[#eee] mt-10'>
      <div className='bg-white max-w-[1000px] pt-10 m-auto'>
        <div className='p-10 md:flex items-center justify-between gap-8'>
          <div className='md:max-w-[400px]'>
           <img className='w-full' src={raxbar1} alt="" />
          </div>
          <div className='mt-7 md:mb-10'>
            <h2 className='text-3xl font-bold'>Tilavova Hanifa</h2>
            <h3 className='text-2xl my-3 font-medium'>19-sonli bolalar musiqa va san’at maktabi <br />Direktori</h3>
          </div>
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
          </div>
        </div>
      </div>
    </section>
  )
}

export default MaktabRahbaryati