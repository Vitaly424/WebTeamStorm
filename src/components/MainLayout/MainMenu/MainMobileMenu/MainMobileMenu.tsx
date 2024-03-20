import { Logo } from '@/components/ui/Logo/Logo.tsx';
import cls from './MainMobileMenu.module.scss';
import cn from 'classnames';
import imageBurger from '@/app/assets/images/icons/burger-close.svg';
import { Container } from '@/components/ui/Container/Container.tsx';
import arrowUp from '@/app/assets/images/icons/arrow-mobile-menu.svg';
import { Button } from '@/components/ui/Button/Button.tsx';
import { useEffect, useState } from 'react';
import { socials } from '@/utils/constants/socials/socials.ts';

interface MainMobileMenuProps {
    isMenuMobile: boolean;
    onClick: (isOpen: boolean) => void;
}

export const MainMobileMenu = (props: MainMobileMenuProps) => {
    const { isMenuMobile, onClick } = props;
    const [isServices, setIsServices] = useState(false);

    const onScrollBody = () => {
        const body = document.querySelector('body');

        if (!body) {
            return;
        }

        if (isMenuMobile) {
            body.style.overflow = 'hidden';
            return;
        }

        body.style.overflow = 'auto';
    };

    useEffect(() => {
        onScrollBody();
    }, [isMenuMobile, onScrollBody]);

    return (
        <div
            className={cn(cls.mobileMenu, {
                [cls.isOpenMenu]: isMenuMobile,
            })}
        >
            <Container>
                <div className={cls.top}>
                    <Logo color={'white'} />

                    <button
                        className={cls.burgerClose}
                        onClick={() => onClick(false)}
                    >
                        <img src={imageBurger} alt={'Burger'} />
                    </button>
                </div>

                <nav className={cls.nav}>
                    <ul className={cls.navList}>
                        <li
                            className={cn(cls.navItem, {
                                [cls.shopMenuServices]: isServices
                             })}
                            onClick={() => setIsServices(prev => !prev)}
                        >
                            <a className={cls.navLink} href="#">
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
                        <li className={cls.navItem}>
                            <a className={cls.navLink} href="#">
                                Преимущества
                            </a>
                        </li>
                        <li className={cls.navItem}>
                            <a className={cls.navLink} href="#">
                                Портфолио
                            </a>
                        </li>
                        <li className={cls.navItem}>
                            <a className={cls.navLink} href="#">
                                Заказать
                            </a>
                        </li>
                    </ul>
                </nav>

                <Button size={'extra-small'}>Связаться с нами</Button>

                <div className={cls.info}>
                    <div className={cls.socials}>
                        {socials.map(item => (
                            <a href={item.link}>
                                <img key={item.id} src={item.url} alt={item.alt} />
                            </a>
                        ))}
                    </div>

                    <p className={cls.operatingMode}>
                        {' '}
                        Режим работы: <br /> пн-пт 09:00-18:00
                    </p>

                    <a className={cls.phone} href={'tel:+79289566198'}>
                        Номер телефона: <br /> +7 (928) 956-61-98
                    </a>

                    <p className={cls.email}>
                        Email: <br />
                        <a href="mailto:webteamstorm@gmail.com">
                            webteamstorm@gmail.com
                        </a>{' '}
                    </p>
                </div>
            </Container>
        </div>
    );
};
