<!-- eslint-disable vue/component-api-style -->
<!-- eslint-disable @typescript-eslint/no-empty-function -->
<script  lang="ts">
import ImportContact from './importcontact/importContact.vue'
import Step1 from './step1/step1.vue'
import Step2 from './step2/step2.vue'
import Step3 from './step3/step3.vue'
import Step4 from './step4/step4.vue'
import { btnBlack } from '@/constant/buttonColor'
import BtnRound from '@/components/buttons/roundedButton/index.vue'

export default {
  name: 'CreateCampain',
  components: {
    Step1,
    Step2,
    Step3,
    Step4,
    BtnRound,
    ImportContact,
  },
  setup() {
    const curentStep = ref(4)

    return {
      curentStep,
      btnBlack,
      steps: [
        {
          title: 'Create Campaign',
        },
        {
          title: 'Import Contacts',
        },
        {
          title: 'Build Message',
        },
        {
          title: 'Schedule Message',
        },
      ],

    }
  },
  methods: {
    nextStep() {
      if (this.curentStep < 4)
        this.curentStep++
    },
    prevStep() {
      this.curentStep--
    },
  },
}
</script>

<template>
  <div class="biggest-container">
    <div class="container">
      <div class="select__container">
        <h1 v-show="curentStep !== 3">
          Create New Campaign
        </h1>
        <div
          v-show="curentStep !== 3"
          class="wrapper-stepper mb-10"
        >
          <div class="stepper">
            <div class="stepper-progress">
              <div class="stepper-progress-bar" />
            </div>

            <div
              v-for="item in 4"
              :key="item"
              class="stepper-item"
              :class="{ current: curentStep === item, success: curentStep > item }"
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
              <span class="stepper-item-title">
                {{ steps[item - 1].title }}
              </span>
            </div>
          </div>
        </div>
        <div v-if="curentStep === 1">
          <Step1 :action="nextStep" />
        </div>
        <div v-else-if="curentStep === 2">
          <Step2 :action="nextStep" />
        </div>
        <div v-else-if="curentStep === 3">
          <ImportContact :action="nextStep" />
        </div>
        <div v-else-if="curentStep === 4">
          <Step3 :action="nextStep" />
        </div>
        <div v-else-if="curentStep === 5">
          <Step4 :action="nextStep" />
        </div>
      </div>
    </div>
    <div class="btn-phone-container">
      <div
        v-if="curentStep !== 3"
        class="btn-phone"
      >
        <BtnRound
          button-title="continue"
          :action="nextStep"
          color="btnBlack.color"
          :style="btnBlack"
          variant="contained"
        />
      </div>
      <div
        v-else
        class="btn-phone"
      >
        <BtnRound
          button-title="next"
          :action="nextStep"
          color="btnBlack.color"
          :style="btnBlack"
          variant="contained"
          icon-a-n-b="tabler-chevron-right"
          :icon-a-color-n-b="btnBlack.color"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.select {
  background: url(../../assets/images/login/background.png) center / cover no-repeat;
  min-block-size: 140vh;
  padding-block: 0;

  /* padding-inline: 16.5px; */
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-block: 0;
  margin-inline: auto;

  /* max-inline-size: 466px; */

  /* min-block-size: 140vh; */
}

.select__container {
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.select__container h1 {
  color: #111827;
  font-size: 32px;
  font-weight: 700;
  line-height: 48px;
  margin-block-end: 38px;
}

.select__container h1 span {
  font-weight: 400;
}

.select__content {
  border-radius: 15px;
  background: #fff;
  inline-size: 100%;
  padding-block: 40px;
  padding-inline: 27.5px;
}

.select__content p {
  color: #374151;
  font-size: 14px;
  text-align: center;
}

.select__content h2 {
  color: #111827;
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  margin-block-end: 10px;
  text-align: center;
}

.select__container > p {
  color: #374151;
  font-size: 14px;
  margin-block: 30px 0;
}

.select__container > p a {
  color: #6354d9;
}

.select__container > p a {
  color: #6354d9;
  text-decoration: underline;
}

.tx-green-1 {
  color: green;
  font-weight: 600;
}

.wrapper-stepper {
  inline-size: 100%;
}

.stepper {
  position: relative;
  z-index: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  inline-size: 320px;
  margin-block: 0 30px;
  margin-inline: auto;
}

.stepper-progress {
  position: absolute;
  z-index: -1;
  background-color: #e5e7eb;
  block-size: 2px;
  inset-inline: 0;
  margin-block: 0;
  margin-inline: auto;
}

.stepper-progress-bar {
  position: absolute;
  background-color: #11b981;
  block-size: 100%;
  inline-size: 0%;
  inset-inline-start: 0;
  transition: all 0.4s;
}

.stepper-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #111827;
  transition: all 0.4s;
}

