import { Link } from 'react-router-dom'

import { useState, useCallback, useEffect } from 'react'
import FormInput from './FormInput'

export const Login = () => {
    const [user, setUser ] = useState('')
    const [isUserError, setIsUserError] = useState(false)
    const [email, setEmail ] = useState('')
    const [isEmailError, setIsEmailError] = useState(false)
    const loginHandler = (e) => {
        e.preventDefault();
        const payload = {
            user: user,
            email: email
        }
    fetch('', { data: payload })
    }

        useEffect(() => {
            if (user.length < 4 && user.length > 0) {
                setIsUserError(true)
            }
            else {
                setIsUserError(false)
            }
        }, [user]);

        useEffect(() => {
            if (email.length < 4 && email.length > 0) {
                setIsEmailError(true)
            }
            else {
                setIsEmailError(false)
            }
        }, [email]);

    const setUserValue = useCallback((value) => {
        setUser(value)
    }, []) 
    const setEmailValue = useCallback((value) => {
        setEmail(value)
    }, []) 
    return (
        <>
        <form style={{width: '300px', height: '300px', border: '1px solid black'}} onSubmit={loginHandler}>
            <h2>Форма входа</h2>
            <FormInput
            name="name"
            value={user}
            setValue={setUserValue}
            isError={isUserError}
            />
            <FormInput
            name="email"
            value={email}
            setValue={setEmailValue}
            isError={isEmailError}
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