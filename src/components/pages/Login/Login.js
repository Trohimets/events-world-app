import { Link } from 'react-router-dom'

import { useState, useCallback, useEffect } from 'react'
import FormInput from './FormInput'

export const Login = () => {
    const [login, setLogin ] = useState('')
    const [isLoginError, setIsLoginError] = useState(false)
    const [password, setPassword ] = useState('')
    const [isPasswordError, setIsPasswordError] = useState(false)
    const loginHandler = (e) => {
        e.preventDefault();
        const payload = {
            login: login,
            password: password
        }
    fetch('', { data: payload })
    }

        useEffect(() => {
            if (login.length < 4 && login.length > 0) {
                setIsLoginError(true)
            }
            else {
                setIsLoginError(false)
            }
        }, [login]);

        useEffect(() => {
            if (password.length < 4 && password.length > 0) {
                setIsPasswordError(true)
            }
            else {
                setIsPasswordError(false)
            }
        }, [password]);

    const setLoginValue = useCallback((value) => {
        setLogin(value)
    }, []) 
    const setPasswordValue = useCallback((value) => {
        setPassword(value)
    }, []) 
    return (
        <>
        <form style={{width: '300px', height: '300px', border: '1px solid black'}} onSubmit={loginHandler}>
            <h2>Форма входа</h2>
            <button type="submit"><Link to="/registration">Регистрация</Link></button>
            <FormInput
            name="name"
            value={login}
            setValue={setLoginValue}
            isError={isLoginError}
            />
            <FormInput
            name="password"
            value={password}
            setValue={setPasswordValue}
            isError={isPasswordError}
            />
            <button type="submit">Войти</button>
        </form>
        <li>
        <Link to="/">Перейти на главную</Link>
        </li>
        <li>
        <Link to="/about">На страницу о проекте</Link>
        </li>
        </>
        
    )
}