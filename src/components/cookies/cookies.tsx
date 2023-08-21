import { Button, Modal } from 'react-daisyui'
import InfoIcon from '@components/icons/info-icon'
import { useState } from 'react'
import { useCookies } from 'react-cookie'
import { useContext } from 'react'
import { AuthEmailContext } from '../../context/AuthContext'
import Script from 'next/script'
const { v4: uuidv4 } = require('uuid')

export default function Coookies() {
  //use context auth
  const user = useContext(AuthEmailContext)
  // Close modal
  const toggleVisible = () => {
    setVisible(!visible) // Set state visible
  }
  // Get user agent
  const getUA = () => {
    //detectar dispositive
    let device = 'Unknown'
    //Tipes of devices
    const ua: any = {
      'Generic Linux': /Linux/i,
      Android: /Android/i,
      BlackBerry: /BlackBerry/i,
      Bluebird: /EF500/i,
      'Chrome OS': /CrOS/i,
      Datalogic: /DL-AXIS/i,
      Honeywell: /CT50/i,
      iPad: /iPad/i,
      iPhone: /iPhone/i,
      iPod: /iPod/i,
      macOS: /Macintosh/i,
      Windows: /IEMobile|Windows/i,
      Zebra: /TC70|TC55/i,
    }
    //Detect device object
    Object.keys(ua).map((v) => navigator.userAgent.match(ua[v]) && (device = v))
    return device
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
  }

  //state
  const [visible, setVisible] = useState<boolean>(true) // Modal cookies
  const [cookies, setCookie] = useCookies(['certiblock']) // Cookies
  const [id] = useState<string>(uuidv4()) // User id
  const [user_isLogged] = useState<boolean>(user.isLogged) // User is logged
  const [user_Device] = useState<string>(getUA()) // User device
  const [user_Ubicacion, set_User_Ubication] = useState<string>('') // Ubicación send to back-end point is user ping in the map

  // Acept cookies
  const handleAcceptCookies = () => {
    getUbication() // Get ubication
    setVisible(false) // Close modal
    setCookie('certiblock', id, { path: '/' }) // Set cookie user id
    setCookie('certiblock', user_isLogged, { path: '/' }) // Set cookie user is logged
    setCookie('certiblock', user_Device, { path: '/' }) // Set cookie user device
  }

  return (
    <>
      {/* Analitics cookies */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-J83ZNLRC6M"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('set', 'cookies', '${cookies}');
          gtag('set', 'user_ubicacion', '${user_Ubicacion}');
          gtag('set', {
            'page_title': 'Cookies Certiblock',
            'page_location': 'https://certiblock.co'
          });
          gtag('event', 'screen_view', {
            'app_name': 'certiblock',
            'screen_name': 'cookies'
          });
          gtag('config', 'G-J83ZNLRC6M', {
            'user_id': 'id',
            },);
        `}
      </Script>

      {/* Cookies Componet*/}
      {/* if cookies is null show modal */}
      {cookies.certiblock === undefined ? (
        <div className="font-sans flex">
          <Modal
            open={visible}
            className="justify-center items-center min-w-[200px] w-96"
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
            <Modal.Header className="font-bold text-center text-2xl text-primary">
              COOKIES
            </Modal.Header>

            <Modal.Body className="text-center">
              <div className="items-center justify-center flex">
                <InfoIcon />
              </div>
              Esta página web contiene cookies para mejorar tu experiencia,
              <a className="link link-primary p-1">Politíca de cookies.</a>
            </Modal.Body>
            <Modal.Actions className="flex justify-center">
              <Button
                className="rounded-full text-xl"
                color="primary"
                id="button-cookies"
                onClick={handleAcceptCookies}
              >
                Entendido
              </Button>
            </Modal.Actions>
          </Modal>
        </div>
      ) : (
        ''
      )}
    </>
  )
}
