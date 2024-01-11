import { Link } from 'react-router-dom'
import { useState, useCallback, useEffect } from 'react'
import FormInput from '../Login/FormInput'

export const Main = () => {
    const [location, setLocation ] = useState('')
    const [isLocationError, setIsLocationError] = useState(false)
    const locationHandler = (e) => {
        e.preventDefault();
        const payload = {
            location: location
        }
    fetch('', { data: payload })
    }
    useEffect(() => {
        if (location.length < 4 && location.length > 0) {
            setIsLocationError(true)
        }
        else {
            setIsLocationError(false)
        }
    }, [location]);
    const setLocationValue = useCallback((value) => {
        setLocation(value)
    }, []) 
    return (
        <>
            <h3>Для начала работы введите в поле местоположение</h3>
            <FormInput
            name="location"
            value={location}
            setValue={setLocationValue}
            isError={isLocationError}
            placeholder="Введите местоположение"
            />
            <button type="submit">Определение координат</button>
            <h3>Результаты запроса</h3>
            <table border="1">
                <tr>
                <th>Вид загрязнения</th><th>Зарегистрированные значения</th><th>ПДК</th>
                </tr>
                <tr>
                <td>-</td><td>-</td><td>-</td>
                </tr>
                <tr>
                <td>-</td><td>-</td><td>-</td>
                </tr>
            </table>
        </>
        )
    }