import useFetch from '@/hooks/useFetch'
import { useState } from 'react'
import Card from './Card'
import Tab from './Tab'

export default function MediaList({ title, tabs, layout, api, total, mediaList, mediaType }) {
  const [activeTab, setActiveTab] = useState(tabs && tabs[0])
  const { data } = useFetch({ url: api || activeTab?.url || '' })

  mediaList = mediaList || data?.slice(0, total) || Array.from({ length: total })

  return (
    <div className={`py-10 ${data?.length === 0 ? 'hidden' : ''}`}>
      {title && <Tab title={title} tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />}
      <div className={layout}>
        {mediaList.map((media, index) => {
          return (
            <Card
              key={media?.id || index}
              media_type={media?.media_type || activeTab?.name || mediaType}
              id={media?.id}
              poster_path={media?.poster_path}
              vote_average={media?.vote_average}
              name={media?.name || media?.title}
              release_date={media?.release_date || media?.first_air_date || ''}
            />
          )
        })}
      </div>
    </div>
  )
}
