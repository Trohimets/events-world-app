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
            <img className={styles['about_img']} src="https://static20.tgcnt.ru/posts/_0/65/65e486a25c4042296b886489983b079b.jpg"/>
        </>
        )
    }