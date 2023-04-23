import { Outlet } from 'react-router-dom'
function Private ({ children }) {
  return (
    <>
      {children}
      <Outlet />
    </>
  )
}
export default Private
