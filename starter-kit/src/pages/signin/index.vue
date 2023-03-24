<template>
  <div class="sign-up">
    <div class="container">
      <div class="sign-up__container">
        <h1>We<span>Send</span></h1>
        <div class="sign-up__content">
          <h2>Sign In</h2>
          <p>Enter your phone number to Sign in
            to your account</p>
          <div class="input-number">
            <input type="number" placeholder="+972" />
            <input type="number" placeholder="0000000000" class="phone-number" />
            <button>Sign in</button>
          </div>
          <div class="sign-up-input-checkbox">
            <div class="input-checkbox">
              <input type="checkbox" />
              <label>Keep me Sign in</label>
            </div>
            <button>Sign in</button>
          </div>
        </div>
        <p>New to WeSend. <a href="#">Sign up</a></p>
      </div>
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

.sign-up__container {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.sign-up__container h1 {
  font-weight: 700;
  font-size: 32px;
  line-height: 48px;
  color: #111827;
  margin-bottom: 38px;
}

.sign-up__container h1 span {
  font-weight: 400;
}

.sign-up__content {
  background: #fff;
  border-radius: 15px;
  padding: 40px 27.5px;
  width: 100%;
}

.sign-up__content p {
  text-align: center;
  font-size: 14px;
  color: #374151;
}

.sign-up__content h2 {
  text-align: center;
  margin-bottom: 10px;
  color: #111827;
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
}

.sign-up__container>p {
  margin-top: 30px;
  margin-bottom: 0px;
  color: #374151;
  font-size: 14px;
}

.sign-up__container>p a {
  color: #6354D9;
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
  background: #F3F4FB;
  padding: 15px;
  color: #374151;
  font-size: 14px;
  border-radius: 5px;
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

.input-number input:first-child {
  width: 70px;
}

.phone-number {
  width: 100%;
}

.sign-up-input-checkbox {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 32px;
}

.input-checkbox label {
  margin-left: 8px;
  font-size: 14px;
  color: #374151;
}

.sign-up-input-checkbox button,
.input-number button {
  min-width: 93px;
  padding: 15px 0;
  text-align: center;
  color: #fff;
  font-size: 14px;
  background: #111827;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.4s;
}

.sign-up-input-checkbox button:hover,
.input-number button:hover {
  background: rgba(17, 24, 39, 0.7);
}

.sign-up__container>p a {
  text-decoration: underline;
  color: #6354D9;
}

.sign-up__footer {
  font-size: 14px;
  padding-bottom: 30px;
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
  padding: 0 4px;
}

.sign-up__footer p {
  margin-bottom: 0;
  color: #374151;
  margin-top: 10px;
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
    width: 65%;
    margin: 0 auto 10px;
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
