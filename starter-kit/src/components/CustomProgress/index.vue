<script>
export default {
  name: 'CustomProgress',

  setup() {
    return {
      length: ref(7),
    }
  },
}
</script>

<template>
  <div class="custom-progress">
    <VSlider
      v-model="length"
      :min="1"
      :max="60"
    />
  </div>
</template>

<style>
.custom-progress .v-slider.v-input--horizontal {
  margin: 0;
}

.custom-progress .v-slider.v-input--horizontal .v-slider-track__background {
  block-size: 7px !important;
}

.custom-progress .bg-primary {
  background: #f3f4f6 !important;
  opacity: 1 !important;
}

.custom-progress .v-slider-track__fill {
  background: #8b5cf6 !important;
  block-size: 7px !important;
}

.custom-progress .v-slider-thumb {
  border: 0 !important;
}

.custom-progress .v-slider-thumb__surface {
  background: #c7d2fe !important;
  block-size: 27px !important;
  box-shadow: none !important;
  inline-size: 27px !important;
}
</style>
