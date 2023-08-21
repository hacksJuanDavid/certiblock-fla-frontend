import DashboardLayout from '@components/layout/dashboard-layout'
import DocumentIcon from '@components/icons/document-icon'
import { Button } from 'react-daisyui'
import { JsonContext } from '../../src/context/JsonContext'
import { useContext, useState } from 'react'
import CsvDownloadButton from 'react-json-to-csv'
import { CertiblockLogoIcon } from '@components/icons/certiblock-logo-icon'
import { AuthEmailContext } from '../../src/context/AuthContext'
import axios from 'axios'
import LoadingIcon from '@components/icons/loading-icon'
import Times from '@components/loading/times'
import StepsNavigator from '@components/steps/steps'
import { StepsContext } from '../../src/context/StepssContext'

export default function Process() {
  // state for data to download
  const [data, setData] = useState([])

  // get task id from json Context
  const { json } = useContext(JsonContext)

  // get token from auth context
  const { token } = useContext(AuthEmailContext)

  // create steps context
  const { createStateSteps7 } = useContext(StepsContext)

  //Create a new axios header and set the token
  const axiosConfig = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    timeout: 30000,
  }

  // check status of task every 10 seconds
  const interval = setInterval(async () => {
    try {
      // set state steps
      await createStateSteps7(true)

      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/flas/check/${json}`,
        axiosConfig,
      )
      if (res.data.status === 'completed') {
        setData(res.data.data)
        console.log(res.data.data)
        clearInterval(interval)
      }
    } catch (err) {
      console.log(err)
    }
  }, 10000)

  return (
    <>
      <DashboardLayout>
        {data.length === 0 ? (
          <Times />
        ) : (
          <>
            {/* Steps process */}
            <StepsNavigator />

            {/* Title process */}
            <div className="text-5xl font-bold text-center text-primary flex justify-center items-center mt-16 m-2">
              <h1>¡Proceso Completado!</h1>
            </div>

            {/*Hero contect */}
            <div className="hero">
              <div className="hero-content text-center">
                <div className="max-w-md">
                  <h2 className="text-lg text-neutral-content">
                    ID Produción:
                    <Button
                      size={'sm'}
                      color={'secondary'}
                      className="ml-2 break-all text-neutral-content"
                    >
                      {json.toString()}
                    </Button>
                  </h2>
                  <p className="py-6 text-white text-3xl text-center">
                    {data && data.length > 0
                      ? 'Ahora puedes imprimir los (ADL) en tu producción / QRs.'
                      : 'Procesando...'}
                  </p>
                  {/*Logo document */}
                  <div className="flex justify-center items-center">
                    <DocumentIcon />
                  </div>
                  {/*Buttons contect */}
                  <div className="card-actions flex justify-center items-center mt-4">
                    <CsvDownloadButton
                      data={data}
                      filename="qrscollection.csv"
                      className={`btn gap-2 w-64 rounded-full ${
                        data && data.length > 0
                          ? 'btn-secondary'
                          : 'btn-disabled'
                      }`}
                    >
                      {data && data.length > 0 ? (
                        <CertiblockLogoIcon width={'25'} height={'25'} />
                      ) : (
                        <LoadingIcon width={'25'} height={'25'} />
                      )}
                      Imprimir
                    </CsvDownloadButton>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </DashboardLayout>
    </>
  )
}
