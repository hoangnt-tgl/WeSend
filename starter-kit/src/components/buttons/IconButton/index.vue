<!-- eslint-disable @typescript-eslint/no-empty-function -->
<script lang="ts">
export default {
  name: 'IconButton',
  props: {
    style: { type: Object, required: true },
    icon: { type: String, required: true },
    class: { type: String, required: true },
    action: {
      type: Function,
      default: () => {},
    },
  },
}
</script>

<template>
  <VBtn
    :style="style"
    class="btn-rounded"
    @click="action"
  >
    <VIcon
      :icon="icon"
    />
  </VBtn>
</template>

<style>
@media screen and (min-width: 350px) {
  .btn-rounded {
    border: 1px solid #d1d5db !important;
    border-radius: 30px;
    inline-size: 100%;
    padding-block: 3px;
    padding-inline: 20px;
    text-transform: capitalize;
  }
}

@media screen and (min-width: 425px) {
  .notification-title {
    font-size: var(--font-size);
    white-space: unset;
  }

  .notification-date {
    font-size: var(--font-size-sm);
  }
}
</style>
