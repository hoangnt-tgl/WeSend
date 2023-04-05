<template>
  <div>
    <div class="detail">
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
  </div>
</template>

<style scoped>
.detail {

}

.moneyBar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  border-radius: 15px;
  background: url("../../assets/images/layer.png") center right / cover no-repeat;
  block-size: 180px;
  gap: 16px;

  /* inline-size: 520px; */
}

.changePackage {

}

.btnChangePackage {
  border: 1px solid transparent;
  border-radius: 30px;
  background: #fff;
  block-size: 46px;
  color: #374151;
  inline-size: 149px;
  transition: var(--smooth);
}

.btnChangePackage:hover {
  border-color: var(--text-dark);
}

.textChangePackage {
  color: #374151;
  font-size: 15px;
  font-weight: 600;
}

.money {
  flex: 1;
}

.moneyMini {
  color: #fff;
  font-size: 34px;
  font-weight: 600;
}

.dateMini {
  color: #fff;
  font-size: 15px;
}

.mini {
  color: #fff;
  font-size: 16px;
}
</style>
