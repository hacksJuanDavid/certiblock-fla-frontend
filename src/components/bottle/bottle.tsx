import Footer from '../footer/footer'
import NavbarNotLogue from '@components/navbar/navbar-not-logue'
import Coookies from '@components/cookies/cookies'
import FooterBottle from './footerBottle'
import BottleAttribute from './bottleAttribute'
import { DateTime } from 'luxon'
import Script from 'next/script'
import Image from 'next/image'
import EyeBIcon from '@components/icons/eye-b-icon'
import BottleRewars from './bottleRewars'

// require the next parameter:
// image: string
// name: string
// read: date
// views: number
// created: date
// years: number
// sugar: string
// lote: string
// mililiters: number
// reference: string

export default function Bottle({
  image,
  name,
  read,
  views,
  created,
  years,
  sugar,
  lote,
  mililiters,
  reference,
  city,
}: {
  image: string
  name: string
  read: boolean
  views: number
  created: string
  years: number
  sugar: string
  lote: string
  mililiters: number
  reference: string
  city: string
}) {
  return (
    <>
      {/* //google analytics service */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-P7RPMBKYFH"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-P7RPMBKYFH');
        `}
      </Script>
      {/*//navbar */}
      <NavbarNotLogue />

      {/* //Cookies */}
      <Coookies />

      {/* //ubottle hero component */}
      <div className="hero bg-base-100 bg-cover bg-center bg-no-repeat bg-fixed h-screen -mb-16 pb-20 flex justify-center">
        {/* //container grid */}
        <div className="grid">
          {/* //hero container bottle and logo certiblock */}
          <div className="hero-content justify-center mt-32">
            {/* //container img bottle */}
            <div className="">
              <Image
                src={image}
                alt="bottle"
                className="xs:min-w-min xs:min-h-min rounded-lg shadow-2xl"
                width={112}
                height={112}
                priority={true}
              />
            </div>
            {/* //container img logo */}
            <div className="">
              <Image
                src={views > 0 ? '/assets/red.png' : '/assets/green.png'}
                alt="Logo"
                width={112}
                height={112}
                className="xs:min-w-min xs:min-h-min"
              />
            </div>
          </div>

          <div className="hero-content flex-col lg:flex-col mt-2 ">
            <h1 className="text-1xl font-bold text-center">
              {views > 0
                ? 'BOTELLA PREVIAMENTE ABIERTA'
                : 'BOTELLA SEGURA PARA CONSUMIR'}
            </h1>

            <div className="flex justify-center space-x-4">
              <Image
                src="/assets/logo-fla.png"
                alt="logo-fla"
                width={100}
                height={100}
                className=""
              />
            </div>

            <div className="justify-center">
              <div className="btn btn-primary rounded-full">
                Autorizada para ciudad {city}
                <EyeBIcon />
                <span className="btn-text m-1 mt-1">{views}</span>
              </div>
            </div>
          </div>

          {/*//bottle Attributes*/}
          <BottleAttribute
            mililiters={mililiters}
            sugar={sugar}
            years={years}
            open={views > 0}
            name={name}
            reference={reference}
            read={read}
            lote={DateTime.fromISO(lote).toFormat('dd/MM/yyyy')}
            city={city}
          />
          <div>
            <h1 className="text-sm text-center font-bold text-primary m-2">
              Prohibido el expendido de alcohol a menores de edad.
            </h1>
            <h1 className="text-sm text-center font-bold text-primary m-2">
              El exceso de alcohol es perjudicial para la salud.
            </h1>
          </div>
        </div>
      </div>

      {/*bottle rewars*/}
      <BottleRewars />

      {/*//FooterBottle */}
      <FooterBottle open={views > 0} />

      {/*//Footer */}
      <Footer />
    </>
  )
}
