import { defineStore } from 'pinia'
import { useFetchUsers } from '../services/fetch-users.api'

export const useUsersStore = defineStore('users', () => {
  const { users, loading, error, fetchUsers } = useFetchUsers()

  const loadUsers = async () => {
    await fetchUsers()
  }

  return {
    users,
    loading,
    error,
    loadUsers
  }
})
