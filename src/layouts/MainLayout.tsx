import styles from "./MainLayout.module.scss";
import { CommonProps } from '@/types/commonProps';

export const MainLayout = ({ children }: CommonProps) => {
  return (
    <div className={styles.layout}>
        {children}
    </div>
  );
};  