import s from './header.module.css';

export const Header = () => {
    return (
        <header className={s.header}>
            <h1 className={s.title}>Управление картами</h1>
        </header>
    );
};
