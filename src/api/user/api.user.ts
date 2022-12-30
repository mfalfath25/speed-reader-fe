import { useEffect } from 'react'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'

// export function useUser() {
//   const queryClient = useQueryClient()
//   return useQuery('user', async () => {
//     const { data } = await axios.get('/api/user')
//     return data
//   })
// }
