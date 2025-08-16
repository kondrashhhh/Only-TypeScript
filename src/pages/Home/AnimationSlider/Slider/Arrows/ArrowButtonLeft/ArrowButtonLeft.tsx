import React from 'react';
import cn from 'classnames';
import arrowLeft from './ArrowLeft.svg';
import styles from './ArrowButtonLeft.module.scss';

interface ButtonProps {
  isDisabled?: boolean;
  activeSlide: number;
  onClick: () => void;
}

export const ArrowButtonLeft = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ onClick, activeSlide }, ref) => {
	const isDisabled = activeSlide === 1;
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
        onClick={onClick}
        aria-label="Previous slide"
      >
        <img 
          src={arrowLeft} 
          className={styles.icon}
        />
      </button>
    );
  }
);

ArrowButtonLeft.displayName = 'ArrowButtonLeft';