.stepper-item-counter {
  /* border: 2px solid $default; */
  position: relative;
  display: grid;
  border-radius: 100%;
  background-color: #e5e7eb;
  block-size: 36px;
  inline-size: 36px;
  place-items: center;
}

.stepper-item-counter .icon-success {
  position: absolute;
  opacity: 0;
  transform: scale(0);
  transition: all 0.4s;
}

.stepper-item-counter .number {
  font-size: 16.5px;
  font-weight: 600;
  transition: all 0.4s;
}

.stepper-item-title {
  position: absolute;
  display: none;
  color: #9ca3af;
  font-size: 14px;
  inline-size: 128px;
  inset-block-end: -24px;
  text-align: center;
}

.stepper-item.success .stepper-item-title {
  display: none;
  color: #10b981;
}

.stepper-item.success .stepper-item-counter {
  /* border-color: $green-1; */
  background-color: #c8ebc1;
  color: #fff;
  font-weight: 600;
}

.stepper-item.success .stepper-item-counter .icon-success {
  inline-size: 36px;
  opacity: 1;
  transform: scale(1);
}

.stepper-item.success .stepper-item-counter .number {
  opacity: 0;
  transform: scale(0);
}

.stepper-item.current .stepper-item-counter {
  /* border-color: $green-1;
  background-color: $green-1; */
  background: #6366f1;
  color: #fff;
  font-weight: 600;
}

.stepper-item.current .stepper-item-title {
  display: block;
  color: #6366f1;
}

.stepper-pane {
  color: #333;

  /* box-shadow: 0 8px 12px rgba($color: #000000, $alpha: 0.09); */
  margin-block: 40px;
  margin-inline: 0;
  padding-block: 120px;
  padding-inline: 60px;
  text-align: center;
}

.controls {
  display: flex;
}

/* footer */
.select__footer {
  font-size: 14px;
  padding-block-end: 30px;
  text-align: center;
}

.select__footer__link a {
  color: #374151;
}

.select__footer__link a:hover {
  text-decoration: underline;
}

.select__footer__link span {
  color: #374151;
  padding-block: 0;
  padding-inline: 4px;
}

.select__footer p {
  color: #374151;
  margin-block: 10px 0;
}

@media (min-width: 350px) {
  .select__container h1 {
    font-size: 24px;
    margin-block-end: 25px;
  }

  .btn-phone-container {
    position: absolute;
    display: flex;
    justify-content: flex-end;
    background: #fff;
    inset-block-end: 0;
    inset-inline: 0;
    padding-block: 10px;
    padding-inline: 10px;
  }

  .btn-phone {
    inline-size: 30%;
    max-inline-size: 145px;
  }
}

@media (min-width: 479px) {
  .stepper {
    inline-size: 420px;
  }

  p,
  .select__footer {
    font-size: 16px !important;
  }

  .select__content h2 {
    font-size: 24px;
  }

  .input-number button {
    display: block;
    font-size: 16px;
  }

  .select__content p {
    inline-size: 65%;
    margin-block: 0 10px;
    margin-inline: auto;
  }

  .select-input-checkbox button {
    display: none;
  }

  .input-number input {
    font-size: 16px;
  }

  .input-checkbox label {
    font-size: 16px;
  }

  .stepper-item-counter {
    block-size: 48px;
    inline-size: 48px;
  }

  .stepper-item-counter .number {
    font-size: 22px;
  }

  .stepper-item.success .stepper-item-counter .icon-success {
    inline-size: 48px;
    opacity: 1;
    transform: scale(1);
  }
}

@media (min-width: 550px) {
  .stepper {
    inline-size: 492px;
  }

  .stepper-item-title,
  .stepper-item.success .stepper-item-title {
    display: block;
  }
}

@media (min-width: 768px) {
  .btn-phone-container {
    display: none;
  }
}
</style>
