import logo from '../../../assets/img/logo.png';
import s from './splash-screen.module.css';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const SplashScreen = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/companies');
        }, 3000);

        return () => clearTimeout(timer);
    }, [navigate]);
    return (
        <div className={s.container}>
            <img src={logo} alt='Company Logo' className={s.logo} />
        </div>
    );
};
