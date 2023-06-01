<script setup lang="ts">
const myTheme = useAppConfig().myTheme
</script>

<template>
  <div>
    <header
      h-header
      text-grey
      bg-primary-500
      flex
      items-center
      p-5
    >
      {{ myTheme?.name || 'My project' }}
    </header>
    <main p-5>
      <slot />
    </main>
  </div>
</template>

<style lang="postcss">
body {
  margin: 0;
  font-family: $dt('font.primary');
}
</style>
