import { MainLayout } from "@/layouts/MainLayout"
import { Container } from '@/components/Container/Container'
import { Home } from "@/pages/Home/Home"

export const App = () => {
  return (
    <MainLayout>
      <Container>
        <Home />
        {/* Если страница не одна, то можем сюда React Router засунуть, вместо <Home /> */}
      </Container>
    </MainLayout>
  )
}

