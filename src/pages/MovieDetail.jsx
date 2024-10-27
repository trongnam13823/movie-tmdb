import ActorList from '@/components/MediaDetail/ActorList'
import Banner from '@/components/MediaDetail/Banner'
import MediaInfo from '@/components/MediaDetail/MediaInfo'
import MediaList from '@/components/MediaList/MediaList'
import useFetch from '@/hooks/useFetch'
import { useParams } from 'react-router-dom'

export default function MovieDetail() {
  const { id } = useParams()
  const { data: movie } = useFetch({
    url: `/movie/${id}?language=en-US&append_to_response=credits,videos`,
  })

  return (
    <>
      <Banner
        title={movie?.title}
        poster_path={movie?.poster_path}
        backdrop_path={movie?.backdrop_path}
        release_date={movie?.release_date}
        genres={movie?.genres}
        vote_average={movie?.vote_average}
        overview={movie?.overview}
        trailerId={movie?.videos?.results?.find((item) => item.type === 'Trailer')?.key}
      />
      <div className='mx-8 max-w-screen-xl xl:mx-auto'>
        <div className='flex flex-col-reverse gap-8 py-10 md:flex-row'>
          <div className='md:flex-[3]'>
            <h2 className='mb-6 text-2xl font-bold'>Actors</h2>
            <ActorList actors={movie?.credits?.cast} />
          </div>
          <div className='md:flex-[1]'>
            <h2 className='mb-6 text-2xl font-bold'>Infomation</h2>
            <MediaInfo
              originalCountry={movie?.origin_country[0]}
              originalTitle={movie?.original_title}
              status={movie?.status}
              budget={movie?.budget}
              revenue={movie?.revenue}
              mediaType='movie'
            />
          </div>
        </div>

        <MediaList
          title='More Like This'
          layout='grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'
          api={`/movie/${id}/recommendations`}
          total={20}
        />
      </div>
    </>
  )
}
