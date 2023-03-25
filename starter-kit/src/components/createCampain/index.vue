<!-- eslint-disable vue/component-api-style -->
<!-- eslint-disable @typescript-eslint/no-empty-function -->
<script  lang="ts">
import Step1 from './step1/step1.vue'
import Step2 from './step2/step2.vue'
import Step3 from './step3/step3.vue'

export default {
  name: 'CreateCampain',
  components: {
    Step1,
    Step2,
    Step3,
  },
  setup() {
    const step = ref(0)

    return {
      step,
    }
  },
  methods: {
    nextStep() {
      if (this.step < 3)
        this.step++
    },
    prevStep() {
      this.step--
    },
  },
}
</script>

<template>
  <div v-if="step === 0">
    <Step1 :action="nextStep" />
  </div>
  <div v-else-if="step === 1">
    <Step2 :action="nextStep" />
  </div>
  <div v-else-if="step === 2">
    <Step3 :action="nextStep" />
  </div>
</template>

<style>
/* .user-profile {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid red;
  background: white;
  block-size: 100%;
  inline-size: 1000px;
} */
</style>
