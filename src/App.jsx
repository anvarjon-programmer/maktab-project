
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Footer, Header } from './components'
import {  AxloqQoidalar, BmsmUstavi, FarmonlarQarorlar, Guvohnoma, Home, Importantinfo, JamoaShartnoma, KodeksQonunlar, Konstututsiya, LokalHujat, MaktabRahbaryati, MaktabStrakturasi, MalakaTavsifi, VazirlarMahkamasiqarori, XayatQarori, Xodimlar, YoqotganHujatlar } from './pages'

function App() {

  return (
    <div className='max-w-[1200px] border-[4px] m-auto mt-3 shadow-custom'>
        <div className="coantainer">
        <BrowserRouter>
         <Header/>
          <Routes>
            <Route path='/' element={<Home/>}/>
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
          </Routes> 
         <Footer/>
        </BrowserRouter>
        </div>
    </div>
  )
}

export default App
