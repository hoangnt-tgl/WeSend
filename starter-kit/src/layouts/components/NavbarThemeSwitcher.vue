<script setup lang="ts">
import type { ThemeSwitcherTheme } from '@layouts/types'

const themes: ThemeSwitcherTheme[] = [
  {
    name: 'light',
    icon: 'tabler-sun-high',
  },
  {
    name: 'dark',
    icon: 'tabler-moon',
  },
]
</script>

<template>
  <h1 />
<!-- <ThemeSwitcher :themes="themes" /> -->
</template>
