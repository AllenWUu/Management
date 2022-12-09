import React from 'react'
import ReactDOM from 'react-dom/client'
//初始化一般放到最先
import 'reset-css'
//UI框架样式

//全局样式
import '@/assets/styles/global.scss'
//组件样式
import App from './App'
import { BrowserRouter } from 'react-router-dom'
// import Router from './router' // 老版本路由写法

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* 旧版路由写法 */}
    {/* <Router /> */}

    {/* 新版路由写法 */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
