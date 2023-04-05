<!-- eslint-disable @typescript-eslint/no-empty-function -->
<!-- eslint-disable vue/component-api-style -->
<script>
import AppOtpInput from '@/@core/components/AppOtpInput.vue'

export default {
  name: 'Verify',
  components: {
    AppOtpInput,
  },
  props: {
    action: {
      type: Function,
      default: () => {},
    },
  },

}
</script>

<template>
  <div class="verify__container">
    <h1>
      <img
        src="../../assets/images/logo.png"
        alt="logo"
      >
    </h1>
    <div class="verify__content">
      <h2>Verify</h2>
      <p>Please enter the code send on your phone for verification</p>
      <div class="input-number">
        <AppOtpInput />
      </div>
      <div class="verify__content-button">
        <button @click="action">
          Verify
        </button>
      </div>

      <p class="resend">
        Didn’t received the code. <a href="#">Resend</a> (20s)
      </p>
    </div>
    <p>New to WeSend. <a href="#">Sign up</a></p>
  </div>
</template>

<style scoped>
h1 img {
  inline-size: 150px;
}

.verify__container {
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.verify__container h1 {
  color: #111827;
  font-size: 32px;
  font-weight: 700;
  line-height: 48px;
  margin-block-end: 38px;
}

.verify__container h1 span {
  font-weight: 400;
}

.verify__content {
  border-radius: 15px;
  background: #fff;
  inline-size: 100%;
  padding-block: 40px;
  padding-inline: 27.5px;
}

.verify__content p {
  color: #374151;
  font-size: 14px;
  text-align: center;
}

.verify__content h2 {
  color: #111827;
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  margin-block-end: 10px;
  text-align: center;
}

.verify__container > p {
  color: #374151;
  font-size: 14px;
  margin-block: 30px 0;
}

.input-number {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.input-number input {
  padding: 15px;
  border-radius: 5px;
  background: #f3f4fb;
  color: #374151;
  font-size: 14px;
  inline-size: 48px;
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

.verify__content-button {
  margin-block: 30px;
  margin-inline: 0;
  text-align: center;
}

.verify__content-button button {
  border-radius: 100px;
  background: #111827;
  color: #fff;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  min-inline-size: 122px;
  padding-block: 11px;
  padding-inline: 0;
  text-align: center;
  transition: all 0.4s;
}

.verify__content-button button:hover {
  background: rgba(17, 24, 39, 70%);
}

.verify__content .resend {
  color: #374151;
}

.verify__content .resend a {
  color: #374151;
  text-decoration: underline;
}

.verify__container > p a {
  color: #6354d9;
  text-decoration: underline;
}

.verify__footer {
  font-size: 14px;
  padding-block-end: 30px;
  text-align: center;
}

.verify__footer__link a {
  color: #374151;
}

.verify__footer__link a:hover {
  text-decoration: underline;
}

.verify__footer__link span {
  color: #374151;
  padding-block: 0;
  padding-inline: 4px;
}

.verify__footer p {
  color: #374151;
  margin-block: 10px 0;
}

@media (min-width: 479px) {
  p,
  .verify__footer {
    font-size: 16px !important;
  }

  .verify__content h2 {
    font-size: 24px;
  }

  .verify__content-button button {
    font-size: 16px;
  }

  .verify__content p {
    inline-size: 70%;
    margin-block: 0 20px;
    margin-inline: auto;
  }

  .verify__content .resend {
    margin-block: 0;
    margin-inline: auto;
  }

  .verify-input-checkbox button {
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
