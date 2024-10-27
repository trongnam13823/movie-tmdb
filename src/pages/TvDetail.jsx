import ActorList from '@/components/MediaDetail/ActorList'
import Banner from '@/components/MediaDetail/Banner'
import MediaInfo from '@/components/MediaDetail/MediaInfo'
import MediaList from '@/components/MediaList/MediaList'
import useFetch from '@/hooks/useFetch'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function TvDetail() {
  useEffect(() => window.scrollTo(0, 0), [])
  const { id } = useParams()
  const { data: tv } = useFetch({
    url: `/tv/${id}?language=en-US&append_to_response=credits,videos`,
  })

  console.log(tv)

  return (
    <>
      <Banner
        title={tv?.name}
        poster_path={tv?.poster_path}
        backdrop_path={tv?.backdrop_path}
        release_date={tv?.first_air_date}
        genres={tv?.genres}
        vote_average={tv?.vote_average}
        overview={tv?.overview}
        trailerId={tv?.videos?.results?.find((item) => item.type === 'Trailer')?.key}
      />
      <div className='mx-8 max-w-screen-xl xl:mx-auto'>
        <div className='flex flex-col-reverse gap-8 py-10 md:flex-row'>
          <div className='md:flex-[3]'>
            <h2 className='mb-6 text-2xl font-bold'>Actors</h2>
            <ActorList actors={tv?.credits?.cast} />
          </div>
          <div className='md:flex-[1]'>
            <h2 className='mb-6 text-2xl font-bold'>Infomation</h2>
            <MediaInfo
              originalTitle={tv?.original_name}
              originalCountry={tv?.origin_country[0]}
              status={tv?.status}
              network={tv?.networks[0]}
              mediaType='tv'
            />
          </div>
        </div>

        <MediaList
          title='More Like This'
          layout='grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'
          api={`/tv/${id}/recommendations`}
          total={20}
        />
      </div>
    </>
  )
}
