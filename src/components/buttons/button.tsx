import { ButtonHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    children: React.ReactNode;
    onClick?: () => void;
};

export const Button = ({ children, onClick }: ButtonProps) => {
    return <button onClick={onClick}>{children}</button>;
};
