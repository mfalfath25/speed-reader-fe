import { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { baseAPI } from '../api/utils'
import { useUserStore } from '../stores/UserStore'
import logo from '../assets/logo/SpeedReaderLoader.png'
import { ToastAlert } from '../components/atoms'

export const Private = () => {
  const [isLoading, setIsLoading] = useState(false)

  const navigate = useNavigate()
  const { userData } = useUserStore()

  useEffect(() => {
    const token = userData.token
    if (token !== undefined || token !== '') {
      baseAPI.defaults.headers.common.Authorization = token
    }
    // intercept request (fallback if somehow react-query doesn't include header)
    // baseAPI.interceptors.request.use((config) => {
    //   if (!config.headers) {
    //     config.headers = {
    //       'Content-Type': 'application/json',
    //     }
    //   }
    //   config.headers.Authorization = token
    //   return config
    // })

    // intercept response
    baseAPI.interceptors.response.use(
      (res) => {
        return res
      },
      (err) => {
        if (!err.response) {
          console.log("Please check your internet connection or the server's status")
          ToastAlert('Koneksi/server error', 'error')
          return Promise.reject(err)
        } else if (err.response.status === 403 || err.response.status === 401) {
          navigate('/login')
        }
        return err
      }
    )

    // check if somehow token is empty
    setIsLoading(true)
    if (userData.token === '' || userData.token === undefined) {
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
