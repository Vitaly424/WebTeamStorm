import { ReactNode } from 'react';
import cls from './Container.module.scss';
import cn from 'classnames';

interface ContainerProps {
    children: ReactNode;
    className?: string;
}

export const Container = (props: ContainerProps) => {
    const { children, className } = props;

    return <div className={cn(cls.container, className)}>{children}</div>;
};
