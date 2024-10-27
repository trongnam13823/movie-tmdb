import { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
export default function Image({ src, alt, width, height, imageClassName = '', containerClassName = '' }) {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(false)
    const img = new window.Image()
    img.src = src

    img.onload = () => {
      setIsLoaded(true)
    }

    return () => {
      img.onload = null
    }
  }, [src])

  return (
    <div className={`relative ${containerClassName}`}>
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`w-full h-full object-cover ${imageClassName}`}
        loading='lazy'
      />
      {isLoaded || (
        <Skeleton inline={true} containerClassName='absolute inset-0 overflow-hidden' className='-top-[10%] w-[100%] h-[120%]' />
      )}
    </div>
  )
}
