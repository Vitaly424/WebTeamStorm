import cls from './MainMenu.module.scss';
import arrowUp from '@/app/assets/images/icons/arrow-up.svg';
import { useMediaQuery } from 'react-responsive';
import cn from 'classnames';

export const MainMenu = () => {
    // const ref: MutableRefObject<HTMLAnchorElement | null> =
    //     useRef<HTMLAnchorElement | null>(null);
    const isTablet = useMediaQuery({ query: '(max-width: 1728px)' });

    return (
        <nav className={cls.nav}>
            <ul
                className={cn(cls.list, {
                    [cls.menuTablet]: isTablet,
                })}
            >
                <li className={cls.listItem}>
                    <a className={cls.link} href={'#'}>
                        Услуги
                        <img src={arrowUp} alt="открыть" />
                    </a>

                    <ul>
                        <li>
                            <a href="#">Разработка моб. приложений</a>
                        </li>

                        <li>
                            <a href="#">Разработка интернет-магазина</a>
                        </li>

                        <li>
                            <a href="#">SEO-продвижение</a>
                        </li>
                    </ul>
                </li>
                <li className={cls.listItem}>
                    <a className={cls.link} href="#">
                    Преимущества
                    </a>
                </li>
                <li className={cls.listItem}>
                    <a className={cls.link} href="#">
                        Портфолио
                    </a>
                </li>
                <li className={cls.listItem}>
                    <a className={cls.link} href="#">
                        Заказать
                    </a>
                </li>
            </ul>
        </nav>
    );
};
