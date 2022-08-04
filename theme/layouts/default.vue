<template>
  <div class="w-[100vw] h-[100vh] bg-primary-50 dark:bg-primary-900 p-8">
    <div class="flex items-center justify-between">
      <h1 class="text-2xl font-bold dark:text-white text-black">
        {{ $theme.value.name }}
      </h1>

      <ThemeSelect />
    </div>

    <hr class="my-4 border-primary-900 dark:border-primary-50">

    <main class="prose dark:prose-invert max-w-full">
      <slot />
    </main>
  </div>
</template>
