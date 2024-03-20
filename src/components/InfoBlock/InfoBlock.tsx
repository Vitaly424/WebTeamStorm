import cls from './InfoBlock.module.scss';

export const InfoBlock = () => {
    return (
        <div className={cls.list}>
            <p className={cls.item}>
                Более <span>7</span> лет на рынке
            </p>
            <p className={cls.item}>
                <span>100+</span> реализованных проектов
            </p>
            <p className={cls.item}>
                <span>10%</span> минимальный рост выручки
            </p>
        </div>
    );
};
