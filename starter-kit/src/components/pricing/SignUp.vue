<!-- eslint-disable @typescript-eslint/no-empty-function -->
<script>
export default {
  name: 'SignUp',
  props: {
    action: {
      type: Function,
      default: () => { },
    },
  },
}
</script>

<template>
  <div class="package">
    <h2>Select your package and Sign Up</h2>
    <div class="package-list">
      <div class="package-item">
        <p>Bronze</p>
        <h1>$12.99</h1>
        <div class="package-item-desc">
          <div class="desc-item">
            <img
              src="../../assets/icons/circle-check.svg"
              alt="icon"
            >
            <p>Lorem ipsum dolar sit efelsd</p>
          </div>
          <div class="desc-item">
            <img
              src="../../assets/icons/circle-check.svg"
              alt="icon"
            >
            <p>Lorem ipsum dolar</p>
          </div>
          <div class="desc-item">
            <img
              src="../../assets/icons/circle-check.svg"
              alt="icon"
            >
            <p>Lorem ipsum dolar sit</p>
          </div>
          <div class="desc-item">
            <img
              src="../../assets/icons/circle-check.svg"
              alt="icon"
            >
            <p>Lorem ipsum dolar</p>
          </div>
          <div class="desc-item">
            <img
              src="../../assets/icons/circle-check.svg"
              alt="icon"
            >
            <p>Lorem ipsum dolar sit</p>
          </div>
        </div>
        <button @click="action">
          Choose
        </button>
      </div>
      <div class="package-item">
        <p>Bronze</p>
        <h1>$12.99</h1>
        <div class="package-item-desc">
          <div class="desc-item">
            <img
              src="../../assets/icons/circle-check.svg"
              alt="icon"
            >
            <p>Lorem ipsum dolar sit efelsd</p>
          </div>
          <div class="desc-item">
            <img
              src="../../assets/icons/circle-check.svg"
              alt="icon"
            >
            <p>Lorem ipsum dolar</p>
          </div>
          <div class="desc-item">
            <img
              src="../../assets/icons/circle-check.svg"
              alt="icon"
            >
            <p>Lorem ipsum dolar sit</p>
          </div>
          <div class="desc-item">
            <img
              src="../../assets/icons/circle-check.svg"
              alt="icon"
            >
            <p>Lorem ipsum dolar</p>
          </div>
          <div class="desc-item">
            <img
              src="../../assets/icons/circle-check.svg"
              alt="icon"
            >
            <p>Lorem ipsum dolar sit</p>
          </div>
        </div>
        <button @click="action">
          Choose
        </button>
      </div>
      <div class="package-item">
        <p>Bronze</p>
        <h1>$12.99</h1>
        <div class="package-item-desc">
          <div class="desc-item">
            <img
              src="../../assets/icons/circle-check.svg"
              alt="icon"
            >
            <p>Lorem ipsum dolar sit efelsd</p>
          </div>
          <div class="desc-item">
            <img
              src="../../assets/icons/circle-check.svg"
              alt="icon"
            >
            <p>Lorem ipsum dolar</p>
          </div>
          <div class="desc-item">
            <img
              src="../../assets/icons/circle-check.svg"
              alt="icon"
            >
            <p>Lorem ipsum dolar sit</p>
          </div>
          <div class="desc-item">
            <img
              src="../../assets/icons/circle-check.svg"
              alt="icon"
            >
            <p>Lorem ipsum dolar</p>
          </div>
          <div class="desc-item">
            <img
              src="../../assets/icons/circle-check.svg"
              alt="icon"
            >
            <p>Lorem ipsum dolar sit</p>
          </div>
        </div>
        <button @click="action">
          Choose
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
::-webkit-scrollbar {
  block-size: 10px;
}

.package {
  overflow: hidden;
  border-radius: 15px;
  background: #fff;
  inline-size: 100%;
  margin-block: 0;
  margin-inline: auto;
  max-inline-size: 981px;
  padding-block: 54px 0;
  padding-inline: 0;
}

.package h2 {
  color: #111827;
  font-size: 24px;
  padding-block: 0;
  padding-inline: 30px;
  text-align: center;
}

.package-list {
  display: grid;

  /* column-gap: 30px; */
  grid-template-columns: repeat(3, 1fr);
  margin-block: 0;
  margin-inline: 30px 0;
  overflow-x: scroll;
  padding-block: 40px 54px;

  /* min-width: 921px; */
}

.package-item {
  padding: 30px;
  border-radius: 15px;
  background: #f6f6fe;
  inline-size: 287px;
  margin-inline-end: 30px;
}

.package-item:nth-child(2) {
  background: #fff;
  box-shadow: 0 34px 54px rgba(0, 0, 0, 7%);
}

.package-item > p {
  color: #4b5563;
  font-size: 16px;
  margin-block-end: 0;
}

.package-item h1 {
  color: #111827;
  font-size: 34px;
}

.package-item-desc {
  display: flex;
  flex-direction: column;
  gap: 9px;
  margin-block-start: 12px;
}

.desc-item {
  display: flex;
  align-items: flex-start;
  gap: 4px;
}

.desc-item p {
  font-size: 14px;
  margin-block-end: 0;
}

.desc-item img {
  block-size: 18px;
  inline-size: 18px;
  margin-block-start: 1px;
}

.package-item button {
  border-radius: 5px;
  background: #111827;
  color: #fff;
  inline-size: 100%;
  margin-block-start: 24px;
  padding-block: 15px;
  padding-inline: 0;
  transition: all 0.4s;
}

.package-item button:hover {
  background: rgba(17, 24, 39, 70%);
}

/* @media (max-width: 981px) {
  .package-list {
    margin: 0 0 0 30px;
  }
} */

@media (max-width: 480px) {
  .package h2 {
    text-align: start;
  }
}
</style>
