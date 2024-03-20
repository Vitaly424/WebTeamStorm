import { ReactNode } from 'react';
import cls from './Title.module.scss';
import cn from 'classnames';

export type TextSize = 's' | 'm' | 'l';
type HeaderTagType = 'h1' | 'h2' | 'h3';

interface TitleProps {
    children: ReactNode;
    size?: TextSize;
    className?: string;
}

const mapSizeToClass: Record<TextSize, string> = {
    s: cls.size_s,
    m: cls.size_m,
    l: cls.size_l,
};

const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
    s: 'h3',
    m: 'h2',
    l: 'h1',
};

export const Title = (props: TitleProps) => {
    const { children, size = 'm', className } = props;

    const HeaderTag = mapSizeToHeaderTag[size];
    const sizeClass = mapSizeToClass[size];

    return (
        <HeaderTag className={cn(cls.title, className, sizeClass)}>
            {children}
        </HeaderTag>
    );
};
