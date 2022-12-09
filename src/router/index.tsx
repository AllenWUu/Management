//对象形式写法
import React, { lazy } from 'react'
import Home from '../views/home'
import { Navigate } from 'react-router-dom'
// import About from '../views/about'
// 懒加载
const About = lazy(() => import('../views/about'))
const Page1 = lazy(() => import('../views/Page1'))
const Page2 = lazy(() => import('../views/Page2'))
const withLoadingComponent = (comp: JSX.Element) => (
  <React.Suspense fallback={<div>loading...</div>}>{comp}</React.Suspense>
)

const routes = [
  {
    path: '/',
    element: <Navigate to="/page1" />,
  },
  // {
  //   path: '/home',
  //   element: <Home />,
  // },
  // {
  //   path: '/about',
  //   // element: <About />,
  //   element: withLoadingComponent(<About />),
  // },
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path:"/page1",
        element:withLoadingComponent(<Page1/>)
      },
      {
        path:"/page2",
        element:withLoadingComponent(<Page2/>)
      }
    ],
  },
]

export default routes
