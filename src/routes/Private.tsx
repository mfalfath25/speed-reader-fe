import { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { baseAPI } from '../api/utils'
import { useUserStore } from '../stores/UserStore'
import logo from '../assets/logo/SpeedReaderLoader.png'

export const Private = () => {
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const { userData } = useUserStore()
  const token = userData.token

  useEffect(() => {
    if (token === '' || token === undefined) {
      setIsLoading(true)
      setTimeout(() => {
        navigate('/auth', { replace: true })
        setIsLoading(false)
      }, 500)
    } else {
      baseAPI.defaults.headers.common.Authorization = token
    }

    return () => {
      setIsLoading(false)
    }
  }, [])

  return (
    <>
      {isLoading ? (
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
