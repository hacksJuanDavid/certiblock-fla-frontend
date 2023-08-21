import Carousel from 'react-spring-3d-carousel'
import { config } from 'react-spring'
import { useState } from 'react'
import Image from 'next/image'
import { AttributesContext } from '../../context/AttributesContext'
import { AuthEmailContext } from '../../context/AuthContext'
import { useContext } from 'react'
import { Button } from 'react-daisyui'
import { useRouter } from 'next/router'
import axios from 'axios'
const { v4: uuidv4 } = require('uuid')

export default function CarouselImagesAguardientes() {
  const [goToSlide, setGoToSlide] = useState(0)
  const [offsetRadius] = useState(3)
  const [showNavigation] = useState(false)
  const router = useRouter()
  const Attributes = useContext(AttributesContext)
  const { token } = useContext(AuthEmailContext)

  //Get images from api certiblock
  const getImagesCertiblock = async () => {
    try {
      //Create a new axios header and set the token
      const axiosConfig = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        timeout: 30000,
      }
      // make axios post request flas with token in headers
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/images`,
        axiosConfig,
      )
      if (response.status === 200) {
        // set json data to context
        console.log(response.data.images)
      } else {
        console.log(response.statusText)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const slides = [
    {
      key: uuidv4(),
      url: '/dashboard/form?id=9',
      type: '9',
      content: (
        <Image
          className="max-w-none"
          src="/assets/2.png"
          alt="0"
          width={225}
          height={335}
          priority={true}
        />
      ),
    },
    {
      key: uuidv4(),
      url: '/dashboard/form?id=10',
      type: '10',
      content: (
        <Image
          className="max-w-none"
          src="/assets/11.png"
          alt="1"
          width={225}
          height={335}
          priority={true}
        />
      ),
    },
    {
      key: uuidv4(),
      url: '/dashboard/form?id=11',
      type: '11',
      content: (
        <Image
          className="max-w-none"
          src="/assets/10.png"
          alt="2"
          width={225}
          height={335}
          priority={true}
        />
      ),
    },
    {
      key: uuidv4(),
      url: '/dashboard/form?id=12',
      type: '12',
      content: (
        <Image
          className="max-w-none"
          src="/assets/12.png"
          alt="3"
          width={225}
          height={335}
          priority={true}
        />
      ),
    },
    {
      key: uuidv4(),
      url: '/dashboard/form?id=13',
      type: '13',
      content: (
        <Image
          className="max-w-none"
          src="/assets/13.png"
          alt="4"
          width={225}
          height={335}
          priority={true}
        />
      ),
    },
    {
      key: uuidv4(),
      url: '/dashboard/form?id=14',
      type: '14',
      content: (
        <Image
          className="max-w-none"
          src="/assets/14.png"
          alt="5"
          width={225}
          height={335}
          priority={true}
        />
      ),
    },
    {
      key: uuidv4(),
      url: '/dashboard/form?id=15',
      type: '15',
      content: (
        <Image
          className="max-w-none"
          src="/assets/15.png"
          alt="6"
          width={225}
          height={335}
          priority={true}
        />
      ),
    },
    {
      key: uuidv4(),
      url: '/dashboard/form?id=16',
      type: '16',
      content: (
        <Image
          className="max-w-none"
          src="/assets/16.png"
          alt="7"
          width={225}
          height={335}
          priority={true}
        />
      ),
    },
    {
      key: uuidv4(),
      url: '/dashboard/form?id=17',
      type: '17',
      content: (
        <Image
          className="max-w-none"
          src="/assets/17.png"
          alt="8"
          width={225}
          height={335}
          priority={true}
        />
      ),
    },
    {
      key: uuidv4(),
      url: '/dashboard/form?id=18',
      type: '18',
      content: (
        <Image
          className="max-w-none"
          src="/assets/18.png"
          alt="9"
          width={225}
          height={335}
          priority={true}
        />
      ),
    },
    {
      key: uuidv4(),
      url: '/dashboard/form?id=19',
      type: '19',
      content: (
        <Image
          className="max-w-none"
          src="/assets/19.png"
          alt="10"
          width={225}
          height={335}
          priority={true}
        />
      ),
    },
    {
      key: uuidv4(),
      url: '/dashboard/form?id=20',
      type: '20',
      content: (
        <Image
          className="max-w-none"
          src="/assets/20.png"
          alt="11"
          width={225}
          height={335}
          priority={true}
        />
      ),
    },
    {
      key: uuidv4(),
      url: '/dashboard/form?id=21',
      type: '21',
      content: (
        <Image
          className="max-w-none"
          src="/assets/21.png"
          alt="12"
          width={225}
          height={335}
          priority={true}
        />
      ),
    },
  ].map((slide, index) => {
    return { ...slide, onClick: () => setGoToSlide(index) }
  })

  //console.log(slides.forEach((slide,index) => console.log(slide.key, index)))

  //Create a function to get the index of the slide and then use it to get the key of the slide
  const getSlideKey = async () => {
    //get img src to send to context
    const img = slides[goToSlide].content.props.src

    //get type to send to context
    const type = slides[goToSlide].type

    //create context img
    Attributes.createImageAttributes(img)

    //create context type
    Attributes.createTypeAttributes(type)

    //push to form
    await router.push(slides[goToSlide].url)
  }

  return (
    <>
      {/* Carousel container */}
      <div
        style={{
          width: '100%',
          height: '1200px',
          marginTop: '0px',
          display: 'grid',
          justifyItems: 'center',
          overflow: 'hidden',
        }}
      >
        {/* Carousel component */}
        <Carousel
          slides={slides}
          goToSlide={goToSlide}
          offsetRadius={offsetRadius}
          showNavigation={showNavigation}
          animationConfig={config.gentle}
        />
        {/* button get bottle select */}
        <div className="flex justify-center items-center h-16">
          <Button
            className="btn w-64 rounded-full outline text-primary justify-center"
            onClick={getSlideKey}
          >
            Escoger Botella
          </Button>
        </div>
      </div>
    </>
  )
}
