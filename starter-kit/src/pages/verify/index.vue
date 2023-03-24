
import AppOtpInput from '@/@core/components/AppOtpInput.vue';

<template>
  <div class="verify">
    <div class="container">
      <div class="verify__container">
        <h1>We<span>Send</span></h1>
        <div class="verify__content">
          <h2>Verify</h2>
          <p>Please enter the code send on your phone for verification</p>
          <div class="input-number">
            <AppOtpInput />
          </div>
          <div class="verify__content-button">
            <button>Verify</button>
          </div>

          <p class="resend">Didn’t received the code. <a href="#">Resend</a> (20s)</p>
        </div>
        <p>New to WeSend. <a href="#">Sign up</a></p>
      </div>
      <div class="verify__footer">
        <div class="verify__footer__link">
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
.verify {
  background: url(../../assets/images/login/background.png) center / cover no-repeat;
  min-height: 115vh;
  padding: 0 16.5px;
}

.container {
  max-width: 480px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 115vh;
}

.verify__container {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.verify__container h1 {
  font-weight: 700;
  font-size: 32px;
  line-height: 48px;
  color: #111827;
  margin-bottom: 38px;
}

.verify__container h1 span {
  font-weight: 400;
}

.verify__content {
  background: #fff;
  border-radius: 15px;
  padding: 40px 27.5px;
  width: 100%;
}

.verify__content p {
  text-align: center;
  font-size: 14px;
  color: #374151;
}

.verify__content h2 {
  text-align: center;
  margin-bottom: 10px;
  color: #111827;
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
}

.verify__container>p {
  margin-top: 30px;
  margin-bottom: 0px;
  color: #374151;
  font-size: 14px;
}

.input-number {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.input-number input {
  background: #F3F4FB;
  padding: 15px;
  color: #374151;
  font-size: 14px;
  border-radius: 5px;
  width: 48px;
  outline: none;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type=number] {
  -moz-appearance: textfield;
}

.verify__content-button {
  text-align: center;
  margin: 30px 0;
}

.verify__content-button button {
  min-width: 122px;
  padding: 11px 0;
  text-align: center;
  color: #fff;
  font-size: 14px;
  background: #111827;
  border-radius: 100px;
  cursor: pointer;
  transition: all 0.4s;
  font-weight: 600;
}

.verify__content-button button:hover {
  background: rgba(17, 24, 39, 0.7);
}

.verify__content .resend {
  color: #374151;
}

.verify__content .resend a {
  text-decoration: underline;
  color: #374151;
}

.verify__container>p a {
  text-decoration: underline;
  color: #6354D9;
}

.verify__footer {
  font-size: 14px;
  padding-bottom: 30px;
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
  padding: 0 4px;
}

.verify__footer p {
  margin-bottom: 0;
  color: #374151;
  margin-top: 10px;
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
    width: 70%;
    margin: 0 auto 20px;
  }

  .verify__content .resend {
    margin: 0 auto;
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
