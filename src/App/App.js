import Styles from './app.module.css'
import  { HeaderTest } from '../components/Header/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Main } from '../components/pages/Main/Main'
import { About } from '../components/pages/About/About'
import { Login } from '../components/pages/Login/Login'
import { Registration } from '../components/pages/Login/Registration'
import { NotFound } from '../components/pages/NotFound/NotFound'
import { AppRoutes } from '../routes/appRoutes'


const App = () =>{
  return ( 
  <>
    <div className={Styles['wrapper']}>


<AppRoutes/>
  </div>
  </>
  )
}

export default App;