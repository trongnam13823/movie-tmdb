import '@/index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import RootLayout from './pages/RootLayout'
import 'react-loading-skeleton/dist/skeleton.css'
import MovieDetail from './pages/MovieDetail'
import TvDetail from './pages/TvDetail'
import PeopleDetail from './pages/PeopleDetail'
import ModalProvider from './context/ModalProvider'
import Search from './pages/Search'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ModalProvider>
      <RouterProvider
        router={createBrowserRouter([
          {
            element: <RootLayout />,
            children: [
              {
                path: '/',
                element: <Home />,
              },
              {
                path: 'movie/:id',
                element: <MovieDetail />,
              },
              {
                path: 'tv/:id',
                element: <TvDetail />,
              },
              {
                path: 'people/:id',
                element: <PeopleDetail />,
              },
              {
                path: '/search',
                element: <Search />,
              },
            ],
          },
        ])}
      />
    </ModalProvider>
  </StrictMode>
)
