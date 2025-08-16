import { CommonProps } from "@/types/commonProps"
import cn from "classnames"
import styles from "./Flex.module.scss"

export const Flex = ({ className, children } : CommonProps) => {
  return (
    <div className={cn(styles.flex, className ? className : '')}>
        { children }
    </div>
  )
}
