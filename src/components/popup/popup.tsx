import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import s from './popup.module.css';

interface IPopupContent {
    text: string;
    id: string;
}

interface IPopupProps {
    content: IPopupContent;
    onClose: () => void;
    isOpen: boolean;
}
export const Popup = ({ content, onClose, isOpen }: IPopupProps) => {
    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('modalOpen');
        } else {
            document.body.classList.remove('modalOpen');
        }
        return () => {
            document.body.classList.remove('modalOpen');
        };
    }, [isOpen]);
    if (!isOpen) return null;
    return ReactDOM.createPortal(
        <div className={s.overlay}>
            <div className={s.popup}>
                <p>Нажата кнопка: {content.text}</p>
                <p>Id компании: {content.id}</p>
                <button onClick={onClose}>Хорошо</button>
            </div>
            <button className={s.btn} onClick={onClose}>
                Закрыть
            </button>
        </div>,
        document.body
    );
};
