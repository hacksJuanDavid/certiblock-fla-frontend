// import datetime from luxon
import { DateTime } from 'luxon'
// Attributes for bottle, require the next parameters:
// name: string
// years: number
// sugar: string
// open: boolean
// mililiters: number
// reference: string
// read: string
export default function BottleAttribute({
  name,
  years,
  sugar,
  open,
  mililiters,
  reference,
  read,
  lote,
  city,
}: {
  name: string
  years: number
  sugar: string
  open: boolean
  mililiters: number
  reference: string
  read: boolean
  lote: string
  city: string
}) {
  console.log(read)

  // create function to get read and create new date
  const getRead = () => {
    // if read is true
    if (read === true) {
      // new date
      const date = DateTime.now()
      // return date
      return date.toLocaleString(DateTime.DATETIME_MED)
    } 
  }
  
  return (
    <>
      {/* //Attributes bottle component */}
      <div className="grid">
        <h1 className="text-2xl text-center font-bold text-primary m-2">
          ATRIBUTOS
        </h1>
        <div className="grid justify-items-stretch grid-rows-3 grid-flow-col gap-3">
          <div className="btn rounded-full">{name}</div>
          <div className="btn rounded-full">{years} AÑOS</div>
          <div className="btn rounded-full">{sugar}</div>
          <div className="btn rounded-full">{open ? 'ABIERTA' : 'CERRADA'}</div>
          <div className="btn rounded-full">{mililiters} MIL</div>
          <div className="btn rounded-full">Lote: {lote}</div>
        </div>

        {/* If reader is not empty, show the date of the last reading */}
        {read && (
          <div className="btn btn-error rounded-full my-2">
            FECHA DE APERTURA {read ? getRead() : ''}
          </div>
        )}
        
      </div>
    </>
  )
}
