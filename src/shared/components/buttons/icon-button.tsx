import s from './icon-button.module.css';

interface IconButtonProps {
    src: string;
    color: string;
    size?: number;
    onClick?: () => void;
}

export const ColoredIconButton = ({
    src,
    color,
    size = 24,
    onClick,
}: IconButtonProps) => {
    return (
        <button
            onClick={onClick}
            className={s.icon}   style={{
                '--icon-color': color,
                maskImage: `url(${src})`,
                WebkitMaskImage: `url(${src})`,
                width: `${size}px`,
                height: `${size}px`,
            } as React.CSSProperties}
        />
    );
};
