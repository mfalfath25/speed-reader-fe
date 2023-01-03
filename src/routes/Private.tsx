import { useEffect } from 'react'
import { Navigate, Outlet, useLocation, useNavigate } from 'react-router-dom'
import { baseAPI } from '../api/utils'
import { useUserStore } from '../store/UserStore'

// interface PrivateProps {
//   user: string | null
// }

export const Private = () => {
  const navigate = useNavigate()
  // const location = useLocation()
  const { userData } = useUserStore()

  useEffect(() => {
    baseAPI.interceptors.response.use(
      (res) => {
        return res
      },
      (err) => {
        if (err.response.status === 403 || err.response.status === 401) {
          navigate('/auth', { replace: true })
        }
        return err
      }
    )
  }, [])

  if (userData.token === '') {
    return <Navigate to="/auth" replace />
  }

  return <Outlet />
}
