import {useRoutes} from "react-router-dom";
import { Suspense, lazy } from 'react'
const routes = [
  {
    path: '/',
    component:lazy(() => import('./../page/login/Login'))
  },
  {
    path: '/Portal',
    component:lazy(() => import('../page/portal/Portal')),
    children: [
      { 
        path: '/Portal/Home',
        component:lazy(() => import('../page/home/Home'))
      },
      { path: '/Portal/Test',
        component:lazy(() => import('../page/test/Test'))
      },
      { 
        path: '/Portal/*',
        component:lazy(() => import('../page/error/NotFound'))
      }
    ]
  },
  { 
    path: '*',
    component:lazy(() => import('../page/error/NotFound'))
  }
]


// 路由处理方式
const changeRouter = (routers:any) => {
  return routers.map((item:any) => {
    if (item.children) {
      item.children = changeRouter(item.children)
    }
    item.element = <Suspense fallback={
      <div>加载中...</div>
    }>
      {/* 把懒加载的异步路由变成组件装载进去 */}
      <item.component />
    </Suspense>
    return item
  })
}

const Router = () => useRoutes(changeRouter(routes))

export default Router