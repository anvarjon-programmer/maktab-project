
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Footer, Header } from './components'
import { Home } from './pages'

function App() {

  return (
    <div className='max-w-[1200px] border-[4px] m-auto mt-3 shadow-custom'>
        <BrowserRouter>
         <Header/>
          <Routes>
            <Route path='/' element={<Home/>}/>
          </Routes>
         <Footer/>
        </BrowserRouter>
    </div>
  )
}

export default App
