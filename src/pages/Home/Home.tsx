import { PageTitle } from "@/components/PageTitle/PageTitle"
import { AnimationSlider } from "./AnimationSlider/AnimationSlider"
import styles from "./Home.module.scss"

export const Home = () => {
  return (
    <div className={styles.home}>
        <PageTitle>Исторические <br /> даты</PageTitle>
        <AnimationSlider />
    </div>
  )
}
