import { Button,Input } from 'react-daisyui'

export default function Subcription() {
  return (
    <>
      {/*//Subcription component*/}
      <div className="flex justify-center h-80 -mb-14">
        <div className="p-16 bg-neutral text-base-content rounded-t-[4.5rem] w-screen">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold">Suscribete</h1>
            <Input
              type="text"
              placeholder="E-mail"
              min="1"
              className="input rounded-full input-primary w-full max-w-xs my-2"
            />
            <Button
              color="primary"
              fullWidth
              onClick={() => alert('Click Suscribir')}
              className="rounded-full text-xl w-64 h-16 my-2"
            >
              ENVIAR
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
