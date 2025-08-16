import { useEffect } from 'react';
import { gsap } from 'gsap';

interface AnimationProps {
  targetRef: React.RefObject<HTMLDivElement>;
  slideElements: HTMLElement[];
  activeIndex: number;
  slidesCount: number;
}

export const Animation = ({
  targetRef,
  slideElements,
  activeIndex,
  slidesCount
}: AnimationProps) => {
  useEffect(() => {
    if (!targetRef.current || !slideElements.length) return;

    const anglePerSlide = 360 / slidesCount;
    const targetRotation = -activeIndex * anglePerSlide;

    gsap.to(targetRef.current, {
      rotation: targetRotation,
      duration: 1,
      ease: "power2.out",
      transformOrigin: "center center",
    });

  }, [activeIndex, slidesCount, slideElements, targetRef]);

  return null;
};