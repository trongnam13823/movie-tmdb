import { useModalContext } from '@/context/ModalProvider'
import Skeleton from 'react-loading-skeleton'
import { Link } from 'react-router-dom'

export default function Content({ id, title, release_date, overview, trailerId }) {
  const { setContent } = useModalContext()

  return (
    <>
      <div className='inset-x-0 absolute flex flex-col gap-8 px-8 top-[10%]'>
        <div>
          <h3 className='mb-2 line-clamp-2 text-4xl font-bold md:text-5xl lg:text-6xl xl:text-7xl'>
            {title || <Skeleton width={400} />}
          </h3>
          <p className='text-lg text-gray-200'>{release_date || <Skeleton width={200} />}</p>
        </div>

        <div>
          <p className='mb-2 text-2xl font-bold'>Overview</p>
          <p className='line-clamp-6 max-w-2xl text-balance text-xl text-gray-200 sm:text-2xl '>
            {overview || <Skeleton count={4} width={600} />}
          </p>
        </div>

        <div className='flex gap-4'>
          <button
            onClick={() =>
              setContent(
                <iframe
                  className='aspect-video w-[80vw] max-h-[80vh] rounded-3xl border-2 border-slate-400'
                  src={'https://www.youtube.com/embed/' + trailerId}
                />
              )
            }
            className='group flex items-center gap-2 rounded bg-white px-4 py-2 text-lg text-black'
          >
            <i className='fa-duotone fa-solid fa-play group-hover:scale-125 transition-transform'></i> Play Trailer
          </button>

          <Link to={`/movie/${id}`}>
            <button className='rounded border px-4 py-2 text-lg transition-colors hover:bg-white/20'>View Detail</button>
          </Link>
        </div>
      </div>
    </>
  )
}
