import { ButtonHTMLAttributes } from 'react';
import s from './button.module.css';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    children: React.ReactNode;
    onClick?: () => void;
    backgroundColor?: string;
    textColor?: string;
};

export const Button: React.FC<ButtonProps> = ({
    children,
    onClick,
    backgroundColor,
    textColor,

    ...props
}) => {
    const buttonStyle = {
        '--background-color': backgroundColor,
        '--text-color': textColor,
    } as React.CSSProperties;

    return (
        <button
            className={s.btn}
            style={buttonStyle}
            onClick={onClick}
            {...props}
        >
            {children}
        </button>
    );
};
