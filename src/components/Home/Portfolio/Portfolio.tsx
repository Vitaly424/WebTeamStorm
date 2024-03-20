import { Title } from '@/components/ui/Title/Title.tsx';
import { Container } from '@/components/ui/Container/Container.tsx';
import cls from './Portfolio.module.scss';
import { PortfolioSlider } from './PortfolioSlider/PortfolioSlider.tsx';

export const Portfolio = () => {
    return (
        <section className={cls.section}>
            <Container className={cls.portfolioContainer}>
                <Title className={cls.title}>наши проекты</Title>
                <PortfolioSlider className={cls.portfolio} />
            </Container>
        </section>
    );
};
