import Styles from './app.module.css'
import Header from '../Header/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Main } from '../pages/Main/Main'
import { About } from '../pages/About/About'
import { Login } from '../pages/Login/Login'
import { NotFound } from '../pages/NotFound/NotFound'


const App = () =>{
  return ( 
  <>
    <div className={Styles['wrapper']}>
  <Header></Header>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Main/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/error" element={<NotFound/>}/>
  </Routes>
  </BrowserRouter>
  </div>
  </>
  )
}

export default App;