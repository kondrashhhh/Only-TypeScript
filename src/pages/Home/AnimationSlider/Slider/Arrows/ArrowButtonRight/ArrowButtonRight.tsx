import React from 'react';
import cn from 'classnames';
import arrowRight from './ArrowRight.svg'
import styles from './ArrowButtonRight.module.scss';

interface ButtonProps {
  activeSlide: number,
  totalSlides: number,
  onClick: () => void;
}

export const ArrowButtonRight = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ onClick, activeSlide, totalSlides }, ref) => {
	const isDisabled = activeSlide === totalSlides;
    return (
      <button
        ref={ref}
        className={cn(
          styles.btn, 
		  {          
			[styles.isDisabled]: isDisabled
		  }
        )}
        type="button"
        onClick={() => onClick()}
        aria-label="Previous slide"
      >
        <img src={arrowRight} alt="Right arrow" className={styles.icon} />
      </button>
    );
  }
);

ArrowButtonRight.displayName = 'ArrowButtonRight';