import { useState } from 'react'
import SideBar from './Pages/Common/SideBar'
import TopBar from './Pages/Common/TopBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <SideBar/>
      <TopBar/>
    </div>
      )
}

export default App
