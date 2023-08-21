import Image from 'next/image'
import { Button, Modal, Input } from 'react-daisyui'
import { useState } from 'react'
import InfoIcon from '@components/icons/info-icon'
import { EyeOff } from '@components/icons/eye-off-icon'
import { Eye } from '@components/icons/eye-icon'
import Select from 'react-select'

// Require parameter open: boolean
export default function BottleRewars() {
  const [visible, setVisible] = useState<boolean>(false) // Modal rewars form
  const [show, setShow] = useState(false)
  const [selectedOptionGender, setSelectedOptionGender] = useState('')
  const [selectedOptionPeople, setSelectedOptionPeople] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')

  //create data form rewars
  const [data, setData] = useState({
    name: '',
    cc: '',
    age: '',
    phone: '',
    email: '',
    password: '',
    passwordConfirm: '',
    gender: '',
    people: '',
    check: false,
  })

  // Handle on change for all inputs
  const handleChange = (e: any) => {
    const { name, value } = e.target
    //set data state
    setData({
      ...data,
      password: password,
      passwordConfirm: passwordConfirm,
      gender: selectedOptionGender,
      people: selectedOptionPeople,
      [name]: value,
    })
  }

  // capture event select input gender
  const handleSelectEventGender = ({ value }: any) => {
    setSelectedOptionGender(value)
  }
  // capture event select input
  const handleSelectEventPeople = ({ value }: any) => {
    setSelectedOptionPeople(value)
  }

  // Close modal
  const toggleVisible = () => {
    setVisible(!visible) // Set state visible
  }

  // optios select gender
  const optionsGender = [
    { value: 'Masculino', label: 'Masculino' },
    { value: 'Femenino', label: 'Femenino' },
  ]

  // optios select people
  const optionsPeople = [
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
    { value: '4', label: '4' },
    { value: '5', label: '5' },
    { value: '6', label: '6' },
    { value: '7', label: '7' },
    { value: '8', label: '8' },
    { value: '9', label: '9' },
    { value: '10', label: '10' },
    { value: '11', label: '11' },
    { value: '12', label: '12' },
    { value: '13', label: '13' },
    { value: '14', label: '14' },
    { value: '15', label: '15' },
  ]

  //Check a passwords match
  const checkPasswordsMatch = (password: string, passwordConfirm: string) => {
    if (password !== passwordConfirm) {
      return false
    } else {
      return true
    }
  }

  //Component modal rewars form reclaim bottle
  function openFormRewars() {
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
          <Modal.Header className="font-bold text-center text-2xl text-primary">
            ¡RECLAMA TU PREMIO!
          </Modal.Header>

          <Modal.Body className="text-center">
            <div className="items-center justify-center flex m-2">
              <InfoIcon />
            </div>
            <div>
              <form
                className="grid gap-1 text-black justify-center"
                onSubmit={(e) => e.preventDefault}
              >
                {/*Name*/}
                <label className="text-start text-sm text-primary">
                  Nombre Completo
                </label>
                <Input
                  name="name"
                  type="text"
                  placeholder="Nombre*"
                  required
                  className="input input-bordered input-sm w-full max-w-xs bg-slate-50"
                  onChange={handleChange}
                />
                {/*CC*/}
                <label className="text-start text-sm text-primary">
                  Cedula
                </label>
                <Input
                  name="cc"
                  type="text"
                  placeholder="Cédula*"
                  required
                  maxLength={10}
                  className="input input-bordered input-sm w-full max-w-xs bg-slate-50"
                  onChange={handleChange}
                />
                {/*age of birth*/}
                <label className="text-start text-sm text-primary">Edad</label>
                <Input
                  name="age"
                  type="number"
                  min="18"
                  max="120"
                  step="1"
                  pattern="\d+"
                  placeholder="Cual es tu edad > 18*"
                  required
                  className="input input-bordered input-sm w-full max-w-xs bg-slate-50"
                  onChange={handleChange}
                />
                {/*Phone number*/}
                <label className="text-start text-sm text-primary">
                  Celular
                </label>
                <Input
                  name="phone"
                  type="text"
                  placeholder="Celular*"
                  required
                  minLength={10}
                  className="input input-bordered input-sm w-full max-w-xs bg-slate-50"
                  onChange={handleChange}
                />
                {/*Email*/}
                <label className="text-start text-sm text-primary">
                  Correo electrónico
                </label>
                <Input
                  name="email"
                  type="email"
                  placeholder="Correo electrónico*"
                  required
                  className="input input-bordered input-sm w-full max-w-xs bg-slate-50"
                  onChange={handleChange}
                />
                <div className="relative grid">
                  {/*Password*/}
                  <Input
                    id="password"
                    name="password"
                    type={show ? 'text' : 'password'}
                    placeholder="Contraseña*"
                    required
                    minLength={6}
                    className="input input-bordered input-sm w-full max-w-xs bg-slate-50"
                    onChange={(e) => setPassword(e.target.value)}
                  ></Input>
                  <h1 id="error"></h1>
                  <label
                    className="absolute top-5 -mt-4 text-white cursor-pointer right-6"
                    onClick={() => setShow((prev) => !prev)}
                  >
                    {show ? (
                      <EyeOff className="w-6 h-6" />
                    ) : (
                      <Eye className="w-6 h-6" />
                    )}
                  </label>
                </div>
                <div className="relative grid">
                  {/*Password*/}
                  <Input
                    id="passwordConfirm"
                    name="passwordConfirm"
                    type={show ? 'text' : 'password'}
                    placeholder="Confirmar contraseña*"
                    required
                    minLength={6}
                    className="input input-bordered input-sm w-full max-w-xs bg-slate-50"
                    onChange={(e) => setPasswordConfirm(e.target.value)}
                  ></Input>
                  <label
                    className="absolute top-5 -mt-4 text-white cursor-pointer right-6"
                    onClick={() => setShow((prev) => !prev)}
                  >
                    {show ? (
                      <EyeOff className="w-6 h-6" />
                    ) : (
                      <Eye className="w-6 h-6" />
                    )}
                  </label>
                  {/*Password match*/}
                  {checkPasswordsMatch(password, passwordConfirm) ? (
                    <div className="text-primary text-sm text-center">
                      Las contraseñas coinciden
                    </div>
                  ) : (
                    <div className="text-error text-sm text-center">
                      Las contraseñas no coinciden
                    </div>
                  )}
                </div>
                {/*Genero*/}
                <label className="text-start text-sm text-primary">
                  Selecciona tu genero
                </label>
                <Select
                  name="gender"
                  options={optionsGender}
                  className="w-full max-w-xs rounded-full "
                  placeholder="Genero*"
                  required
                  onChange={handleSelectEventGender}
                />
                {/*Amount people drinks*/}
                <label className="text-start text-sm text-primary">
                  Cuantos amigos te acompañan
                </label>
                <Select
                  name="people"
                  options={optionsPeople}
                  className="w-full max-w-xs rounded-full "
                  placeholder="Cuantas personas te acompañan*"
                  required
                  onChange={handleSelectEventPeople}
                />
                {/*Check input*/}
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <input
                      name="check"
                      type="checkbox"
                      className="checkbox"
                      required
                      onChange={handleChange}
                    />
                    <span className="label-text-center pr-4 text-primary">
                      Confirmo que soy mayor de edad.
                    </span>
                  </label>
                </div>
                {/*Button*/}
                <div className="justify-center">
                  <Button
                    className="rounded-full text-xl w-60"
                    color="primary"
                    id="button-cookies"
                    onClick={handleChange}
                  >
                    Reclamar
                  </Button>
                </div>
              </form>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    )
  }

  console.log('data form:', data)

  return (
    <>
      {/* //bottle component */}
      <div className="flex justify-center h-max -mb-48 mt-32 w-screen">
        <div className="p-16 bg-neutral text-base-content md:rounded-t-[4.5rem] w-screen">
          <h1 className="text-3xl text-center font-bold text-primary m-2 flex justify-center items-center">
            RECOMPENSAS
          </h1>
          <div className="flex flex-col items-center">
            {/*Card rewars and image rewars */}
            <div className="card m-6 flex-row justify-center items-center border-4 border-primary w-80">
              <div className="">
                <Image
                  src="/assets/Baru100x100.png"
                  alt="rewars-img"
                  width={100}
                  height={100}
                  className="m-2 p-2"
                  priority={true}
                />
              </div>

              {/*Card body ul items attributes*/}
              <div className="justify-center items-center">
                <div className="grid m-2">
                  <h1 className="text-3xl text-center font-bold text-primary m-2">
                    ¡Ganaste!
                  </h1>
                  <div className="grid grid-flow-row gap-2">
                    <Button
                      className="btn rounded-full btn-primary w-52"
                      onClick={toggleVisible}
                    >
                      Reclamar
                    </Button>
                    {/**Modal rewars form */}
                    {openFormRewars()}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
