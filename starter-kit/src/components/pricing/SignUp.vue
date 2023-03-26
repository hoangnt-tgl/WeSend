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
            <img src="../../assets/icons/circle-check.svg" alt="icon" />
            <p>Lorem ipsum dolar sit efelsd</p>
          </div>
          <div class="desc-item">
            <img src="../../assets/icons/circle-check.svg" alt="icon" />
            <p>Lorem ipsum dolar</p>
          </div>
          <div class="desc-item">
            <img src="../../assets/icons/circle-check.svg" alt="icon" />
            <p>Lorem ipsum dolar sit</p>
          </div>
          <div class="desc-item">
            <img src="../../assets/icons/circle-check.svg" alt="icon" />
            <p>Lorem ipsum dolar</p>
          </div>
          <div class="desc-item">
            <img src="../../assets/icons/circle-check.svg" alt="icon" />
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
            <img src="../../assets/icons/circle-check.svg" alt="icon" />
            <p>Lorem ipsum dolar sit efelsd</p>
          </div>
          <div class="desc-item">
            <img src="../../assets/icons/circle-check.svg" alt="icon" />
            <p>Lorem ipsum dolar</p>
          </div>
          <div class="desc-item">
            <img src="../../assets/icons/circle-check.svg" alt="icon" />
            <p>Lorem ipsum dolar sit</p>
          </div>
          <div class="desc-item">
            <img src="../../assets/icons/circle-check.svg" alt="icon" />
            <p>Lorem ipsum dolar</p>
          </div>
          <div class="desc-item">
            <img src="../../assets/icons/circle-check.svg" alt="icon" />
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
            <img src="../../assets/icons/circle-check.svg" alt="icon" />
            <p>Lorem ipsum dolar sit efelsd</p>
          </div>
          <div class="desc-item">
            <img src="../../assets/icons/circle-check.svg" alt="icon" />
            <p>Lorem ipsum dolar</p>
          </div>
          <div class="desc-item">
            <img src="../../assets/icons/circle-check.svg" alt="icon" />
            <p>Lorem ipsum dolar sit</p>
          </div>
          <div class="desc-item">
            <img src="../../assets/icons/circle-check.svg" alt="icon" />
            <p>Lorem ipsum dolar</p>
          </div>
          <div class="desc-item">
            <img src="../../assets/icons/circle-check.svg" alt="icon" />
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
.package {
  min-width: 981px;
  padding: 54px 30px 0;
  background: #fff;
  border-radius: 15px;
  overflow: hidden;
}

.package h2 {
  text-align: center;
  color: #111827;
  font-size: 24px;
}

.package-list {
  padding-top: 40px;
  display: grid;
  column-gap: 30px;
  grid-template-columns: repeat(3, 1fr);
  overflow-x: scroll;
  padding-bottom: 54px;
}

.package-item {
  background: #F6F6FE;
  border-radius: 15px;
  padding: 30px;
}

.package-item:nth-child(2) {
  background: #FFFFFF;
  box-shadow: 0px 34px 54px rgba(0, 0, 0, 0.07);
}

.package-item>p {
  color: #4B5563;
  font-size: 16px;
  margin-bottom: 0;
}

.package-item h1 {
  color: #111827;
  font-size: 34px;
}

.package-item-desc {
  display: flex;
  gap: 9px;
  flex-direction: column;
  margin-top: 12px;
}

.desc-item {
  display: flex;
  gap: 4px;
  align-items: flex-start;
}

.desc-item p {
  font-size: 14px;
  margin-bottom: 0px;
}

.desc-item img {
  width: 18px;
  height: 18px;
  margin-top: 1px;
}

.package-item button {
  background: #111827;
  border-radius: 5px;
  padding: 15px 0;
  width: 100%;
  margin-top: 24px;
  color: #fff;

  transition: all 0.4s;
}

.package-item button:hover {
  background: rgba(17, 24, 39, 0.7);
}
</style>
