// use abottle component
import React, { useState } from 'react'
import Bottle from '@components/bottle/bottle'
// import axios
import axios from 'axios'
//import loading component
import Loading from '@components/loading/loading'

export default function Home() {
  const [isloaded, setLoaded] = useState(false)
  // set state from data
  const [data, setData] = useState({
    image: '',
    views: 0,
    createdat: '',
    read: false,
    name: '',
    lote: '',
    years: 0,
    sugar: '',
    mililiters: 0,
    reference: '',
    city: '',
  })

  // get uuid from url
  const uuid = window.location.pathname.split('/')[2]

  // make get request to get the data from api with axios
  React.useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL!}/flas/${uuid}`)
      .then((res) => {
        setData(res.data)
        // set loaded to true
        setLoaded(true)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [uuid])

  // if is not loaded return loading component
  if (!isloaded) {
    return <Loading />
  } else {
  return (
    <div>
      <Bottle
        created={data.createdat}
        image={data.image}
        views={data.views}
        mililiters={data.mililiters}
        sugar={data.sugar}
        years={data.years}
        lote={data.lote}
        name={data.name}
        reference={data.reference}
        read={data.read}
        city={data.city}
      />
    </div>
  )
  }
}
