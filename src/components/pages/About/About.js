import { Link } from 'react-router-dom'
import styles from './about.module.css'

export const About = () => {
    return (
        <>
            <h2 className={styles['about_h2']}>Здесь немного подробнее о сервисе</h2>
            <div className={styles['about_p']}>
                Вы можете воспользоваться формой для ввода местоположения, по которому будут определены
                координаты, по которым в таблице ниже будут выведены данные о загрязнении.
            </div>
            <li>
            <Link to="/">Перейти на главную</Link>
            </li>
            <li>
            <Link to="/login">Войти</Link>
            </li>
        </>
        )
    }