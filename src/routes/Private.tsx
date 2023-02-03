import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { baseAPI } from '../api/utils'
import { useUserStore } from '../stores/UserStore'
import logo from '../assets/logo/SpeedReaderLoader.png'

export const Private = () => {
  const navigate = useNavigate()

  const { userData } = useUserStore()
  const token = userData.token

  useEffect(() => {
    if (token === '' || token === undefined) {
      navigate('/login', { replace: true })
    } else {
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
    // baseAPI.interceptors.response.use(
    //   (res) => {
    //     return res
    //   },
    //   (err) => {
    //     if (!err.response) {
    //       console.log("Please check your internet connection or the server's status")
    //       ToastAlert('Koneksi/server error (from interceptor)', 'error')
    //       return err
    //     } else if (err.response.status === 403 || err.response.status === 401) {
    //       navigate('/login')
    //     }
    //     return err
    //   }
    // )
  }, [])

  return (
    <>
      {token === '' || token === undefined ? (
        <div className="grid h-screen place-items-center">
          <img
            src={logo}
            className="mt-4 h-7 animate-pulse sm:mt-10 sm:h-9"
            alt="Loader"
          />
        </div>
      ) : (
        <Outlet />
      )}
    </>
  )
}
