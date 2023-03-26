<script lang="ts">
export default {
  name: 'Stepper',

}
</script>

<template>
  <div class="wrapper-stepper">
    <div class="stepper">
      <div class="stepper-progress">
        <div
          class="stepper-progress-bar"
          :style="`width:${stepperProgress}`"
        />
      </div>

      <div
        v-for="item in 3"
        :key="item"
        class="stepper-item"
        :class="{ current: step === item, success: step > item }"
      >
        <div class="stepper-item-counter">
          <img
            class="icon-success"
            src="../../assets/icons/verify.svg"
            alt="verify"
          >
          <span class="number">
            {{ item }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
