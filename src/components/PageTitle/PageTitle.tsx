
import { CommonProps } from "@/types/commonProps"
import { Typography } from "@/components/Typography/Typography"
import { Flex } from "@/components/Flex/Flex"
import styles from "./PageTitle.module.scss"


export const PageTitle = ({ children } : CommonProps) => {
  return (
    <Flex className={styles.titleBlock}>
        <Typography tag="h2" variant="h2">{ children }</Typography>
    </Flex>
  )
}
