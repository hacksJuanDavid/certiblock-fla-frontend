import Image from 'next/image'
import { Button,Input } from 'react-daisyui'

export default function Reclaim() {
  return (
    <>
      {/*//Reclaim component*/}
      <div className="flex justify-center h-max -mb-14">
        <div className="p-16 bg-neutral text-base-content md:rounded-t-[4.5rem] w-screen">
          <div className="flex flex-col items-center ">
            <h1 className="text-5xl font-bold text-primary">Importante</h1>
            <Image
              src="/assets/logo-light.png"
              alt="logo-certiblock"
              width={100}
              height={30}
              className="p-6 w-24 h-30"
            />
            <p className="text-center flex flex-col items center justify-left p-2 text-success">
              Ingresa el correo con el que solicitaste tu documento en la
              entidad, empresa o institución que te lo otorgó.
            </p>
            <p className="text-center flex flex-col items center justify-left p-2 text-success">
              A tu correo también llegará un mensaje para que puedas reclamar tu
              documento seguro.
            </p>
            <Input
              type="text"
              placeholder="E-mail"
              className="input rounded-full input-primary w-full max-w-xs my-2"
              min="1"
            />
            <Button
              onClick={() => alert('Click Reclamar')}
              className="btn-xs rounded-full sm:btn-sm md:btn-md lg:btn-lg w-full max-w-xs my-2"
              color="primary"
            >
              RECLAMAR
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
