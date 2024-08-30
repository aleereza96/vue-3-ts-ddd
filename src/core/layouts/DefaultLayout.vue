<template>
<DefaultHeader class="dark:!text-gray-300"></DefaultHeader>
<div class="flex bg-gray-50 overflow-y-auto">
  <DefaultSidebar class="dark:bg-primary-800 dark:!text-gray-300"></DefaultSidebar>
  <div class="grow dark:bg-primary-900 dark:!text-gray-300">
    <RouterView class="dark:!text-gray-300"></RouterView>
  </div>
</div>

</template>

<script setup lang="ts">
import DefaultHeader from './components/DefaultHeader.vue'
import DefaultSidebar from './components/DefaultSidebar.vue'
</script>

<style scoped></style>
