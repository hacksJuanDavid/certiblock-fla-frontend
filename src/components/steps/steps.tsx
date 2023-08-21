import { useRouter } from 'next/router'
import { useContext} from 'react'
import { Steps } from 'react-daisyui'
import { StepsContext } from '../../context/StepssContext'

export default function StepsNavigator() {
  // create context stepts
  const { step1, step2, step3, step4, step5, step6, step7} = useContext(StepsContext)

  // use next router
  const router = useRouter()

  // Handle button click for steps redirect to back page
  const handleBack1 = async () => {
    //redirect to previous page
    await router.push('/dashboard')
  }
  // Handle button click for steps redirect to next page
  const handleNext2 = async () => {
    //redirect to next page
    await router.push('/dashboard/form')
  }
  // Handle button click for steps redirect to next page
  const handleNext3 = async () => {
    //redirect to next page
    await router.push('/dashboard/rewars')
  }
  // Handle button click for steps redirect to next page
  const handleNext4 = async () => {
    //redirect to next page
    await router.push('/dashboard/attributes')
  }
  // Handle button click for steps redirect to next page
  const handleNext5 = async () => {
    //redirect to next page
    await router.push('/dashboard/conditions')
  }
  // Handle button click for steps redirect to next page
  const handleNext6 = async () => {
    //redirect to next page
    await router.push('/dashboard/aprobe')
  }
  // Handle button click for steps redirect to next page
  const handleNext7 = async () => {
    //redirect to next page
    await router.push('/dashboard/process')
  }

  return (
    <>
      {/* Steps process */}
      <Steps className="flex justify-center mt-8">
        <ul className="steps fla-steps text-2xl m-2 p-2 w-11/12">
          <li
            className={step1 ? 'step step-primary cursor-pointer' : 'step'}
            onClick={handleBack1}
          ></li>
          <li
            className={step2 ? 'step step-primary cursor-pointer' : 'step'}
            onClick={handleNext2}
          ></li>
          <li
            className={step3 ? 'step step-primary cursor-pointer' : 'step'}
            onClick={handleNext3}
          ></li>
          <li
            className={step4 ? 'step step-primary cursor-pointer' : 'step'}
            onClick={handleNext4}
          ></li>
          <li
            className={step5 ? 'step step-primary cursor-pointer' : 'step'}
            onClick={handleNext5}
          ></li>
          <li
            className={step6 ? 'step step-primary cursor-pointer' : 'step'}
            onClick={handleNext6}
          ></li>
          <li
            className={step7 ? 'step step-primary cursor-pointer' : 'step'}
            onClick={handleNext7}
          ></li>
        </ul>
      </Steps>
    </>
  )
}
