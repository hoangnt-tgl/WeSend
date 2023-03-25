
<script>
export default {
  data: () => ({
    step: 1
  }),
  computed: {
    stepperProgress() {
      return (100 / 3) * (this.step - 1) + '%'
    }
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
              <div class="stepper-progress-bar" :style="'width:' + stepperProgress"></div>
            </div>

            <div class="stepper-item" :class="{ 'current': step == item, 'success': step > item }" v-for="item in 4"
              :key="item">
              <div class="stepper-item-counter">
                <img class="icon-success" src="../../assets/icons/verify.svg" alt="verify">
                <span class="number">
                  {{ item }}
                </span>
              </div>
            </div>
          </div>

          <div class="stepper-content" v-for="item in 4" :key="item">
            <Package></Package>
          </div>

          <div class="controls">
            <button class="btn btn--green-1" @click="step++" :disabled="step == 4">
              Siguiente
            </button>
          </div>
        </div>
        <p>New to WeSend. <a href="#">Sign up</a></p>
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
  min-height: 115vh;
  padding: 0 16.5px;
}

.container {
  max-width: 466px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 115vh;
}

.select__container {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.select__container h1 {
  font-weight: 700;
  font-size: 32px;
  line-height: 48px;
  color: #111827;
  margin-bottom: 38px;
}

.select__container h1 span {
  font-weight: 400;
}

.select__content {
  background: #fff;
  border-radius: 15px;
  padding: 40px 27.5px;
  width: 100%;
}

.select__content p {
  text-align: center;
  font-size: 14px;
  color: #374151;
}

.select__content h2 {
  text-align: center;
  margin-bottom: 10px;
  color: #111827;
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
}

.select__container>p {
  margin-top: 30px;
  margin-bottom: 0px;
  color: #374151;
  font-size: 14px;
}

.select__container>p a {
  color: #6354D9;
}

.select__container>p a {
  text-decoration: underline;
  color: #6354D9;
}

.tx-green-1 {
  color: green;
  font-weight: 600;
}

.wrapper-stepper {
  border-radius: 32px;
  /* box-shadow: ; */
}

.stepper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 400px;
  position: relative;
  z-index: 0;
  margin: 0 auto 30px;
}

.stepper-progress {
  position: absolute;
  background-color: #E5E7EB;
  height: 2px;
  z-index: -1;
  left: 0;
  right: 0;
  margin: 0 auto;
}

.stepper-progress-bar {
  position: absolute;
  left: 0;
  height: 100%;
  width: 0%;
  background-color: #11B981;
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
  height: 48px;
  width: 48px;
  display: grid;
  place-items: center;
  background-color: #E5E7EB;
  border-radius: 100%;
  /* border: 2px solid $default; */
  position: relative;
}

.stepper-item-counter .icon-success {
  position: absolute;
  opacity: 0;
  transform: scale(0);
  transition: all 0.4s;
}

.stepper-item-counter .number {
  font-size: 22px;
  font-weight: 600;
  transition: all 0.4s;
}

.stepper-item-title {
  position: absolute;
  font-size: 14px;
  bottom: -24px;
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
  background: #6366F1;
  color: #fff;
  font-weight: 600;
}

.stepper-item.current .stepper-item-title {
  color: #818181;
}

.stepper-pane {
  color: #333;
  text-align: center;
  padding: 120px 60px;
  /* box-shadow: 0 8px 12px rgba($color: #000000, $alpha: 0.09); */
  margin: 40px 0;
}

.controls {
  display: flex;
}

/* .btn {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px 16px;
  border: 1px solid;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  line-height: 1.5;
  transition: all 150ms;
  border-radius: 4px;
  width: fit-content;
  font-size: 0.75rem;
  color: #333;
  background-color: #f0f0f0;
  border-color: #f0f0f0;

  &:disabled {
    opacity: 0.5;
    pointer-events: none;
  }

  &--green-1 {
    background-color: $green-1;
    border-color: $green-1;
    color: #fff;
    margin-left: auto;
  }
} */

/* footer */
.select__footer {
  font-size: 14px;
  padding-bottom: 30px;
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
  padding: 0 4px;
}

.select__footer p {
  margin-bottom: 0;
  color: #374151;
  margin-top: 10px;
}

@media (min-width: 479px) {

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
    width: 65%;
    margin: 0 auto 10px;
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
}
</style>

<route lang="yaml">
meta:
  layout: blank
  action: read
  subject: Auth
  redirectIfLoggedIn: true
</route>
