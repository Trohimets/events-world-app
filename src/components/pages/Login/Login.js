import { Link, useNavigate } from 'react-router-dom'

import { useState, useCallback, useEffect } from 'react'
import FormInput from './FormInput'
import { Button } from 'antd'

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


    const navigate =  useNavigate()
    return (
        <>
        <form style={{width: '300px', height: '300px', border: '1px solid black', display: 'flex', flexDirection: 'column', gap:"10px", padding: '0 10px', alignItems: 'center '}} onSubmit={loginHandler}>
            <h2>Форма входа</h2>
            <FormInput
            name="name"
            value={login}
            setValue={setLoginValue}
            isError={isLoginError}
            placeholder="Логин"
            />
            <FormInput
            name="password"
            value={password}
            setValue={setPasswordValue}
            isError={isPasswordError}
            placeholder="Пароль"
            />
            <Button style={{margin: '0 5px 0 0 '}}>Войти</Button> 
            <div>Перейти на страницу регистрации</div>
            <Button type='primary' onClick={() => navigate('/registration')} style={{margin: '0 5px 0 0 '}}>Регистрация</Button> 
        </form>
        </>
        
    )
}