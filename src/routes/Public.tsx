import { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { useUserStore } from '../stores/UserStore'
import logo from '../assets/logo/SpeedReaderLoader.png'

export const Public = () => {
  const [isLoading, setIsLoading] = useState(false)

  const navigate = useNavigate()
  const { userData } = useUserStore()

  useEffect(() => {
    if (userData.token !== '') {
      setIsLoading(true)
      setTimeout(() => {
        navigate('/home', { replace: true })
        setIsLoading(false)
      }, 500)
    }

    return () => {
      setIsLoading(false)
    }
  }, [userData])

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
