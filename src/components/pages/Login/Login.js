import { Link } from 'react-router-dom'

export const Login = () => {
    return (
        <>
            <h1>Я страница авторизации</h1>
            <li>
            <Link to="/">Перейти на главную</Link>
            </li>
            <li>
            <Link to="/about">На страницу о проекте</Link>
            </li>
        </>
        )
    }