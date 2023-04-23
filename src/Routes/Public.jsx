import { Outlet, useNavigate } from 'react-router-dom'
import { client } from '../client/client'
import { useEffect } from 'react'

const Public = ({ children }) => {
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
  return (
    <>
      {children || (

        <Outlet />

      )}
    </>
  )
}
export default Public
