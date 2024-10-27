import MediaList from '@/components/MediaList/MediaList'
import PopularMovies from '@/components/PopularMovies/PopularMovies'
import { TOP_RATED_TABS, TRENDING_TABS } from '@/libs/constants'

export default function Home() {
  return (
    <div>
      <PopularMovies />
      <div className='px-8 py-12 flex flex-col gap-12'>
        <MediaList
          title={'Trending'}
          layout={'grid gap-4 grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6'}
          tabs={TRENDING_TABS}
          total={18}
        />
        <MediaList
          title={'Top Rated'}
          tabs={TOP_RATED_TABS}
          layout={'grid gap-4 grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6'}
          total={18}
        />
      </div>
    </div>
  )
}
