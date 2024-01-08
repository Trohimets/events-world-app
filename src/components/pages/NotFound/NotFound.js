import { Link } from 'react-router-dom'

export const NotFound = () => {
    return (
        <>
        <div>
        <h2>404 page not found</h2>
        <p>We are sorry but the page you are looking for does not exist.</p>
        </div>
        <Link to="/">На главную страницу</Link>
        </>
        )
    }