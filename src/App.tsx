import { useState } from 'react'
// import { Button, Space } from 'antd'
// import { UpCircleOutlined } from '@ant-design/icons'
import { Outlet, Link,useRoutes } from 'react-router-dom'
import routes from './router'
function App() {
  const [count, setCount] = useState(0)
  const outlet= useRoutes(routes)
  return (
    <div className="App">
      {/* <Link to="./about">Home</Link>
      <Link to="./home">About</Link> */}
      {/* 类似于窗口，用来展示组件 */}
      {/* <Outlet></Outlet> */}
      {outlet}
    </div>
  )
}

export default App
