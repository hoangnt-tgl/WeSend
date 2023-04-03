<template>
  <VCard>
    <div>
      <div class="moneyBar">
        <div class="money">
          <div class="mini">
            Predium
          </div>
          <div class="moneyMini">
            $12.99
          </div>
          <div class="dateMini">
            Expires on: 24 Oct 2022
          </div>
        </div>
        <div class="changePackage">
          <button class="btnChangePackage">
            <div class="textChangePackage">
              Change Package
            </div>
          </button>
        </div>
      </div>
    </div>
  </VCard>
</template>

<style scoped>
.moneyBar {
  display: flex;
  justify-content: space-between;
  border-radius: 10px;
  background-color: rgb(123, 123, 219);
  block-size: 148px;

  /* inline-size: 520px; */
}

.changePackage {
  margin-block: 51px;
  margin-inline-end: 30px;
}

.btnChangePackage {
  border-radius: 30px;
  background: #fff;
  block-size: 46px;
  inline-size: 149px;
}

.textChangePackage {
  color: #111827;
  font-size: 15px;
}

.money {
  block-size: 88px;
  inline-size: 172px;
  margin-block: 30px;
  margin-inline-start: 30px;
}

.moneyMini {
  color: #fff;
  font-size: 34px;
}

.dateMini {
  block-size: 22px;
  color: #fff;
  font-size: 15px;
  inline-size: 172px;
}

.mini {
  color: #fff;
  font-size: 16px;
}
</style>
