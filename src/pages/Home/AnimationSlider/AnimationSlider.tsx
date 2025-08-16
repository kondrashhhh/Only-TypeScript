import { useState, useRef, useEffect } from 'react';
import { DatePeriod } from './Slider/DatePeriod/DataPeriod';
import { ArrowsContainer, ArrowButtonLeft, ArrowButtonRight } from './Slider/Arrows/ArrowsNav';
import { slides } from './slides';
import { Slider } from './Slider/Slider';
import { Animation } from './Animation/Animation';
import { BottomSlider } from './BottomSlider/BottomSlider';
import cn from 'classnames';
import styles from './AnimationSlider.module.scss';
import { useMediaQuery } from '@custom-react-hooks/use-media-query';

export const AnimationSlider = () => {
  const [isHover, setIsHover] = useState(false);
  const [hoverIndex, setHoverIndex] = useState(0);
  const [activeSlide, setActiveSlide] = useState(1);
  const baseSize = 6;
  const hoverSize = 56;
  const radius = 290;
  const centerOffset = 265;
  const sliderRef = useRef<HTMLDivElement>(null);
  const slideElements = useRef<HTMLElement[]>([]);

  const isMobile = useMediaQuery('(max-width: 680px)');

  const prev = useRef<HTMLButtonElement>(null);
  const next = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (sliderRef.current) {
      slideElements.current = Array.from(
        sliderRef.current.querySelectorAll('.swiper-slide')
      ) as HTMLElement[];
    }
  }, []);

  const handleSlideClick = (number: number) => {
    setActiveSlide(number);
  };

  const prevSlide = () => {
    if (activeSlide === 1) return;
    setActiveSlide(activeSlide - 1);
  }

  const nextSlide = () => {
    if (activeSlide === slides.length) return;
    setActiveSlide(activeSlide + 1);
  }

  const currentSlideIndex = slides.findIndex(slide => slide.number === activeSlide);

  return (
    <div className={styles.wrapper}>
      <div className={styles.sliderWrapper}>
        <div className={cn(styles.slider, "circle-slider")} ref={sliderRef}>
          <Slider
            slides={slides}
            activeSlide={activeSlide}
            onSlideClick={handleSlideClick}
            prev={prev}
            next={next}
            baseSize={baseSize}
            hoverSize={hoverSize}
            radius={radius}
            centerOffset={centerOffset}
            isHover={isHover}
            hoverIndex={hoverIndex}
            onMouseEnter={(number) => {
              setHoverIndex(number);
              setIsHover(true);
            }}
            onMouseLeave={() => setIsHover(false)}
          />
          
          <Animation
            targetRef={sliderRef}
            slideElements={slideElements.current}
            activeIndex={currentSlideIndex}
            slidesCount={slides.length}
          />
        </div>

        <DatePeriod
          periodStart={slides[activeSlide - 1]?.periodStart}
          periodEnd={slides[activeSlide - 1]?.periodEnd}
        />

        <div className={styles.line}></div>
      </div>

      {isMobile && (<BottomSlider slides={slides[activeSlide - 1].slides} name={slides[activeSlide - 1].title} />)}

      <ArrowsContainer activeSlide={activeSlide} totalSlides={slides.length}>
        <ArrowButtonLeft
         ref={prev}
         onClick={prevSlide}
         activeSlide={activeSlide}
        />
        <ArrowButtonRight
         ref={next} 
         onClick={nextSlide} 
         activeSlide={activeSlide} 
         totalSlides={slides.length} 
        />
      </ArrowsContainer>

      {!isMobile && (<BottomSlider slides={slides[activeSlide - 1].slides}/>)}
    </div>
  );
};