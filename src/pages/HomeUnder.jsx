import React from 'react'
import { Link } from 'react-router-dom'

const HomeUnder = () => {
  return (
    <div className='grid grid-cols md:grid-cols-2 lg:grid-cols-3 gap-[30px] xl:grid-cols-4
      max-w-sm mx-auto md:max-w-none md:mx-0'>
        <div>
            <Link to={'/tashabus'}>
            <img src="https://api.mentalaba.uz/test_gallery/364a12f2-6b0e-4898-ab6d-98ec1dd6e179.png" alt="" />
            </Link>
        </div>
        <div>
            <Link to={'/'}>
            <img src="https://7-musiqa.uz/storage/images/6Qoz4hwBLWwWIQYFVEA3UuWuNsMucdamrRtiMwwA.jpg" alt="" />
            </Link>
        </div>
        <div>
            <Link to={'/'}>
            <img src="https://m.media-amazon.com/images/I/81SC9Ft0M4L._AC_SL1500_.jpg" alt="" />
            </Link>
        </div>
        <div>
            <Link to={'/'}>
            <img src="https://furqatbek.ucoz.net/_nw/0/32114273.png" alt="" />
            </Link>
        </div>
        <div>
            <Link to={'/'}>
            <img src="https://m.media-amazon.com/images/I/71ynfB4zYfL._AC_SL1500_.jpg" alt="" />
            </Link>
        </div>
        <div>
            <Link to={'/'}>
            <img src="https://7-musiqa.uz/storage/images/XNZsKiuFaKpA837V8bFJXQ6iUoWf7XriinxayeD3.jpg" alt="" />
            </Link>
        </div>
        <div>
            <Link to={'/'}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Notenschluessel.png/150px-Notenschluessel.png" alt="" />
            </Link>
        </div>
        <div>
            <Link to={'/'}>
            <img src="https://www.ubuy.cm/productimg/?image=aHR0cHM6Ly9pbWFnZXMtbmEuc3NsLWltYWdlcy1hbWF6b24uY29tL2ltYWdlcy9JLzcxNG9xJTJCZjVrMkwuX1NTNDAwXy5qcGc.jpg" alt="" />
            </Link>
        </div>
        
      </div>
  )
}

export default HomeUnder