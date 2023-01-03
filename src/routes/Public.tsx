import { useEffect } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { useUserStore } from '../store/UserStore'

export const Public = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { userData } = useUserStore()

  useEffect(() => {
    if (userData.token !== '') {
      navigate('/', { replace: true })
    }
  }, [location])

  return <Outlet />
}
