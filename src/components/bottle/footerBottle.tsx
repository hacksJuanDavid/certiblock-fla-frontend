import Image from 'next/image'
import WarningIcon from '@components/icons/warning-icon'
import { Button, Modal } from 'react-daisyui'
import { useState } from 'react'

// Require parameter open: boolean
export default function FooterBottle({ open }: { open: boolean }) {
  const [report] = useState('Denunciar')
  const [thanks] = useState('Denunciada')
  const [text, setText] = useState(report)
  const [visible, setVisible] = useState<boolean>(false) // Modal rewars form
  const [user_Ubicacion, set_User_Ubication] = useState<string>('') // Ubicación send to back-end point is user ping in the map

  //click change text denunciar for to thanks button
  const handleClickChangeText = () => {
    if (text === report) {
      setText(thanks)
      toggleVisible()
    } else {
      setText(report)
    }
  }

  // Close modal
  const toggleVisible = () => {
    setVisible(!visible) // Set state visible
  }

  //Get ubication person acept cookies
  const getUbication = () => {
    // Get location
    const onUbicationAccess = (ubication: any) => {
      set_User_Ubication(ubication) // Set state ubication
    }
    // Get error location
    const onErrorUbication = (err: any) => {
      console.log('Error obteniendo ubicación: ', err)
    }
    // option request location
    const optionRequest = {
      enableHighAccuracy: true, // Alta precisión
      maximumAge: 0, // No queremos caché
      timeout: 20000, // Esperar solo 5 segundos
    }

    // Request location
    navigator.geolocation.getCurrentPosition(
      onUbicationAccess, // Success
      onErrorUbication, // Error
      optionRequest, // Options
    )
    setVisible(!visible) // Set state visible modal close
  }

  //Component modal rewars form reclaim bottle
  function openComplaints() {
    return (
      <div className="font-sans flex">
        <Modal
          open={visible}
          className="justify-center items-center min-w-[200px] w-96 bg-base-200 outline"
          id="screen_view"
        >
          <Button
            size="sm"
            shape="circle"
            color="primary"
            className="absolute right-2 top-2"
            onClick={toggleVisible}
          >
            ✕
          </Button>
          <Modal.Header className="font-bold text-center text-2xl text-primary mt-4">
            ¿Seguro que deseas denunciar?
          </Modal.Header>

          <Modal.Body className="text-center">
            <div className="items-center justify-center flex m-2">
              <div>
                <div className="flex justify-center">
                  <WarningIcon />
                </div>
                <p className="text-lg text-center">
                  Tomamos muy enserio las denuncias, ya que nos ayudan a cuidar
                  la salud de todo el que le gusta este producto.
                </p>
                <span className="text-lg text-primary text-center">
                  Aceptar condiciones.
                </span>
              </div>
            </div>
          </Modal.Body>
          <Modal.Actions className="flex justify-center">
            <Button
              className="rounded-full text-xl w-60 text-white"
              color="error"
              id="button-denunciar"
              onClick={getUbication}
            >
              Denunciar
            </Button>
          </Modal.Actions>
        </Modal>
      </div>
    )
  }

  return (
    <>
      {/* //bottle component */}
      <div className="flex justify-center h-max -mb-14 mt-32 w-screen">
        <div className="p-16 bg-neutral text-base-content md:rounded-t-[4.5rem] w-screen">
          <div className="flex flex-col items-center">
            <h1 className="text-3xl font-bold text-primary text-center mb-8">
              Certificado Blockchain (ADL)
            </h1>

            <div className="flex justify-center p-2 scale-100 items-center mb-2 w-96">
              <Image
                src="/assets/logo-fla.png"
                alt="logo-fla"
                width={100}
                height={100}
                className="w-14 h-18 p-1"
              />
              <h1 className="text-white pt-4">
                <span className="text-primary animate-ping">......</span>
              </h1>
              <Image
                src="/assets/logo-sin-cuadro.png"
                alt="logo-light-green"
                width={100}
                height={100}
                className="w-14 h-18 p-1"
              />
              <h1 className="text-primary pt-4">
                <span className="text-primary animate-ping">......</span>
              </h1>
              <Image
                src="/assets/texto-certiblock.png"
                alt="logo-text-certiblock"
                width={90}
                height={100}
                className="mt-5 w-14 h-auto"
              />
            </div>

            <h1 className="text-2xl text-error font-bold mb-2">IMPORTANTE</h1>
            {open && (
              <>
                <p className="text-center flex flex-col items center justify-left p-2 mb-4">
                  Te están vendiendo este producto como si estuviera sellado.
                  Puedes denunciar con sólo tocar un botón.
                </p>
                <div className="justify-center mb-4">
                  <Button
                    onClick={handleClickChangeText}
                    className="btn rounded-full text-3xl text-white w-80 enabled:hover:bg-primary"
                    color="error"
                  >
                    {text === report ? report : thanks}
                    <WarningIcon />
                  </Button>
                  {text === thanks && openComplaints()}
                </div>
              </>
            )}
            <p className="text-center flex flex-col items center justify-left p-2">
              Asegurate estar siempre en:
              <span className="text-primary text-lg">www.certiblock.co</span>
              esto garantiza la legitimidad.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
