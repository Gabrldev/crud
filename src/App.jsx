import './App.css'
import { Login } from './pages/Login'
import Home from './pages/Home'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { client } from './client/client'
import About from './pages/About'
import Private from './Routes/Private'
import Public from './Routes/Public'
import { TaskContextProvider } from './context/TaskContext'
function CheckAuth () {
  const navigate = useNavigate()

  useEffect(() => {
    client.auth.onAuthStateChange((event, session) => {
      switch (session) {
        case null:
          navigate('/login')
          break
        default:
          break
      }
    })
  }, [])
}

function App () {
  CheckAuth()
  return (
    <div className='app'>
      <TaskContextProvider>
        <Routes>
          <Route element={<Private />}>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
          </Route>
          <Route element={<Public />}>
            <Route path='/login' element={<Login />} />
            <Route path='*' element={<div>404</div>} />
          </Route>
        </Routes>
      </TaskContextProvider>
    </div>

  )
}

export default App
