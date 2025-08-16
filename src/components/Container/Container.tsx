import { Lines } from "./Lines/Lines"
import { useMediaQuery } from '@custom-react-hooks/use-media-query';
import styles from "./Container.module.scss"
import { CommonProps } from '@/types/commonProps'

export const Container = ({ children }: CommonProps) => {
  const isSmall = useMediaQuery(`(max-width: 680px)`);
  
  return (
    <div className={styles.container}>
        {!isSmall && (<Lines />)}
        { children }
    </div>
  )
}
