import DashboardLayout from '@components/layout/dashboard-layout'
import dynamic from 'next/dynamic'
import StepsNavigator from '@components/steps/steps'

const CarouselImagesRones = dynamic(
  () => import('@components/carousel/carousel2'),
  {
    ssr: false,
  },
)

export default function Rones() {
  return (
    <DashboardLayout>
      {/* Steps process */}
      <StepsNavigator />

      {/* Carousel Images Rones"*/}
      <CarouselImagesRones />
    </DashboardLayout>
  )
}
