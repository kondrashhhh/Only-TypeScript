import { CommonProps } from '@/types/commonProps';
import cn from 'classnames';
import styles from './Typography.module.scss';

type AllowedTags = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';

interface Props extends CommonProps {
    tag: AllowedTags; 
    variant: string;
}

export const Typography = ({ 
    tag: Tag, 
    variant, 
    className, 
    children 
}: Props) => {
    const Component = Tag as keyof JSX.IntrinsicElements;
    
    return (
        <Component className={cn(styles.title, styles[variant], className)}>
            {children}
        </Component>
    );
};