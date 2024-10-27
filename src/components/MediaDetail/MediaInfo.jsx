import { currencyFormatter } from '@/libs/utils'
import Skeleton from 'react-loading-skeleton'
import Image from '../Image'

export default function MediaInfo({ originalTitle, originalCountry, status, budget, revenue, network, mediaType }) {
  return (
    <div className='grid grid-cols-2 gap-4 md:grid-cols-1'>
      <div>
        <p className='font-medium'>Original name:</p>
        <p className='text-slate-200'>{originalTitle || <Skeleton width='60%' />}</p>
      </div>
      <div>
        <p className='font-medium'>Original Country:</p>
        {originalCountry ? (
          <Image
            containerClassName='w-[40px] h-[30px]'
            width='40px'
            height='30px'
            src={`https://www.flagcdn.com/40x30/${originalCountry?.toLowerCase()}.png`}
            alt={originalCountry}
          />
        ) : (
          <Skeleton width='40px' height='30px' />
        )}
      </div>

      {mediaType === 'movie' && (
        <>
          <div>
            <p className='font-medium'>Budget:</p>
            <p className='text-slate-200'>{budget >= 0 ? currencyFormatter(budget) : <Skeleton width='60%' />}</p>
          </div>

          <div>
            <p className='font-medium'>Revenue:</p>
            <p className='text-slate-200'>{revenue >= 0 ? currencyFormatter(revenue) : <Skeleton width='60%' />}</p>
          </div>
        </>
      )}

      {mediaType === 'tv' && (
        <div>
          <p className='font-medium'>Network:</p>
          {network ? (
            <Image
              containerClassName='w-[80px] h-[30px]'
              imageClassName='w-auto h-auto invert'
              height='30px'
              width='80px'
              src={`https://media.themoviedb.org/t/p/h30${network?.logo_path}`}
              alt={network?.name}
            />
          ) : (
            <Skeleton width='80px' height='30px' />
          )}
        </div>
      )}
      <div>
        <p className='font-medium'>Status:</p>
        <p className='text-slate-200'>{status || <Skeleton width='60%' />}</p>
      </div>
    </div>
  )
}
