import Header from '@/components/Header'
import { Outlet } from 'react-router-dom'
import { SkeletonTheme } from 'react-loading-skeleton'
export default function RootLayout() {
  return (
    <SkeletonTheme borderRadius={0} baseColor='#202020' highlightColor='#444'>
      <div className='bg-gray-950 text-white min-h-screen'>
        <Header />
        <Outlet />
      </div>
    </SkeletonTheme>
  )
}
