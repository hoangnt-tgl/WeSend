<!-- eslint-disable vue/component-api-style -->
<script lang="ts">
import PaymentDetail from '@/components/pricing/PaymentDetail.vue'
import SignUp from '@/components/pricing/SignUp.vue'
import Verify from '@/components/pricing/Verify.vue'
import YourDetail from '@/components/pricing/YourDetail.vue'

const step = ref(1)
const verify = ref(false)
export default {
  components: {
    Verify,
    YourDetail,
    PaymentDetail,
    SignUp,
  },
  setup() {
    return {
      step,
      verify,
    }
  },
  methods: {
    nextStep() {
      if (this.step === 1) {
        this.step++
      }
      else if (this.step === 2 && this.verify === false)
        this.verify = true
      else if (this.step === 2 && this.verify === true) {
        this.step++
      }
    },
  },
}
</script>

<template>
  <div class="select">
    <div class="container">
      <div class="select__container">
        <h1>We<span>Send</span></h1>
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
              :class="{ current: step == item, success: step > item }"
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
          <div v-if="step === 1">
            <SignUp :action="nextStep" />
          </div>
          <div v-if="step === 2 && verify === false">
            <YourDetail :action="nextStep" />
          </div>
          <div v-if="step === 2 && verify === true">
            <Verify :action="nextStep" />
          </div>
          <div v-if="step === 3">
            <PaymentDetail :action="nextStep" />
          </div>

          <div
            v-for="item in 4"
            :key="item"
            class="stepper-content"
          >
            <Package />
          </div>
        </div>
        <p>Already a member. <a href="#">Sign in</a></p>
      </div>
      <div class="select__footer">
        <div class="select__footer__link">
          <a href="#">Contact Us</a>
          <span>|</span>
          <a href="#">Privacy Policy</a>
          <span>|</span>
          <a href="#">Terms & Conditions</a>
        </div>
        <p>© 2022 We Send. All Rights Reserved.</p>
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
  min-block-size: 140vh;
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
  inline-size: 230px;
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
  font-size: 14px;
  inset-block-end: -24px;
}

.stepper-item.success {
  /* .stepper-item-title {
    color: $green-1;
  } */
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
  color: #818181;
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

@media (min-width: 479px) {
  .stepper {
    inline-size: 300px;
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
</style>

<route lang="yaml">
meta:
  layout: blank
  action: read
  subject: Auth
  redirectIfLoggedIn: true
</route>
