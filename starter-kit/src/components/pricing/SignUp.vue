<!-- eslint-disable @typescript-eslint/no-empty-function -->
<script>
export default {
  name: 'SignUp',
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
