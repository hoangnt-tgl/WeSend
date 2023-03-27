<!-- eslint-disable @typescript-eslint/no-empty-function -->
<script>
export default {
  name: 'YourDetail',
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
      <h2>Add your details</h2>
      <div class="detail-input">
        <div class="detail-name">
          <div class="detail-item">
            <p>First name</p>
            <input type="text" placeholder="Roger" />
          </div>
          <div class="detail-item">
            <p>Last name</p>
            <input type="text" placeholder="John" />
          </div>
        </div>
        <div class="detail-item">
          <p>Email</p>
          <input type="email" placeholder="John@gmail.com" />
        </div>
        <div class="detail-item">
          <p>Phone</p>
          <input type="number" placeholder="0123456789" />
        </div>
      </div>
      <div class="detail-button">
        <button @click="action">
          Sign up
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
  font-weight: 600;
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

@media (max-width: 480px) {
  .detail-name {
    flex-direction: column;
    gap: 20px;
  }

  .detail-name .detail-item {
    width: 100%;
  }
}
</style>
