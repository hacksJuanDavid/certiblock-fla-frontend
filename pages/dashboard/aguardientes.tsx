import DashboardLayout from '@components/layout/dashboard-layout'
import dynamic from 'next/dynamic'
import StepsNavigator from '@components/steps/steps'

const CarouselImagesAguardientes = dynamic(
  () => import('@components/carousel/carousel'),
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
      <CarouselImagesAguardientes />
    </DashboardLayout>
  )
}
