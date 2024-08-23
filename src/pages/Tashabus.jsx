import React from 'react'
import { tashabus } from '../services/tashabus'

const Tashabus = () => {
  return (
    <div className=' max-w-[1150px] m-auto'>
        <div >
                <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-full pt-5 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img className="object-cover w-full rounded-t-lg  md:h-auto md:w-[150px] md:rounded-none md:rounded-s-lg" src="https://zarkentbmsm.uz/img/strategiya.svg" alt=""/>
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-xl font-bold text-center max-w-[700px] tracking-tight text-[#00008B] dark:text-white">2022-2026-YILLARGA MO‘LJALLANGAN YANGI O‘ZBEKISTONNING
                    TARAQQIYOT STRATEGIYASI</h5>
                </div>
                </div>
            </div>

        {tashabus.map((item,index) =>(
            <div key={index}>
                <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-full pt-5 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img className="object-cover w-full rounded-t-lg  md:h-auto md:w-[150px] md:rounded-none md:rounded-s-lg" src={item.img} alt=""/>
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-xl font-bold text-center tracking-tight text-[#00824A] dark:text-white">{item.title}</h5>
                    <p className="mb-3 font-normal text-gray-700 text-center dark:text-gray-400">{item.desc}</p>
                </div>
                </div>
            </div>
        ))}

        
    </div>
  )
}

export default Tashabus
