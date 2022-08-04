<template>
  <div class="layout" :style="{ color: $tokens('colors.primary.200') }">
    <slot />
  </div>
</template>

<style scoped>
.layout {
  /*
  ** TODO: this does not work
  color: v-bind($tokens('colors.primary.500'))
  */
}
</style>
