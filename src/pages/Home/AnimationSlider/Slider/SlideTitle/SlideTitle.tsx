import { CommonProps } from '@/types/commonProps';
import styles from './SlideTitle.module.scss';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';

export const SlideTitle = ({ children }: CommonProps) => {
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.8,
          delay: 0.9,
          ease: 'power2.out',
        }
      );
    }
  }, [children]);

  return (
    <div ref={titleRef} className={styles.title}>
      {children}
    </div>
  );
};