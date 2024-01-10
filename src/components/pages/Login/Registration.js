import { Link, useNavigate } from 'react-router-dom'
import { Button } from 'antd'
import { useState, useCallback, useEffect } from 'react'
import FormInput from './FormInput'

export const Registration = () => {
    const [login, setLogin ] = useState('')
    const [isLoginError, setIsLoginError] = useState(false)
    const [password, setPassword ] = useState('')
    const [isPasswordError, setIsPasswordError] = useState(false)
    const [passwordTwo, setPasswordTwo ] = useState('')
    const [isPasswordTwoError, setIsPasswordTwoError] = useState(false)
    const [email, setEmail ] = useState('')
    const [isEmailError, setIsEmailError] = useState(false)
    const loginHandler = (e) => {
        e.preventDefault();
        const payload = {
            login: login,
            password: password,
            passwordTwo: passwordTwo,
            email: email

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

        useEffect(() => {
            if (passwordTwo !== password) {
                setIsPasswordTwoError(true)
            }
            else {
                setIsPasswordTwoError(false)
            }
        }, [passwordTwo]);

        useEffect(() => {
            if (email.includes('@')) {
                setIsEmailError(false)
            }
            else {
                setIsEmailError(true)
            }
        }, [passwordTwo]);

    const setLoginValue = useCallback((value) => {
        setLogin(value)
    }, []) 
    const setPasswordValue = useCallback((value) => {
        setPassword(value)
    }, []) 
    const setPasswordTwoValue = useCallback((value) => {
        setPasswordTwo(value)
    }, []) 
    const setEmailValue = useCallback((value) => {
        setEmail(value)
    }, []) 

    const navigate =  useNavigate()
    return (
        <>
        <form style={{width: '300px', height: '300px', border: '1px solid black'}} onSubmit={loginHandler}>
            <h2>Форма входа</h2>
            <Button type='primary' onClick={() => navigate('/login')} style={{margin: '0 5px 0 0 '}}>Вернуться на страницу авторизации</Button> 
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
            <FormInput
            name="passwordTwo"
            value={passwordTwo}
            setValue={setPasswordTwoValue}
            isError={isPasswordTwoError}
            placeholder="Введите пароль ещё раз"
            />
            <FormInput
            name="email"
            value={email}
            setValue={setEmailValue}
            isError={isEmailError}
            placeholder="Email"
            />
            <Button type='primary' style={{margin: '0 5px 0 0 '}}>Зарегистрироваться</Button> 
        </form>
        </>
        
    )
}