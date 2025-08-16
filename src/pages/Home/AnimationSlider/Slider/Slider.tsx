import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { useEffect, useRef } from 'react';
import { SlideTitle } from './SlideTitle/SlideTitle';
import { SlideData } from '../slides';
import cn from 'classnames';
import 'swiper/css';
import styles from './Slider.module.scss';

interface SliderProps {
  slides: SlideData[];
  activeSlide: number;
  onSlideClick: (number: number, index: number) => void;
  baseSize: number;
  hoverSize: number;
  radius: number;
  prev: React.RefObject<HTMLButtonElement>;
  next: React.RefObject<HTMLButtonElement>;
  centerOffset: number;
  isHover: boolean;
  hoverIndex: number;
  onMouseEnter: (number: number) => void;
  onMouseLeave: () => void;
}

export const Slider = ({
  slides,
  activeSlide,
  onSlideClick,
  baseSize,
  hoverSize,
  radius,
  centerOffset,
  isHover,
  hoverIndex,
  onMouseEnter,
  onMouseLeave
}: SliderProps) => {
  const effectiveRadius = radius - (hoverSize - baseSize) / 2;
  const swiperRef = useRef<any>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const rotationRef = useRef(0);

  useEffect(() => {
    if (!swiperRef.current) return;

    const anglePerSlide = 360 / slides.length;
    const targetRotation = (-activeSlide + 1) * anglePerSlide;
    rotationRef.current = targetRotation;

    slideRefs.current.forEach((slide, index) => {
      if (!slide) return;
      
      slide.style.transform = `
        translate(-50%, -50%)
        rotate(${-targetRotation}deg)
      `;
    });

    console.log("Вращение: ", targetRotation)
  }, [activeSlide, slides.length]);

  return (
    <Swiper
      ref={swiperRef}
      modules={[Navigation]}
      slidesPerView="auto"
      centeredSlides={true}
      allowTouchMove={false}
      noSwiping={true}
      className={styles.swiperContainer}
      onSlideChange={(swiper) => {
        const progress = swiper.progress;
        const currentRotation = -progress * 360;
        rotationRef.current = currentRotation;
        
        slideRefs.current.forEach(slide => {
          if (slide) {
            slide.style.transform = `
              translate(-50%, -50%)
              rotate(${0}deg)
            `;
          }
        });
      }}
    >
      {slides.map((slide, index) => {
        const angle = -60 + (index * 360) / slides.length;
        const radian = angle * Math.PI / 180;
        const x = centerOffset + effectiveRadius * Math.cos(radian);
        const y = centerOffset + effectiveRadius * Math.sin(radian);

        const isActive = activeSlide === slide.number;
        const isHovered = isHover && hoverIndex === slide.number;

        return (
          <SwiperSlide
            className={cn(
              styles.swiperSlide, 
              isActive && styles['active'],
            )}
            key={slide.number}
            style={{
              position: 'absolute',
              left: `${x}px`,
              top: `${y}px`,
              width: `${baseSize}px`,
              height: `${baseSize}px`,
              transformOrigin: 'center center',
              zIndex: isActive ? 10 : isHovered ? 5 : 1,
            }}
            onClick={() => onSlideClick(slide.number, index)}
            onMouseEnter={() => onMouseEnter(slide.number)}
            onMouseLeave={onMouseLeave}
          >
            <div 
              ref={el => slideRefs.current[index] = el}
              className={styles.slideContent}
              style={{
                transform: 'translate(-50%, -50%)',
                width: '100%',
                height: '100%',
              }}
            >
              {(isHovered || isActive) && (
                <span>{slide.number}</span>
              )}
              { isActive && (<SlideTitle>{slide.title}</SlideTitle>) }
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};