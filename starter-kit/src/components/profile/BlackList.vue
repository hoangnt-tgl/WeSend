<script lang="ts">
export default {

  setup() {
    return {
      items: [
        { name: 'Varun Gupta', phoneNumber: '+91-99921312312' },
        { name: 'Varun Gupta', phoneNumber: '+91-99921312312' },
        { name: 'Varun Gupta', phoneNumber: '+91-99921312312' },
        { name: 'Varun Gupta', phoneNumber: '+91-99921312312' },
        { name: 'Varun Gupta', phoneNumber: '+91-99921312312' },
        { name: 'Varun Gupta', phoneNumber: '+91-99921312312' },
        { name: 'Varun Gupta', phoneNumber: '+91-99921312312' },
        { name: 'Varun Gupta', phoneNumber: '+91-99921312312' },
        { name: 'Varun Gupta', phoneNumber: '+91-99921312312' },
      ],
    }
  },

}
</script>

<template>
  <VCard>
    <div class="blacklList">
      <div class="blackListBar">
        <p class="textBlackList">
          Black List
        </p>
        <button class="btnAdd">
          Add New
        </button>
      </div>
      <div class="menu">
        <div class="nameBlackList">
          <p class="textMenuBlackList">
            NAME
          </p>
        </div>
        <div class="phoneBlackList">
          <p class="textMenuBlackList">
            PHONE NUMBER
          </p>
        </div>
      </div>

      <div style="overflow: auto;">
        <div
          v-for="item in items"
          :key="item.name"
          class="listBlackList"
        >
          <div class="first">
            <div class="nameBlackList">
              <p class="textInBlackList">
                {{ item.name }}
              </p>
            </div>
            <div class="phoneInBlackList">
              <p class="textInBlackList">
                {{ item.phoneNumber }}
              </p>
            </div>
          </div>
          <div class="buttonReLoad">
            <button class="btnReLoad">
              <img src="@/assets/images/rotate-21.png">
            </button>
          </div>
        </div>
      </div>
    </div>
  </VCard>
</template>

<style scoped>
.blacklList {
  block-size: 493px;
  margin-block-start: 22px;
  margin-inline-start: 30px;
}

.first {
  display: flex;
}

.blackListBar {
  display: flex;
  justify-content: space-between;
}

.textBlackList {
  color: #111827;
  font-size: 16px;
  margin-block-start: 8px;
}

.textMenuBlackList {
  color: #6b7280;
  font-size: 14px;
}

.btnAdd {
  border: 1px solid #d1d5db;
  border-radius: 100px;
  block-size: 40px;
  font-size: 13px;
  inline-size: 109px;
  margin-inline-end: 21px;
}

.menu {
  display: flex;
}

/* .phoneBlackList {

}

.phoneInBlackList {

} */

.listBlackList {
  display: flex;
  justify-content: space-between;
  block-size: 62px;
  border-block-end: 1px solid #e5e7eb;
  border-block-start: 1px solid #e5e7eb;
}

.textInBlackList {
  color: #000;
  font-size: 16px;
  margin-block: 20px;
}

.nameBlackList {
  inline-size: 176px;
}

.btnReLoad {
  align-self: right;
  margin-block: 20px;
  margin-inline-end: 2px;
}
</style>
