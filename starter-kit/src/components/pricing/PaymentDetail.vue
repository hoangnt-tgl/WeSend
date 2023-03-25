<!-- eslint-disable @typescript-eslint/no-empty-function -->
<script>
export default {
  name: 'PaymentDetail',
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
    Verify
  </button>
</template>
