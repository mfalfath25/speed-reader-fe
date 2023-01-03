import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { useGlobalStore } from '../stores'
import { useUserStore } from '../stores/UserStore'
import logo from '../assets/logo/SpeedReaderLoader.png'

export const Public = () => {
  const navigate = useNavigate()
  const { userData } = useUserStore()
  const { isLoading, setIsLoading } = useGlobalStore()

  useEffect(() => {
    if (userData.token !== '') {
      setIsLoading(true)
      navigate('/', { replace: true })
    }
    setIsLoading(false)
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
