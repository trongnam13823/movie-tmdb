import CircularProgressBar from '../CircularProgressBar'
import Image from '../Image'
import Skeleton from 'react-loading-skeleton'

export default function Card({ media_type, id, poster_path, vote_average, name, release_date }) {
  return (
    <a href={`/${media_type?.toLowerCase()}/${id}`}>
      <div className='group relative h-full overflow-hidden rounded-xl border border-slate-400 shadow-sm shadow-slate-400'>
        {media_type && (
          <p className='absolute right-2 top-2 z-10 rounded bg-slate-800 px-2 py-1 font-medium capitalize text-white'>
            {media_type}
          </p>
        )}
        <div className='overflow-hidden rounded-xl aspect-[2/3]'>
          <Image
            imageClassName='transition-transform group-hover:scale-110'
            containerClassName='h-full w-full'
            src={
              id &&
              (poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : `https://placehold.co/500x750/?text=No%20Image`)
            }
            alt={name}
            width={500}
            height={750}
          />
        </div>
        <div className='pt-6=8 relative px-4 py-4 pt-8'>
          <div className='absolute top-0 -translate-y-1/2'>
            {vote_average >= 0 ? (
              <CircularProgressBar percent={Math.round(vote_average)} />
            ) : (
              <Skeleton circle width={40} height={40} />
            )}
          </div>
          <h3 className='text-sm font-bold md:text-base xl:text-lg'>{name || <Skeleton width='100%' />}</h3>
          {release_date !== '' && (
            <p className='text-sm text-slate-300 md:text-base'>{release_date || <Skeleton width='60%' />}</p>
          )}
        </div>
      </div>
    </a>
  )
}
