import { useMemo, useState } from 'react'
import Image from '../Image'
import Skeleton from 'react-loading-skeleton'

export default function ActorList({ actors = Array.from({ length: 4 }) }) {
  const [showMore, setShowMore] = useState(false)
  const currentActors = useMemo(() => {
    return showMore ? actors?.slice(0, 4 * 6) : actors?.slice(0, 4)
  }, [showMore, actors])

  function handleShowMore() {
    setShowMore(!showMore)
  }

  return (
    <>
      <div className='grid grid-cols-2 gap-4 lg:grid-cols-4'>
        {currentActors?.map((actor, index) => (
          <a key={actor?.id || index} href={`/people/${actor?.id}`}>
            <div className='group relative h-full overflow-hidden rounded-xl border border-slate-200 shadow-sm shadow-slate-200'>
              <div className='flex h-full flex-col gap-4 pb-4'>
                {/* Image */}
                <div className='flex-1 overflow-hidden rounded-xl'>
                  <Image
                    containerClassName='h-full w-full'
                    imageClassName='transition-transform group-hover:scale-105 rounded-xl'
                    src={
                      actor?.id &&
                      (actor?.profile_path
                        ? `https://image.tmdb.org/t/p/w276_and_h350_face/${actor?.profile_path}`
                        : `https://placehold.co/276x350/?text=No%20Image`)
                    }
                    alt={actor?.name}
                    width={276}
                    height={350}
                  />
                </div>

                {/* Info */}
                <div className='px-2'>
                  <p className='font-bold'>{actor?.name || <Skeleton width='80%' />}</p>
                  <p className='text-sm text-slate-300'>{actor?.character ?? <Skeleton width='60%' />}</p>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
      {actors?.length > 4 && (
        <button className='flex items-center gap-2 pt-4 text-lg transition-opacity hover:opacity-85' onClick={handleShowMore}>
          {showMore ? 'Show Less' : 'Show More'}
          {showMore ? <i className='fa-regular fa-chevron-up'></i> : <i className='fa-regular fa-chevron-down'></i>}
        </button>
      )}
    </>
  )
}
