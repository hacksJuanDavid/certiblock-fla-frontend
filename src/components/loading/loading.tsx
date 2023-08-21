/* eslint-disable @next/next/no-img-element */
import Navbar from '@components/navbar/navbar'
import Footer from '@components/footer/footer'
import Image from 'next/image'

export default function Loading() {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Loading container */}
      <div
        className="hero min-h-screen bg-center bg-cover bg-fixed bg-no-repeat -mb-14"
        style={{
          backgroundImage: `url("/assets/background4.png")`,
        }}
      >
        <div className="hero-content text-center text-white">
          <div className="max-w-md">
            <h1 className="text-2xl font-bold pb-8">
              Puede tardar unos segundos
            </h1>

            {/* container button carge */}
            <div className="flex justify-center m-2">
              <button className="btn loading text-white text-xl bg-primary rounded-full">
                Cargando...
              </button>
            </div>

            {/*container video gif certiblock*/}
            <div className="flex justify-center">
              <Image
                src="/assets/video-certiblock-gif.gif"
                alt="GIF"
                className="shadow-2xl"
                width={384}
                height={384}
              />
            </div>
            {/*progress line loading certiblock*/}
            <progress className="progress w-46 bg-primary p-2 my-4 mb-12"></progress>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  )
}
