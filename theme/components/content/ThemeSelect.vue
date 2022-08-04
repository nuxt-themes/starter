<script setup lang="ts">
const colorMode = useColorMode()

const onClick = () => (colorMode.value === 'light' ? (colorMode.preference = 'dark') : (colorMode.preference = 'light'))
</script>

<template>
  <button aria-label="Color Mode" class="inline-block w-6" @click="onClick">
    <ColorScheme placeholder="...">
      <Icon v-if="colorMode.value === 'dark'" name="heroicons-outline:moon" class="w-6 h-6 dark:text-white" />
      <Icon v-else name="heroicons-outline:sun" class="w-6 h-6 dark:text-white" />
    </ColorScheme>
  </button>
</template>
