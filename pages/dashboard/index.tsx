import type { NextPage } from 'next'
import DashboardLayout from '@components/layout/dashboard-layout'
import GetBottle from '@components/getbottle/getbottle'
import StepsNavigator from '@components/steps/steps'

const Home: NextPage = () => {
  // create context stepts

  return (
    <DashboardLayout>
      {/* Steps process */}
      <StepsNavigator />

      {/* Title */}
      <h1 className="text-5xl font-bold text-primary text-center m-4">
        Escoge el producto:
      </h1>

      {/* Get bottle"*/}
      <GetBottle />
    </DashboardLayout>
  )
}

export default Home
