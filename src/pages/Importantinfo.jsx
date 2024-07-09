import React from 'react'
import { bms } from '../services/swagger-img'
import map from '../assets/map.jpg'
import { Link } from 'react-router-dom'

const Importantinfo = () => {
  return (
    <>
    <section className='mt-10'>
      <h1 className='text-center md:text-3xl'>BMSM to‘g‘risida asosiy ma’lumotlar</h1>
      <ul>
        {
          bms.map((item,index) =>(
            <li className='text-sm px-4 md:text-xl m-auto max-w-[1000px] pt-3'>
              {item.title}
              <b>{item.addition}</b>
            </li>
          ))
        }
        <li className='text-sm px-4 md:text-xl m-auto max-w-[1000px] pt-3'>
        Aloqa telefoni:
        <b>
          <Link to='#'>(+998) 93-195-91-27, 93-166-66-99</Link>
        </b>
            </li>

            <li className='text-sm px-4 md:text-xl m-auto max-w-[1000px] pt-3'>
        Elektron pochta manzili:
        <b>
          <Link to=' bmsm34tv@gmail.com'> bmsm34tv@gmail.com</Link>
        </b>
            </li>
      </ul>
    </section>

    <section className='mt-10 container px-4'>
      <h2 className='text-center mb-6 md:text-3xl'>Ta’lim yo‘nalishlari</h2>
    <table class="border-collapse border border-gray-400  m-auto">
            <thead className='bg-[#268382]'>
                <tr>
                    <th className="border border-gray-400 px-4 py-2">NN</th>
                    <th className="border border-gray-400 px-4 py-2">Ta'lim yo'nalishi</th>
                    <th className="border border-gray-400 px-4 py-2">Qabul yoshi</th>
                    <th className="border border-gray-400 px-4 py-2">O'qish muddati</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="border border-gray-400 px-4 py-2">1</td>
                    <td className="border border-gray-400 px-4 py-2">Fortepiano</td>
                    <td className="border border-gray-400 px-4 py-2">6-9</td>
                    <td className="border border-gray-400 px-4 py-2">7 yil</td>
                </tr>
                <tr>
                    <td className="border border-gray-400 px-4 py-2">2</td>
                    <td className="border border-gray-400 px-4 py-2">Torli cholg'ular</td>
                    <td className="border border-gray-400 px-4 py-2">6-9</td>
                    <td className="border border-gray-400 px-4 py-2">7 yil</td>
                </tr>
                <tr>
                    <td className="border border-gray-400 px-4 py-2">3</td>
                    <td className="border border-gray-400 px-4 py-2">Damli va zarbli cholg'ular</td>
                    <td className="border border-gray-400 px-4 py-2">6-11</td>
                    <td className="border border-gray-400 px-4 py-2">5 yil</td>
                </tr>
                <tr>
                    <td className="border border-gray-400 px-4 py-2">4</td>
                    <td className="border border-gray-400 px-4 py-2">Xalq cholg'ulari</td>
                    <td className="border border-gray-400 px-4 py-2">6-11</td>
                    <td className="border border-gray-400 px-4 py-2">5 yil</td>
                </tr>
                <tr>
                    <td className="border border-gray-400 px-4 py-2">5</td>
                    <td className="border border-gray-400 px-4 py-2">An'anaviy cholg'u ijrochiligi</td>
                    <td className="border border-gray-400 px-4 py-2">6-11</td>
                    <td className="border border-gray-400 px-4 py-2">5 yil</td>
                </tr>
                <tr>
                    <td className="border border-gray-400 px-4 py-2">6</td>
                    <td className="border border-gray-400 px-4 py-2">Akademik xonandalik</td>
                    <td className="border border-gray-400 px-4 py-2">6-11</td>
                    <td className="border border-gray-400 px-4 py-2">5 yil</td>
                </tr>
                <tr>
                    <td className="border border-gray-400 px-4 py-2">7</td>
                    <td className="border border-gray-400 px-4 py-2">An'anaviy xonandalik</td>
                    <td className="border border-gray-400 px-4 py-2">6-11</td>
                    <td className="border border-gray-400 px-4 py-2">5 yil</td>
                </tr>
                <tr>
                    <td className="border border-gray-400 px-4 py-2">8</td>
                    <td className="border border-gray-400 px-4 py-2">Estrada xonandaligi</td>
                    <td className="border border-gray-400 px-4 py-2">6-11</td>
                    <td className="border border-gray-400 px-4 py-2">5 yil</td>
                </tr>
                <tr>
                    <td className="border border-gray-400 px-4 py-2">9</td>
                    <td className="border border-gray-400 px-4 py-2">Baxshichilik san'ati</td>
                    <td className="border border-gray-400 px-4 py-2">6-11</td>
                    <td className="border border-gray-400 px-4 py-2">5 yil</td>
                </tr>
                <tr>
                    <td className="border border-gray-400 px-4 py-2">10</td>
                    <td className="border border-gray-400 px-4 py-2">Estrada cholg'u ijrochiligi: fortepino, torli cholg'ular, damli va zarbli cholg'ular</td>
                    <td className="border border-gray-400 px-4 py-2">6-9, 6-11</td>
                    <td className="border border-gray-400 px-4 py-2">7 yil, 5 yil</td>
                </tr>
                <tr>
                    <td className="border border-gray-400 px-4 py-2">11</td>
                    <td className="border border-gray-400 px-4 py-2">Xoreografiya</td>
                    <td className="border border-gray-400 px-4 py-2">6-11</td>
                    <td className="border border-gray-400 px-4 py-2">5 yil</td>
                </tr>
                <tr>
                    <td className="border border-gray-400 px-4 py-2">12</td>
                    <td className="border border-gray-400 px-4 py-2">Tasviriy san'at</td>
                    <td className="border border-gray-400 px-4 py-2">6-11</td>
                    <td className="border border-gray-400 px-4 py-2">5 yil</td>
                </tr>
                <tr>
                    <td className="border border-gray-400 px-4 py-2">13</td>
                    <td className="border border-gray-400 px-4 py-2">Amaliy san'at</td>
                    <td className="border border-gray-400 px-4 py-2">6-11</td>
                    <td className="border border-gray-400 px-4 py-2">5 yil</td>
                </tr>
                <tr>
                    <td className="border border-gray-400 px-4 py-2">14</td>
                    <td className="border border-gray-400 px-4 py-2">Teatr san'ati</td>
                    <td className="border border-gray-400 px-4 py-2">6-11</td>
                    <td className="border border-gray-400 px-4 py-2">5 yil</td>
                </tr>
            </tbody>
        </table>
    </section>

    {/* <section className='container w-full flex '>
      <div className='m-auto mt-8'>
      <img className='w-full' src={map} alt="" />
      </div>
    </section> */}

    </>
  )
}

export default Importantinfo