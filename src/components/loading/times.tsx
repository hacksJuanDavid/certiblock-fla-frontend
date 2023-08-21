import Image from 'next/image'
import LoadingIcon from '@components/icons/loading-icon'

export default function Times() {
  return (
    <>
      {/* Logo certiblock */}
      <div className='flex justify-center m-4'>
        <Image
          src='/assets/logo-sin-cuadro.png'
          alt='logo-certiblock'
          width={170}
          height={100}
          priority={true}
          className='w-auto h-auto'
        />
      </div>
        {/* Title times */}
      <div className='text-5xl font-bold text-center text-primary flex justify-center items-center mt-16'>
        <h1>Tu documento está en proceso de integracion a la blockchain</h1>
      </div>

        {/*Hero contect */}
      <div className='hero max-h-screen mt-16'>
        <div className='hero-content text-center'>
          <div className='max-w-md'>
            <h2 className='text-2xl text-white mt-4'>
              Tiempo Estimado: 42 segundos
            </h2>
            <p className='py-6 text-white text-3xl'>
              Puede tardar unos minutos, por favor espere...
            </p>
            {/*Logo document */}
            <div className='flex justify-center items-center'>
              <LoadingIcon className={'w-20 h-20'} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
