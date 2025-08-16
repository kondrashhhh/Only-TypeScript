import cn from 'classnames';
import styles from './ArrowsContainer.module.scss';

interface Props {
    activeSlide: number;
    totalSlides: number;
    className?: string;
    children: React.ReactNode
}


export const ArrowsContainer = (({ activeSlide, totalSlides, className, children }: Props) => (
    <div className={styles.wrapper}>
        <span className={styles.counter}>
            {`0${activeSlide} / 0${totalSlides}`}
        </span>
        <div className={cn(styles.container, className)}>
            {children}
        </div>
    </div>
));