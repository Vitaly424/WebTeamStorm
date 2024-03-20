import { Title } from '@/components/ui/Title/Title.tsx';
import cls from './PortfolioSliderItem.module.scss';
import { Button } from '@/components/ui/Button/Button.tsx';
import imgLoop from '@/app/assets/images/portfolio-slider/loop.png';
import { useMediaQuery } from 'react-responsive';
import { Task } from '@/utils/constants/portfolio/type.ts';

interface PortfolioSliderItemProps {
    imageUrl: string;
    imageTablet: string;
    title: string;
    assignedTasks: string;
    listTask: Task[];
    deadline: string;
}

export const PortfolioSliderItem = (props: PortfolioSliderItemProps) => {
    const isTablet = useMediaQuery({ query: '(max-width: 1728px)' });
    const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

    const { imageUrl, title, imageTablet, assignedTasks, listTask, deadline } =
        props;

    return (
        <div className={cls.item}>
            <div className={cls.wrappeqrImage}>
                {isMobile ? (
                    <img
                        className={cls.imageCase}
                        src={imageUrl}
                        alt="Работа"
                    />
                ) : (
                    <img
                        className={cls.imageCase}
                        src={isTablet ? imageTablet : imageUrl}
                        alt="Работа"
                    />
                )}
                <button type={'button'}>
                    <img
                        className={cls.magnifying}
                        src={imgLoop}
                        alt="Увеличение"
                    />
                </button>
            </div>
            <div className={cls.content}>
                <Title className={cls.title} size={'s'}>
                    {title}
                </Title>

                <p className={cls.titleTask}>{assignedTasks}</p>

                <ul className={cls.listTask}>
                    {listTask.map((item) => (
                        <li key={item.id}>{item.label}</li>
                    ))}
                </ul>

                <p className={cls.deadline}>
                    Срок выполнения работы: <span>{deadline}</span>{' '}
                </p>

                <Button className={cls.btn}>Оставить заявку</Button>
            </div>
        </div>
    );
};
