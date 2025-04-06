import { lazy } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'

const router = createBrowserRouter([
  {
    Component: lazy(() => import('./layout/Default')),
    children: [
      { path: '/', Component: lazy(() => import('./pages/Home')) },
      { path: '/movies', Component: lazy(() => import('./pages/Movies')) },
      { path: '/movies/:id', Component: lazy(() => import('./pages/Movie')) }
    ]
  }
])

export default function Router() {
  return <RouterProvider router={router} />
}
