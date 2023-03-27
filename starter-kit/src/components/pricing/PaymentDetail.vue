<!-- eslint-disable @typescript-eslint/no-empty-function -->
<script>
export default {
  name: 'PaymentDetail',
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
      <h2>Payment Details</h2>
      <div class="detail-input">
        <div class="detail-item">
          <p>Credit Card Number</p>
          <input type="number" placeholder="XXXX XXXX XXXX XXXX">
        </div>
        <div class="detail-item">
          <p>Name on Card</p>
          <input type="text" placeholder="Roger">
        </div>
        <div class="detail-name">
          <div class="detail-item">
            <p>Expiry Date</p>
            <input type="text" placeholder="MM/YYYY">
          </div>
          <div class="detail-item">
            <p>CVV</p>
            <input type="number" placeholder="XXX">
          </div>
        </div>
      </div>
      <div class="detail-checkbox">
        <label class="input-checkbox">
          <label>By signing up I agree to <a href="#">Terms & Condtions</a> and
            <a href="#">Privacy policy</a></label>
          <input type="checkbox" checked="checked">
          <span class="checkmark"></span>
        </label>
      </div>


      <div class="detail-button">
        <button @click="action">
          Continue
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  margin: 0;
  appearance: none;
}

input[type="number"] {
  appearance: textfield;
}

.detail {
  padding-block: 0;
  padding-inline: 16.5px;
}

.detail-container {
  border-radius: 15px;
  background: #fff;
  margin-block: 0;
  margin-inline: auto;
  max-inline-size: 478px;
  padding-block: 40px;
  padding-inline: 30px;
}

.detail-button {
  margin-block-start: 100px;
  text-align: center;
}

.detail-button button {
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

.detail-button button:hover {
  background: rgba(17, 24, 39, 70%);
}

.detail-container h2 {
  color: #111827;
  font-size: 24px;
  text-align: center;
}

.detail-input {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-block-start: 24px;
}

.detail-name {
  display: flex;
  gap: 10px;
}

.detail-item {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.detail-item p {
  color: #374151;
  font-size: 16px;
  margin-block-end: 0;
  font-weight: 600;
}

.detail-item input {
  padding: 15px;
  border-radius: 5px;
  background: #f3f4fb;
  color: #374151;
  outline: none;
}

.detail-name .detail-item {
  inline-size: calc(50% - 5px);
}

.detail-checkbox {
  width: 100%;
}

.detail-checkbox a {
  color: #7C3AED;
  text-decoration: underline;
}

.input-checkbox {
  display: block;
  position: relative;
  padding-left: 30px;
  margin-bottom: 20px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  width: 100%;
}

.input-checkbox input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.input-checkbox label {
  color: #374151;
  position: absolute;
  top: 0;
  width: calc(100% - 30px);
}

.checkmark {
  position: absolute;
  top: 12px;
  left: 0;
  height: 22px;
  width: 22px;
  background-color: #F3F4FB;
  border-radius: 5px;
}

.input-checkbox input:checked~.checkmark {
  background: #6366f1;
}

.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

.input-checkbox input:checked~.checkmark:after {
  display: block;
}

.input-checkbox .checkmark:after {
  left: 9px;
  top: 5px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}

/* @media (max-width: 480px) {
  .detail-name {
    flex-direction: column;
    gap: 20px;
  }

  .detail-name .detail-item {
    width: 100%;
  }
} */
</style>
