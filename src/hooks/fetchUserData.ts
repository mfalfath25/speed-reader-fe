import { useEffect } from 'react'
import { useUserStore } from '../stores'
import { useUserQuery } from '../api/query'

export const fetchUserData = () => {
  const { userData, setUserData } = useUserStore()
  const { data, isFetched, isError } = useUserQuery()

  useEffect(() => {
    if (isFetched && data?.data !== undefined) {
      setUserData({
        ...userData,
        trainings: data?.data.data.trainings,
      })
    } else if (isError) {
      setUserData({
        ...userData,
        trainings: [],
      })
    }
  }, [])

  return { data, isFetched, isError }
}
