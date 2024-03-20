import logo from '@/app/assets/images/logo.svg';
import logoMobile from '@/app/assets/images/logo-mobile-menu.svg';
import cls from './Logo.module.scss';
import cn from 'classnames';


type Color = 'white' | 'black';

interface LogoProps {
    color?: Color;
    className?: string;
}

export const Logo = (props: LogoProps) => {
    const { color = 'black', className } = props;

    return (
        <div className={cn(cls.logoWrapper, cls[color], className)}>
            <img className={cls.logo} src={color === 'white' ? logoMobile : logo} alt="Логотип" />

            <div>
                <h4 className={cls.title}>WebTeamStorm</h4>
                <p className={cls.operatingMode}>
                    Режим работы: пн-пт 09:00-18:00
                </p>
            </div>
        </div>
    );
};
