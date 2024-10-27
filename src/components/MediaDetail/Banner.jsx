import Skeleton from 'react-loading-skeleton'
import CircularProgressBar from '../CircularProgressBar'
import Image from '../Image'
import { useModalContext } from '@/context/ModalProvider'

export default function Banner({ title, poster_path, release_date, genres, vote_average, overview, backdrop_path, trailerId }) {
  const { setContent } = useModalContext()

  return (
    <div className='relative'>
      {/* Backdrop */}
      <div className='absolute inset-0'>
        <Image containerClassName='h-full w-full' src={`https://image.tmdb.org/t/p/original/${backdrop_path}`} alt={title} />
        <div className='absolute inset-0 bg-black opacity-60 md:opacity-80'></div>
      </div>

      <div className='relative mx-8 flex max-w-screen-xl gap-10 py-10 text-white xl:mx-auto overflow-hidden'>
        {/* Poster */}
        <div className='hidden flex-1 md:block shadow-md rounded-3xl shadow-slate-600/80'>
          <Image
            containerClassName='rounded-3xl overflow-hidden'
            width={600}
            height={900}
            imageClassName='w-full rounded-3xl'
            src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${poster_path}`}
            alt='poster'
          />
        </div>

        {/* Release Date */}
        <div className='flex flex-[2] flex-col gap-8'>
          <div>
            <h1 className='mb-2 font-bold text-4xl'>{title || <Skeleton width={400} />}</h1>

            <div className='flex flex-wrap gap-x-4 text-lg text-gray-200'>
              <p>{release_date || <Skeleton width={100} />}</p>
              <span className='hidden md:block'>|</span>
              <p>{genres?.map((genre) => genre.name).join(', ') || <Skeleton width={100} />}</p>
            </div>
          </div>

          {/* Rating */}
          <div className='flex items-center gap-10 text-lg'>
            <div className='flex items-center gap-1'>
              {vote_average >= 0 ? (
                <CircularProgressBar percent={Math.round(vote_average)} />
              ) : (
                <Skeleton circle width={40} height={40} />
              )}
              <p>Rating</p>
            </div>
            <button
              onClick={() =>
                setContent(
                  <iframe
                    className='aspect-video w-[80vw] max-h-[80vh] rounded-3xl border-2 border-slate-400'
                    src={'https://www.youtube.com/embed/' + trailerId}
                  />
                )
              }
              className='group flex items-center gap-2 rounded border px-4 py-2 text-xl shadow-sm shadow-white'
            >
              <i className='fa-duotone fa-solid fa-play group-hover:scale-110 transition-transform'></i>
              Trailer
            </button>
          </div>

          {/* Overview */}
          <div>
            <p className='mb-2 text-xl font-bold'>Overview</p>
            <p className='text-balance text-base text-gray-200 sm:text-lg'>{overview || <Skeleton count={4} width={600} />}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
