import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HelloWord from './components/P01'
import HelloMyFriend from './components/P02'
import HelloMyFriendState from './components/P03'
import ListaDeTareas from './components/P04'
import ListaDeTareas2 from './components/P05'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <HelloWord/> */}
      {/* <HelloMyFriend nombre={'my friend'}/> */}
      {/* <HelloMyFriendState nombre={'my friend'}/> */}
      {/* <ListaDeTareas/> */}
      {/* <ListaDeTareas2/> */}
    </>
  )
}

export default App
