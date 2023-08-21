import Carousel from 'react-spring-3d-carousel'
import { config } from 'react-spring'
import { useState } from 'react'
import Image from 'next/image'
import { AttributesContext } from '../../context/AttributesContext'
import { useContext } from 'react'
import { Button } from 'react-daisyui'
import { useRouter } from 'next/router'
const { v4: uuidv4 } = require('uuid')

export default function CarouselImagesRones() {
  const [goToSlide, setGoToSlide] = useState(0)
  const [offsetRadius] = useState(3)
  const [showNavigation] = useState(false)
  const router = useRouter()
  const Attributes = useContext(AttributesContext)

  const slides = [
    {
      key: uuidv4(),
      url: '/dashboard/form?id=1',
      type: '1',
      content: (
        <Image
          className="max-w-none"
          src="/assets/5.png"
          alt="0"
          width={225}
          height={335}
          priority={true}
        />
      ),
    },
    {
      key: uuidv4(),
      url: '/dashboard/form?id=2',
      type: '2',
      content: (
        <Image
          className="max-w-none"
          src="/assets/4.png"
          alt="1"
          width={225}
          height={335}
          priority={true}
        />
      ),
    },
    {
      key: uuidv4(),
      url: '/dashboard/form?id=3',
      type: '3',
      content: (
        <Image
          className="max-w-none"
          src="/assets/1.png"
          alt="2"
          width={225}
          height={335}
          priority={true}
        />
      ),
    },
    {
      key: uuidv4(),
      url: '/dashboard/form?id=4',
      type: '4',
      content: (
        <Image
          className="max-w-none"
          src="/assets/7.png"
          alt="3"
          width={225}
          height={335}
          priority={true}
        />
      ),
    },
    {
      key: uuidv4(),
      url: '/dashboard/form?id=5',
      type: '5',
      content: (
        <Image
          className="max-w-none"
          src="/assets/6.png"
          alt="4"
          width={225}
          height={335}
          priority={true}
        />
      ),
    },
    {
      key: uuidv4(),
      url: '/dashboard/form?id=6',
      type: '6',
      content: (
        <Image
          className="max-w-none"
          src="/assets/3.png"
          alt="5"
          width={225}
          height={335}
          priority={true}
        />
      ),
    },
    {
      key: uuidv4(),
      url: '/dashboard/form?id=7',
      type: '7',
      content: (
        <Image
          className="max-w-none"
          src="/assets/8.png"
          alt="6"
          width={225}
          height={335}
          priority={true}
        />
      ),
    },
    {
      key: uuidv4(),
      url: '/dashboard/form?id=8',
      type: '8',
      content: (
        <Image
          className="max-w-none"
          src="/assets/9.png"
          alt="7"
          width={225}
          height={335}
          priority={true}
        />
      ),
    },
  ].map((slide, index) => {
    return { ...slide, onClick: () => setGoToSlide(index) }
  })

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
    /* Carousel container */
    <div
      style={{
        width: '100%',
        height: '1200px',
        marginTop: '60px',
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
          Ir al formulario
        </Button>
      </div>
    </div>
  )
}
