import useFetch from '@/hooks/useFetch'
import { useEffect } from 'react'
import { useWatch } from 'react-hook-form'
import Skeleton from 'react-loading-skeleton'

export default function GenresInput({ value, onChange, control }) {
  const mediaType = useWatch({ name: 'mediaType', control: control })

  const { data: genresFetch } = useFetch({
    url: `/genre/${mediaType}/list?language=en-US`,
    isResetData: false,
  })

  useEffect(() => {
    onChange([])
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [genresFetch])
  return (
    <div className='gap-2 flex overflow-auto items-center scrollbar scrollbar-thumb-slate-400 scrollbar-h-[6px] scrollbar-thumb-rounded-full pb-1'>
      {(genresFetch?.genres || Array.from({ length: 14 })).map((g, index) => (
        <p
          onClick={() => {
            onChange(value.includes(g?.id) ? value.filter((item) => item !== g?.id) : [...value, g?.id])
          }}
          className={
            'border border-slate-200/40 px-2 py-1 rounded cursor-pointer select-none text-nowrap ' +
            (value.includes(g?.id) ? 'bg-slate-200 text-black hover:bg-slate-200' : 'hover:bg-slate-200/20')
          }
          key={g?.id || index}
        >
          {g?.name || <Skeleton width={Math.random() * 60 + 40} />}
        </p>
      ))}
    </div>
  )
}
