<!-- eslint-disable @typescript-eslint/no-empty-function -->
<script>
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
  margin-block-start: 30px;
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

@media (max-width: 480px) {
  .detail-name {
    flex-direction: column;
    gap: 20px;
  }

  .detail-name .detail-item {
    inline-size: 100%;
  }
}
</style>
