<script setup lang="ts">
const myTheme = useAppConfig().myTheme
</script>

<template>
  <div>
    <header class="h-header text-grey flex items-center p-5 bg-primary-500">
      {{ myTheme?.name || 'My project' }}
    </header>
    <main class="p-5">
      <slot />
    </main>
  </div>
</template>

<style lang="postcss">
body {
  @apply h-0 font-primary;
}
</style>
