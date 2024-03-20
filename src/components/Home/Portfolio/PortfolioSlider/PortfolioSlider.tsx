import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper';
import { Navigation } from 'swiper/modules';
import cn from 'classnames';

import { PortfolioSliderItem } from '../PortfolioSliderItem/PortfolioSliderItem.tsx';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import arrowSlider from '@/app/assets/images/icons/arrowSlider.svg';
import cls from './PortfolioSlider.module.scss';
import { useMediaQuery } from 'react-responsive';
import { portfolioList } from '@/utils//constants/portfolio/portfolio.ts';

interface PortfolioSliderProps {
    className?: string;
}

export const PortfolioSlider = (props: PortfolioSliderProps) => {
    const { className } = props;
    const [isShowPrev, setIsShowPrev] = useState(false);
    const [isShowNext, setIsShowNext] = useState(false);
    const swiperRef = useRef<SwiperType>();
    const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

    useEffect(() => {
        setIsShowPrev(true);
    }, [isMobile]);

    const onChangeSlider = (swiper: SwiperType) => {
        if (isMobile) {
            setIsShowPrev(true);
            setIsShowNext(false);
        } else {
            if (swiper.slides.length - 1 === swiper.activeIndex) {
                setIsShowNext(true);
            } else {
                setIsShowNext(false);
            }

            if (!swiper.activeIndex) {
                setIsShowPrev(true);
            } else {
                setIsShowPrev(false);
            }
        }
    };

    return (
        <div className={className}>
            <div className={cls.swiper}>
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={50}
                    slidesPerView={1}
                    onBeforeInit={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    loop={isMobile ? true : false}
                    onSwiper={() => console.log('onSWIPER')}
                    onSlideChange={(swiper) => onChangeSlider(swiper)}
                    className={cls.swiper}
                >
                    {portfolioList.map((item) => (
                        <SwiperSlide key={item.id}>
                            <PortfolioSliderItem
                                imageUrl={item.imageUrl}
                                imageTablet={item.imageTablet}
                                assignedTasks={item.assignedTasks}
                                title={item.title}
                                deadline={item.deadline}
                                listTask={item.listTask}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>

                <button
                    onClick={() => swiperRef.current?.slidePrev()}
                    className={cn(
                        cls.sliderController,
                        cls.sliderControllerPrev,
                        {
                            [cls.isShowPrev]: isShowPrev,
                        },
                    )}
                >
                    <img src={arrowSlider} alt={'Кнопка назад'} />
                </button>
                <button
                    onClick={() => swiperRef.current?.slideNext()}
                    className={cn(
                        cls.sliderController,
                        cls.sliderControllerNext,
                        {
                            [cls.isShowNext]: isShowNext,
                        },
                    )}
                >
                    <img src={arrowSlider} alt={'Кнопка вперёд'} />
                </button>
            </div>
        </div>
    );
};
