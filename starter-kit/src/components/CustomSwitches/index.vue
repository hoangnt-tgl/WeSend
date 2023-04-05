<script>
export default {
  name: 'CustomSwitches',

  setup() {
    return {
      switchOn: ref(false),
    }
  },
}
</script>

<template>
  <div class="custom-switch">
    <VSwitch
      v-model="switchOn"
      label="Active"
      value="on"
      color="success"
    />
  </div>
</template>

<style>
.custom-switch .v-switch__thumb {
  background-color: white !important;
  block-size: 12px !important;
  inline-size: 12px !important;
}

.custom-switch .v-switch__track {
  block-size: 18px;
}

/* .custom-switch .v-label {
  color: var(--text-dark) !important;
  opacity: 1;
} */
</style>
