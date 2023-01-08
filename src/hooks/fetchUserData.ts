import { useEffect } from 'react'
import { useUserStore } from '../stores'
import { useUserQuery } from '../api/query'

export const fetchUserData = () => {
  const { userData, setUserData } = useUserStore()
  const { data, isFetched, isLoading, isError, error } = useUserQuery()

  useEffect(() => {
    // console.log(isLoading)
    if (isLoading) {
      // console.log('fetching data...')
    } else if (!isLoading) {
      // console.log('data fetched')
      if (data?.data.data.trainings.length !== 0) {
        // console.log('data training is not empty')
        setUserData({
          ...userData,
          trainings: data?.data.data.trainings || [],
        })
      } else {
        // console.log('data training is empty')
        setUserData({
          ...userData,
          trainings: [],
        })
      }
    } else if (error || isError) {
      // console.log('error fetching data')
    }
  }, [data, isLoading])

  return { data, isFetched, isLoading, isError }
}
