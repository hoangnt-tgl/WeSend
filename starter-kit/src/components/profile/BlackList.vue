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
        { name: 'Varun Gupta', phoneNumber: '+91-99921312312' },
      ],
    }
  },

}
</script>

<template>
  <div class="black-list">
    <div class="blacklList">
      <div class="blackListBar">
        <p class="textBlackList">
          Black List
        </p>
        <button class="btnAdd">
          + Add New
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

      <div class="list-item">
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
              <img src="@/assets/images/rotate-2 1.svg">
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
p {
  margin: 0 !important;
}

.black-list {
  border-radius: 15px;
  background: #fff;
  padding-block: 20px;
  padding-inline: 20px 0;
}

/* .blacklList {
  block-size: 493px;
} */

.first {
  display: flex;
  flex: 1;
  gap: 16px;
}

.blackListBar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-block-end: 30px;
  padding-inline-end: 20px;
}

.textBlackList {
  color: #111827;
  font-size: 16px;
  font-weight: 700;
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
  color: var(--text-dark);
  font-size: 13px;
  font-weight: 600;
  inline-size: 109px;
  transition: var(--smooth);
}

.menu {
  display: flex;
  gap: 16px;
  inline-size: calc(100% - 52px);
  padding-inline-end: 20px;
}

.list-item {
  block-size: 300px;
  overflow-y: scroll;
  padding-inline-end: 20px;
}

.listBlackList {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-block-end: 1px solid #e5e7eb;
  gap: 16px;
  padding-block: 20px;
  padding-inline: 0;
}

.listBlackList:last-child {
  border-block-end: 0;
}

.textInBlackList {
  color: #000;
  font-size: 16px;
  margin-block: 20px;
}

.nameBlackList {
  inline-size: 45%;
  min-inline-size: 100px;
}

.btnReLoad {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--border-gray);
  border-radius: 5px;
  block-size: 36px;
  inline-size: 36px;
  transition: var(--smooth);
}

.btnReLoad:hover,
.btnAdd:hover {
  border-color: var(--text-dark);
}

@media (max-width: 480px) {
  .menu {
    display: none;
  }

  .first {
    flex-direction: column;
    gap: 10px;
  }
}
</style>
