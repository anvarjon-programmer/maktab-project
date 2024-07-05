import { Link } from 'react-router-dom'
import logo from '../assets/logo.jpg'
const Header = () => {
  return (
    <header>
      <div className="container bg-white">
         <nav className='mt-3 md:flex items-center justify-between'>
           <Link to={'/'}>
            <img src={logo} alt="" className='w-[110px]'/>
           </Link>
           <h1 className='max-w-[800px] text-[22px] text-[#2e3192] text-center  font-semibold'>
                <div>
                O‘ZBEKISTON RESPUBLIKASI
                MADANIYAT VAZIRLIGI
                QASHQADARYO 
                </div>
                VILOYATI
                MADANIYAT BOSHQARMASI
                MIRISHKOR TUMANI
                19-SON BOLALAR MUSIQA VA SAN'AT MAKTABI</h1>
            <div className='w-[5%] mb-5'>
              <Link to={'/'} >
                 <img className='w-full' src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Telegram_alternative_logo.svg/2048px-Telegram_alternative_logo.svg.png" alt="" />
              </Link>
            </div>
         </nav>
      </div>
    </header>
  )
}

export default Header