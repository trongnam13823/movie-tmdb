import FormField from '@/components/FormField'
import GenresInput from '@/components/FormInputs/GenresInput'
import MediaTypeInput from '@/components/FormInputs/MediaTypeInput'
import RatingInput from '@/components/FormInputs/RatingInput'
import MediaList from '@/components/MediaList/MediaList'
import useFetch from '@/hooks/useFetch'
import { useForm } from 'react-hook-form'
import { useSearchParams } from 'react-router-dom'

export default function Search() {
  const [searchParams] = useSearchParams()

  const { watch, control } = useForm({
    defaultValues: {
      mediaType: ['movie', 'tv'].includes(searchParams.get('mediaType')) ? searchParams.get('mediaType') : 'movie',
      genres: [],
      rating: '0-10',
    },
  })

  const { mediaType, genres, rating } = watch()
  const [minRating, maxRating] = rating.split('-')

  const { data } = useFetch({
    url: `/discover/${mediaType}?sort_by=popularity.desc&with_genres=${genres.join(
      ','
    )}&vote_average.gte=${minRating}&vote_average.lte=${maxRating}`,
    cancelPrevious: true,
  })

  return (
    <div className='mx-8 max-w-screen-xl xl:mx-auto mt-10'>
      <form className='flex flex-col gap-4 border p-4 rounded'>
        <div className='flex justify-between flex-wrap gap-4'>
          <FormField
            className='flex gap-2 items-center'
            control={control}
            label='Media Type:'
            name='mediaType'
            Component={MediaTypeInput}
          />
          <FormField
            className='flex gap-2 items-center'
            control={control}
            label='Rating:'
            name='rating'
            Component={RatingInput}
          />
        </div>
        <FormField className='flex gap-2 ' control={control} label='Genres:' name='genres' Component={GenresInput} />
      </form>
      <div className=''>
        <MediaList
          layout='grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'
          total={20}
          mediaList={data}
          mediaType={mediaType}
        />
      </div>
    </div>
  )
}
