<template>
  <div class="hello-world">
    <ContentSlot :use="$slots.default" />
  </div>
</template>

<style lang="postcss" scoped>
.hello-world {
  color: $dt('color.primary.900');
}
</style>
