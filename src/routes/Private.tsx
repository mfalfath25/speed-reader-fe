import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { baseAPI } from '../api/utils'
import { useGlobalStore } from '../stores'
import { useUserStore } from '../stores/UserStore'
import logo from '../assets/logo/SpeedReaderLoader.png'

export const Private = () => {
  const navigate = useNavigate()
  const { userData } = useUserStore()
  const { isLoading, setIsLoading } = useGlobalStore()

  useEffect(() => {
    const token = userData.token

    // intercept request
    baseAPI.interceptors.request.use((config) => {
      if (!config.headers) {
        config.headers = {
          'Content-Type': 'application/json',
        }
      }
      config.headers.Authorization = token ? `${token}` : ''
      return config
    })

    // intercept response
    baseAPI.interceptors.response.use(
      (res) => {
        return res
      },
      (err) => {
        if (err.response.status === 403 || err.response.status === 401) {
          navigate('/login', { replace: true })
        }
        return err
      }
    )

    // check if somehow token is empty
    setIsLoading(true)
    if (userData.token === '') {
      navigate('/auth', { replace: true })
    }
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }, [])

  return (
    <>
      {isLoading ? (
        <div className="grid h-screen place-items-center">
          <img src={logo} className="h-7 sm:h-9 mt-4 sm:mt-10 animate-pulse" alt="Loader" />
        </div>
      ) : (
        <Outlet />
      )}
    </>
  )
}
