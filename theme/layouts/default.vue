<template>
  <div class="layout" :style="{ color: $dt('colors.primary.200') }">
    <slot />
  </div>
</template>

<style scoped>
.layout {
  /*
  ** TODO: this does not work
  color: v-bind($dt('colors.primary.500'))
  */
}
</style>
