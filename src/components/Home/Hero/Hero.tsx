import { Title } from '@/components/ui/Title/Title.tsx';
import { Button } from '@/components/ui/Button/Button.tsx';
import cls from './Hero.module.scss';
import laptop from '@/app/assets/images/hero/laptop.jpg';
import { useMediaQuery } from 'react-responsive';
import { InfoBlock } from '@/components/InfoBlock/InfoBlock.tsx';

export const Hero = () => {
    const isTablet = useMediaQuery({ query: '(max-width: 1728px)' });

    return (
        <div className={cls.hero}>
            <div className={cls.left}>
                <Title className={cls.title} size={'l'}>
                    Лендинг для <br /> вашего бизнеса <br />{' '}
                    <span>за 10 дней</span>{' '}
                </Title>
                <p className={cls.subtitle}>Гарантируем увеличение выручки!</p>
                <Button className={cls.btn}>Оставить заявку</Button>
            </div>
            <div className={cls.right}>
                {!isTablet && (
                    <InfoBlock />
                )}
                <img className={cls.imgLaptop} src={laptop} alt="Ноутбук" />
            </div>

            {isTablet && (
                <InfoBlock />
            )}
        </div>
    );
};
