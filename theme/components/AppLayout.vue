<template>
  <div>
    <header>{{ $theme.value.name }}</header>
    <main><slot /></main>
  </div>
</template>

<style>
body {
  margin: 0;
}
header {
  background: #eee;
  padding: 10px;
}
main {
  padding: 10px;
}
</style>