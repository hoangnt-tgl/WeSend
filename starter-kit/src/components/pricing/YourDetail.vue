<!-- eslint-disable @typescript-eslint/no-empty-function -->
<script>
export default {
  name: 'YourDetail',
  props: {
    action: {
      type: Function,
      default: () => {},
    },
  },
}
</script>

<template>
  <button @click="action">
    nextStep
  </button>
</template>
