<!-- eslint-disable @typescript-eslint/no-empty-function -->
<script lang="ts">
export default {
  name: 'Verify',
  props: {
    action: {
      type: Function,
      default: () => { },
    },
  },
}
</script>

<template>
  <div class="detail">
    <div class="detail-container">
      <div class="verify__content">
        <h2>Verify</h2>
        <p>Please enter the code send on your phone for verification</p>
        <div class="input-number">
          <AppOtpInput />
        </div>
        <div class="verify__content-button">
          <button @click="() => action()">
            Verify
          </button>
        </div>

        <p class="resend">
          Didn’t received the code. <a href="#">Resend</a> (20s)
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.detail {
  margin-block: 0;
  margin-inline: auto;
  max-inline-size: 480px;
  padding-block: 0;
  padding-inline: 16.5px;
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
  font-size: 16px;
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
  font-size: 16px;
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
  font-size: 16px;
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
</style>
