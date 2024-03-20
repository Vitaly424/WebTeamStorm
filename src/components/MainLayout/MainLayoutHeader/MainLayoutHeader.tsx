import cls from './MainLayoutHeader.module.scss';
import { Button } from '@/components/ui/Button/Button.tsx';
import { MainMenu } from '@/components/MainLayout/MainMenu/MainMenu.tsx';
import { Container } from '@/components/ui/Container/Container.tsx';
import { Logo } from '@/components/ui/Logo/Logo.tsx';
import { useMediaQuery } from 'react-responsive';
import cn from 'classnames';
import imageBurger from '@/app/assets/images/icons/burget-menu.svg';
import { MainMobileMenu } from '@/components/MainLayout/MainMenu/MainMobileMenu/MainMobileMenu.tsx';
import { useEffect, useState } from 'react';

export const MainLayoutHeader = () => {
    const [isMenuMobile, setIsMenuMobile] = useState(false);
    const isTablet = useMediaQuery({ query: '(max-width: 1728px)' });
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

    useEffect(() => {
        if (!isMobile) {
            setIsMenuMobile(false);
        }
    }, [isMobile]);

    return (
        <header
            className={cn(cls.header, {
                [cls.headerMobile]: isTablet,
            })}
        >
            {isTablet ? (
                <div className={cls.headerTabletInner}>
                    <Container>
                        <div className={cls.mobileLogo}>
                            <Logo />

                            <Button className={cls.button} size={'small'}>
                                Связаться с нами
                            </Button>

                            <button
                                className={cls.burger}
                                onClick={() => setIsMenuMobile(true)}
                            >
                                <img src={imageBurger} alt={'Burger'} />
                            </button>
                        </div>
                    </Container>

                    <div className={cls.border}>
                        <Container>
                            <MainMenu />
                        </Container>
                    </div>
                </div>
            ) : (
                <Container>
                    <div className={cls.headerInner}>
                        <Logo className={cls.desktopLogo}/>
                        <MainMenu />
                        <Button className={cls.button} size={'average'}>
                            Связаться с нами
                        </Button>
                    </div>
                </Container>
            )}

            {isMobile && (
                <MainMobileMenu
                    isMenuMobile={isMenuMobile}
                    onClick={setIsMenuMobile}
                />
            )}
        </header>
    );
};
