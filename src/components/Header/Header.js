import { Link, useNavigate } from 'react-router-dom'
import { NavButton } from './styles';

export const HeaderTest = () => {

  const navigate = useNavigate()
    return (
      <header style={{display: 'flex', gap: '10px', margin: '10px'}}>
        <NavButton onClick={() => navigate('/')}>Главная</NavButton>
        <NavButton onClick={() =>navigate('/about')}>О сервисе</NavButton>
        <NavButton onClick={()=>navigate('/login')}>Войти</NavButton>
      </header>
    );
};

