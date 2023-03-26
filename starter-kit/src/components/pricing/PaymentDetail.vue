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
          <input type="number" placeholder="XXXX XXXX XXXX XXXX" />
        </div>
        <div class="detail-item">
          <p>Name on Card</p>
          <input type="text" placeholder="Roger" />
        </div>
        <div class="detail-name">
          <div class="detail-item">
            <p>Expiry Date</p>
            <input type="text" placeholder="MM/YYYY" />
          </div>
          <div class="detail-item">
            <p>CVV</p>
            <input type="number" placeholder="XXX" />
          </div>
        </div>
      </div>
      <div class="detail-checkbox">
        <input type="checkbox" />
        <label>By signing up I agree to <a href="#">Terms & Condtions</a> and
          <a href="#">Privacy policy</a></label>
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
  padding: 0 16.5px;
}

.detail-container {
  max-width: 478px;
  margin: 0 auto;
  padding: 40px 30px 40px;
  background: #fff;
  border-radius: 15px;
}

.detail-button {
  text-align: center;
  margin-top: 30px;
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
  text-align: center;
  color: #111827;
  font-size: 24px;
}

.detail-input {
  margin-top: 24px;
  display: flex;
  gap: 20px;
  flex-direction: column;
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
  margin-bottom: 0;
  color: #374151;
  font-size: 16px;
}

.detail-item input {
  color: #374151;
  background: #F3F4FB;
  border-radius: 5px;
  padding: 15px;
  outline: none;
}

.detail-name .detail-item {
  width: calc(50% - 5px);
}

.detail-checkbox {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
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
