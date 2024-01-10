import { HeaderTest } from "../components/Header/Header"
import { About } from "../components/pages/About/About"
import { Login } from "../components/pages/Login/Login"
import { Registration } from "../components/pages/Login/Registration"
import { Main } from "../components/pages/Main/Main"
import { NotFound } from "../components/pages/NotFound/NotFound"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
export const AppRoutes = () => {



    return (
        <>
        <HeaderTest/>
        <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/registration" element={<Registration/>}/>
        <Route path="/error" element={<NotFound/>}/>
      </Routes>
      </>
    )
}