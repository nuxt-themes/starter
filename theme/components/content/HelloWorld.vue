<template>
  <div class="hello">
    <ContentSlot :use="$slots.default">
      Hello World
    </ContentSlot>
  </div>
</template>

<style lang="postcss" scoped>
.hello {
  color: $dt('colors.primary.500');
}
</style>
