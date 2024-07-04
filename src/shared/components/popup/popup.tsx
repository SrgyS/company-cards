import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import s from './popup.module.css';
import { Button } from '../buttons/button';
import exclIcon from '../../../assets/img/exclamation_white.png';

export interface IPopupContent {
    text: string;
    id?: string;
}

interface IPopupProps {
    content: IPopupContent;
    onClose: () => void;
    onConfirm: () => void;
    isOpen: boolean;
    isError: boolean;
}
export const Popup = ({
    content,
    onClose,
    onConfirm,
    isOpen,
    isError,
}: IPopupProps) => {
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
                {isError && (
                    <img
                        className={s.errIcon}
                        src={exclIcon}
                        alt='error icon'
                    />
                )}
                <p>{content.text}</p>
                <p>{content.id}</p>
                <Button onClick={onConfirm}>
                    {isError ? 'Попробуйте ещё раз' : 'Хорошо'}
                </Button>
            </div>
            <div className={s.closeBtn} onClick={onClose}></div>
        </div>,
        document.body
    );
};
