import { Http } from '@/core/http'
import { readonly, ref } from 'vue'

const http = new Http()

export function useFetchUsers() {
  const users = ref<any[]>([])
  const loading = ref<boolean>(false)
  const error = ref<string | null>(null)

  const fetchUsers = async () => {
    loading.value = true
    error.value = null
    try {
      const response = await http.get('users')
      users.value = response
    } catch (err) {
      error.value = 'Failed to fetch users'
    } finally {
      loading.value = false
    }
  }

  return {
    users: readonly(users),
    loading: readonly(loading),
    error: readonly(error),
    fetchUsers
  }
}
