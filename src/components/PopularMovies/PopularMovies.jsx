import useFetch from '@/hooks/useFetch'
import { useState } from 'react'
import Backdrop from './Backdrop'
import Content from './Content'
import Indicator from './Indicator'

export default function PopularMovies() {
  const { data: moviesFetch } = useFetch({
    url: `/movie/popular?language=en-US&page=1&append_to_response=media_type,videos`,
  })
  const movies = moviesFetch?.slice(0, 4) || Array.from({ length: 4 })
  const [indexActive, setIndexActive] = useState(0)

  const { data: video } = useFetch({
    url: `/movie/${movies[indexActive]?.id}/videos?language=en-US`,
    enable: !!moviesFetch,
  })

  return (
    <div className='h-[calc(100vh-var(--header-height))]'>
      {movies.map((movie, index) => (
        <div key={movie?.id || index} className={`h-full relative ${index === indexActive ? 'block' : 'hidden'}`}>
          <Backdrop backdrop_path={movie?.backdrop_path} alt={movie?.title} />
          <Content
            id={movie?.id}
            title={movie?.title}
            release_date={movie?.release_date}
            overview={movie?.overview}
            trailerId={video?.find((item) => item.type === 'Trailer')?.key}
          />
          <Indicator totalMovies={movies?.length} indexActive={indexActive} setIndexActive={setIndexActive} />
        </div>
      ))}
    </div>
  )
}
