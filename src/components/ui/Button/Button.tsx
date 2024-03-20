import { ReactNode } from 'react';
import cls from './Button.module.scss';
import cn from 'classnames';

export type ButtonType = 'button' | 'submit';
export type ButtonSize = 'average' | 'big' | 'small' | 'extra-small';

interface ButtonProps {
    children: ReactNode;
    type?: ButtonType;
    disabled?: boolean;
    className?: string;
    size?: ButtonSize;
}

export const Button = (props: ButtonProps) => {
    const {
        children,
        type = 'button',
        className,
        size = 'big',
        disabled,
        ...otherProps
    } = props;

    return (
        <button
            className={cn(cls.button, className, cls[size], {
                [cls.disabled]: disabled,
            })}
            type={type}
            disabled={disabled}
            {...otherProps}
        >
            {children}
        </button>
    );
};
