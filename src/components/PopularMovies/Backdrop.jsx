import Image from '../Image'

export default function Backdrop({ backdrop_path, alt }) {
  return (
    <>
      <Image containerClassName='h-full w-full' src={`https://image.tmdb.org/t/p/original${backdrop_path}`} alt={alt} />
      <div className='absolute inset-0 bg-black opacity-60'></div>
    </>
  )
}
