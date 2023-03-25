<!-- eslint-disable @typescript-eslint/no-empty-function -->
<script  lang="ts">
export default {
  name: 'RoundedButton',
  props: {
    buttonTitle: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    style: { type: Object, required: true },
    variant: { type: String, required: true },
    icon: { type: String, default: '' },
    action: {
      type: Function,
      default: () => {
      },
    },
  },
}
</script>

<template>
  <VBtn
    :style="style"
    :variant:any="variant"
    :color="color"
    class="btn-rounded"
    @click="action"
  >
    <VIcon
      v-if="icon"
      :icon="icon"
    />
    {{ buttonTitle }}
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
