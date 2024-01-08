import { Link } from 'react-router-dom'

export const Main = () => {
    return (
        <>
            <h1>Я страница с полем ввода и таблицей</h1>
            <li>
            <Link to="/about">На страницу о проекте</Link>
            </li>
            <li>
            <Link to="/login">Войти</Link>
            </li>
        </>
        )
    }