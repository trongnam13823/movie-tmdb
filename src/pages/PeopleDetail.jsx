import Image from '@/components/Image'
import useFetch from '@/hooks/useFetch'
import { useParams } from 'react-router-dom'
import Skeleton from 'react-loading-skeleton'
import MediaList from '@/components/MediaList/MediaList'

const GRENDER_MAP = {
  1: 'Male',
  2: 'Female',
}

export default function PeopleDetail() {
  const { id } = useParams()
  const { data: people } = useFetch({
    url: `/person/${id}?language=en-US&append_to_response=combined_credits`,
  })

  return (
    <div className='flex md:flex-row flex-col gap-12 mx-8 max-w-screen-xl xl:mx-auto py-10'>
      <div className='flex-[1]'>
        <div className='md:max-w-full max-w-96 shadow-md shadow-slate-600/80 rounded-3xl overflow-hidden flex-shrink-0'>
          <Image
            containerClassName='h-full w-full'
            height={900}
            width={600}
            src={
              people &&
              (people?.profile_path
                ? `https://image.tmdb.org/t/p/w600_and_h900_bestv2/${people?.profile_path}`
                : `https://placehold.co/600x900/?text=No%20Image`)
            }
          />
        </div>
        <h1 className='md:hidden block text-4xl font-bold mt-6'>{people?.name || <Skeleton width='60%' />}</h1>
        <div className='grid grid-cols-1 gap-4 mt-8'>
          <div>
            <p className='text-lg font-medium'>Known For</p>
            <p className='text-slate-200'>{people?.known_for_department || <Skeleton width='60%' />}</p>
          </div>
          <div>
            <p className='text-lg font-medium'>Grender</p>
            <p className='text-slate-200'>{GRENDER_MAP[people?.gender] || <Skeleton width='60%' />}</p>
          </div>
          {people?.birthday !== null && (
            <div>
              <p className='text-lg font-medium'>Place of Birth</p>
              <p className='text-slate-200 text-balance'>{people?.place_of_birth || <Skeleton width='60%' />}</p>
            </div>
          )}
          {people?.birthday !== null && (
            <div>
              <p className='text-lg font-medium'>Birthday</p>
              <p className='text-slate-200'>{people?.birthday || <Skeleton width='60%' />}</p>
            </div>
          )}
        </div>
      </div>

      <div className='flex-[3]'>
        <h1 className='text-4xl md:text-6xl font-bold md:block hidden'>{people?.name || <Skeleton width='60%' />}</h1>
        <h2 className='text-2xl font-bold md:hidden block'>Biography</h2>

        {people?.biography !== '' && (
          <p className='mt-8 text-justify text-base text-gray-200 sm:text-lg whitespace-pre-line'>
            {people?.biography || (
              <div className='grid grid-cols-1 gap-4'>
                <Skeleton count={3} width='100%' />
                <Skeleton count={6} width='100%' />
                <Skeleton count={2} width='100%' />
              </div>
            )}
          </p>
        )}

        {(!people || people?.combined_credits?.cast?.length > 0) && (
          <MediaList
            title='Combined Credits'
            layout='grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
            total={20}
            mediaList={people?.combined_credits?.cast}
          />
        )}
      </div>
    </div>
  )
}
