
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Footer, Header } from './components'
import {  AxloqQoidalar, BmsmUstavi, FarmonlarQarorlar, Guvohnoma, Home, Importantinfo, JamoaShartnoma, KodeksQonunlar, Konstututsiya, LokalHujat, MaktabRahbaryati, MaktabStrakturasi, MalakaTavsifi, VazirlarMahkamasiqarori, XayatQarori, Xodimlar, YoqotganHujatlar } from './pages'
import OquvDasturi from './pages/Oquv-Dasturi'
import Festival from './pages/Festival'
import Galery from './pages/Galery'
import Tashabus from './pages/Tashabus'
import Yanglilar from './pages/Yanglilar'
import BmsHaqida from './pages/BMS-togrisida/BmsHaqida'
import Yutuqlar from './pages/Yutuqlar'
import DetailPage from './pages/DetailPage'

function App() {

  return (
    <div className='max-w-[1200px] border-[4px] m-auto mt-3 shadow-custom'>
        <div className="coantainer">
        <BrowserRouter>
         <Header/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/galery' element={<Galery/>}/>
            <Route path='/konstututsiya' element={<Konstututsiya/>}/>
            <Route path='/kodeksQonunlar' element={<KodeksQonunlar/>}/>
            <Route path='/farmonlarQarorlar' element={<FarmonlarQarorlar/>}/> 
            <Route path='/vazirlarMahkamasiqarori' element={<VazirlarMahkamasiqarori/>}/>
            <Route path='/xayatQarori' element={<XayatQarori/>}/>
            <Route path='/yoqotganHujatlar' element={<YoqotganHujatlar/>}/>
            <Route path='/importantinfo' element={<Importantinfo/>}/>

            <Route path='/maktabRahbaryati' element={<MaktabRahbaryati/>}/>  
            <Route path='/xodimlar' element={<Xodimlar/>}/>  
            <Route path='/bmsmUstavi' element={<BmsmUstavi/>}/>  
            <Route path='/guvohnoma' element={<Guvohnoma/>}/>  
            <Route path='/maktabStrakturasi' element={<MaktabStrakturasi/>}/>  
            <Route path='/axloqQoidalar' element={<AxloqQoidalar/>}/>  
            <Route path='/lokalHujat' element={<LokalHujat/>}/>  
            <Route path='/jamoaShartnoma' element={<JamoaShartnoma/>}/>  
            <Route path='/malakaTavsifi' element={<MalakaTavsifi/>}/>  
            <Route path='/oquvDasturi' element={<OquvDasturi/>}/>
            <Route path='/festival' element={<Festival/>}/>
            <Route path='/tashabus' element={<Tashabus/>}/>
            <Route path='/yangliklar' element={<Yanglilar/>}/>
            <Route path='/bmshaqida' element={<BmsHaqida/>}/>
            <Route path='/yutuqlar' element={<Yutuqlar/>}/>
            <Route path="/detail/:id" element={<DetailPage />} />
          </Routes> 
         <Footer/>
        </BrowserRouter>
        </div>
    </div>
  )
}

export default App
