import { baseAPI } from '../utils'
import { useQuery } from '@tanstack/react-query'
import { useUserStore } from '../../stores'

export const useUserQuery = () => {
  const { userData } = useUserStore()
  const query = useQuery({
    queryKey: ['current-user'],
    queryFn: () =>
      baseAPI.get(`/auth/users/${userData.userId}`, {
        headers: {
          Authorization: userData.token,
        },
      }),
  })

  return query
}
