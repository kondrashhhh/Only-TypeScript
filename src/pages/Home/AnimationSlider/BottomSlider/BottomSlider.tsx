import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperCore } from 'swiper';
import { Pagination } from 'swiper/modules';
import { useMediaQuery } from '@custom-react-hooks/use-media-query';
import { SlideItem } from '../slides';
import ArrowRight from './ArrowRight.svg';
import gsap from 'gsap';
import 'swiper/css';
import 'swiper/css/pagination';
import styles from './BottomSlider.module.scss';

interface Props {
  slides: SlideItem[];
  name?: string;
}

export const BottomSlider = ({ slides, name = '' }: Props) => {
  const swiperRef = useRef<SwiperCore | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<gsap.core.Tween[]>([]);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const isMobile = useMediaQuery('(max-width: 680px)');

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(0);
    }
  }, [slides]);

    useEffect(() => {
    const elementsToAnimate: HTMLElement[] = []; 
    if (containerRef.current) elementsToAnimate.push(containerRef.current);
    if (nameRef.current && isMobile) elementsToAnimate.push(nameRef.current);

    if (elementsToAnimate.length === 0) return;

    gsap.set(elementsToAnimate, {
        opacity: 0,
        y: 10
    });

    animationRef.current = elementsToAnimate.map(el => 
        gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 0.2,
        ease: 'power2.out'
        })
    );

    return () => {
        animationRef.current.forEach(anim => anim?.kill());
        animationRef.current = []; 
    };
    }, [slides, isMobile]);

  const handlePrev = () => swiperRef.current?.slidePrev();
  const handleNext = () => swiperRef.current?.slideNext();

  const updateNavigation = () => {
    if (swiperRef.current) {
      setIsBeginning(swiperRef.current.isBeginning);
      setIsEnd(swiperRef.current.isEnd);
    }
  };

  return (
    <>
      {isMobile && (
        <div ref={nameRef} className={styles.title}>
          {name}
        </div>
      )}
      <div ref={containerRef} className={styles.container}>
        <Swiper
          className={styles.slider}
          modules={[Pagination]}
          slidesPerView={1.5}
          spaceBetween={30}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            updateNavigation();
          }}
          onSlideChange={updateNavigation}
          speed={400}
          pagination={isMobile ? { clickable: true } : false}
          breakpoints={{
            680: {
              slidesPerView: 2,
              pagination: false,
              spaceBetween: 80
            },
            992: {
              slidesPerView: 3,
              spaceBetween: 80
            }
          }}
        >
          {slides.map((slide, index) => (
            <SwiperSlide className={styles.slide} key={index}>
              <div className={styles.slideTitle}>{slide.year}</div>
              <div className={styles.slideContent}>{slide.text}</div>
            </SwiperSlide>
          ))}
        </Swiper>

        {!isMobile && (
          <div className={styles.navigation}>
            {!isBeginning && (
              <button 
                className={styles.prev}
                onClick={handlePrev}
                aria-label="Previous slide"
                disabled={isBeginning}
              >
                <img src={ArrowRight} alt="Previous" />
              </button> 
            )}
          
            {!isEnd && (
              <button 
                className={styles.next}
                onClick={handleNext}
                aria-label="Next slide"
                disabled={isEnd}
              >
                <img src={ArrowRight} alt="Next" />
              </button>
            )}
          </div>
        )}
      </div>
    </>
  );
};