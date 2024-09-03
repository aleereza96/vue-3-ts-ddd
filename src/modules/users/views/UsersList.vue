<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useUsersStore } from '../store/users.store'
import { onMounted } from 'vue'

const { error, users, loading } = storeToRefs(useUsersStore())
const { loadUsers } = useUsersStore()

onMounted(async () => {
  await loadUsers()
})
</script>

<template>
  <h1 v-if="loading">LOADING....</h1>
  <p class="text-red-500" v-else-if="error">{{ error }}</p>

  <div v-else>
    <pre>
      {{ users }}
    </pre>
  </div>
</template>

<style scoped></style>
