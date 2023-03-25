<!-- eslint-disable vue/component-api-style -->
<script>
import { defineComponent } from 'vue'
import Verify from '@/components/signin/verify.vue'

const step = ref(1)
export default defineComponent({
  components: {
    Verify,
  },
  setup() {
    return {
      step,
    }
  },
  methods: {
    nextStep() {
      this.step++
    },
  },
})
</script>

<template>
  <div class="sign-up">
    <div class="container">
      <div
        v-if="step === 1"
        class="sign-up__container"
      >
        <h1>We<span>Send</span></h1>
        <div class="sign-up__content">
          <h2>Sign In</h2>
          <p>
            Enter your phone number to Sign in
            to your account
          </p>
          <div class="input-number">
            <input
              type="number"
              placeholder="+972"
            >
            <input
              type="number"
              placeholder="0000000000"
              class="phone-number"
            >
            <button @click="nextStep">
              Sign in
            </button>
          </div>
          <div class="sign-up-input-checkbox">
            <div class="input-checkbox">
              <input type="checkbox">
              <label>Keep me Sign in</label>
            </div>
            <button @click="nextStep">
              Sign in
            </button>
          </div>
        </div>
        <p>New to WeSend. <a href="#">Sign up</a></p>
      </div>
      <Verify v-else />

      <div class="sign-up__footer">
        <div class="sign-up__footer__link">
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
.sign-up {
  background: url(../../assets/images/login/background.png) center / cover no-repeat;
  min-block-size: 115vh;
  padding-block: 0;
  padding-inline: 16.5px;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-block: 0;
  margin-inline: auto;
  max-inline-size: 466px;
  min-block-size: 115vh;
}

.sign-up__container {
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.sign-up__container h1 {
  color: #111827;
  font-size: 32px;
  font-weight: 700;
  line-height: 48px;
  margin-block-end: 38px;
}

.sign-up__container h1 span {
  font-weight: 400;
}

.sign-up__content {
  border-radius: 15px;
  background: #fff;
  inline-size: 100%;
  padding-block: 40px;
  padding-inline: 27.5px;
}

.sign-up__content p {
  color: #374151;
  font-size: 14px;
  text-align: center;
}

.sign-up__content h2 {
  color: #111827;
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  margin-block-end: 10px;
  text-align: center;
}

.sign-up__container > p {
  color: #374151;
  font-size: 14px;
  margin-block: 30px 0;
}

.sign-up__container > p a {
  color: #6354d9;
}

.input-number button {
  display: none;
}

.input-number {
  display: flex;
  align-items: center;
  gap: 8px;
}

.input-number input {
  padding: 15px;
  border-radius: 5px;
  background: #f3f4fb;
  color: #374151;
  font-size: 14px;
  outline: none;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  margin: 0;
  appearance: none;
}

input[type="number"] {
  appearance: textfield;
}

.input-number input:first-child {
  inline-size: 70px;
}

.phone-number {
  inline-size: 100%;
}

.sign-up-input-checkbox {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-block-start: 32px;
}

.input-checkbox label {
  color: #374151;
  font-size: 14px;
  margin-inline-start: 8px;
}

.sign-up-input-checkbox button,
.input-number button {
  border-radius: 5px;
  background: #111827;
  color: #fff;
  cursor: pointer;
  font-size: 14px;
  min-inline-size: 93px;
  padding-block: 15px;
  padding-inline: 0;
  text-align: center;
  transition: all 0.4s;
}

.sign-up-input-checkbox button:hover,
.input-number button:hover {
  background: rgba(17, 24, 39, 70%);
}

.sign-up__container > p a {
  color: #6354d9;
  text-decoration: underline;
}

.sign-up__footer {
  font-size: 14px;
  padding-block-end: 30px;
  text-align: center;
}

.sign-up__footer__link a {
  color: #374151;
}

.sign-up__footer__link a:hover {
  text-decoration: underline;
}

.sign-up__footer__link span {
  color: #374151;
  padding-block: 0;
  padding-inline: 4px;
}

.sign-up__footer p {
  color: #374151;
  margin-block: 10px 0;
}

@media (min-width: 479px) {
  p,
  .sign-up__footer {
    font-size: 16px !important;
  }

  .sign-up__content h2 {
    font-size: 24px;
  }

  .input-number button {
    display: block;
    font-size: 16px;
  }

  .sign-up__content p {
    inline-size: 65%;
    margin-block: 0 10px;
    margin-inline: auto;
  }

  .sign-up-input-checkbox button {
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
