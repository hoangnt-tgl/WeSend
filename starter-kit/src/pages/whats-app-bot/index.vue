<script>
export default {
  data() {
    return {
      model: false,
      label: 'Deactive',
    }
  },
  watch: {
    model(e) {
      console.log(e)
      e ? this.label = 'Active' : this.label = 'Deactive'
    },
  },
}
</script>

<template>
  <div class="what-apps">
    <div class="title">
      <p><b>WhatsApp Bots</b></p>
      <button>
        <img
          src="../../assets/icons/plus.svg"
          alt="icon plus"
        >
        <p>Create New Bot</p>
      </button>
    </div>
    <div class="data">
      <VCard v-for="i in 12">
        <div class="data-content">
          <VCardContent class="v-card-content">
            Haircut Menu Bot
          </VCardContent>
          <VCardText class="v-card-text1">
            Last updated: 20 mins ago
          </VCardText>
          <VCardText class="v-card-text2">
            “Hey thanks for contacting. WeSend team will contact you shortly otherwise select...”
          </VCardText>
          <VCardText class="v-card-text3">
            <p><b>Options:</b> 2</p>
            <p id="p1">
              <b>Refresh:</b> 15 mins
            </p>
          </VCardText>
        </div>
        <VCardAction class="v-card-action">
          <VSwitch
            v-model="model"
            hide-details
            inset
            :label="`${label}`"
          />
          <button>
            <img src="../../assets/images/trash.svg">
          </button>
        </VCardAction>
      </VCard>
    </div>
  </div>
</template>

<style scoped>
.title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-block-end: 20px;
}

.title {
  block-size: 100%;
  inline-size: 100%;
}

.title p {
  margin: 0;
  color: #111827;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 36px;
}

.title button {
  display: flex;
  align-items: center;
  border-radius: 30px;
  background: var(--text-dark);
  block-size: 100%;
  gap: 10px;
  padding-block: 14px;
  padding-inline: 24px;
  transition: var(--smooth);
}

.title button:hover {
  background: rgba(17, 24, 39, 80%);
}

.title button p {
  margin: 0;
  block-size: 100%;
  color: #fff;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 19px;
}

.data {
  display: grid;
  flex-wrap: wrap;
  justify-content: space-between;
  column-gap: 16px;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 16px;
}

.data .v-card {
  padding: 0;
  border-radius: 15px;
  margin: 0;
  background-color: white;
  min-inline-size: 200px;
}

.data-content {
  padding: 20px;
}

.data .v-card .v-card-content {
  block-size: 24px;
  color: #374151;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
}

.data .v-card .v-card-text1 {
  padding: 0;
  block-size: 18px;
  color: #9ca3af;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  margin-block-start: 5px;
}

.v-card-text2 {
  padding: 0;
  block-size: 54px;
  color: #374151;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  margin-block-start: 14px;
}

.v-card .v-card-text3 {
  display: flex;
  padding: 0;
  font-size: 12px;
  margin-block-start: 12px;
}

.v-card .v-card-text3 p {
  margin: 0;
}

.v-card-text3 #p1 {
  margin-inline-start: 19px;
}

.v-card .v-card-text3 p b {
  color: #111827;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
}

.v-card-action {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0;
  margin: 0;
  background-color: #f9f9ff;
  inset-block-end: 0;
  inset-inline: 0;
  padding-block: 10px;
  padding-inline: 20px;
}

.v-card-action button {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: #efeff8;
  block-size: 30px;
  inline-size: 30px;
}

.v-card-action button img {
  block-size: 15px;
  inline-size: 12px;
}

.v-switch .v-label {
  color: #374151;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 11px;
}

.v-switch--inset .v-switch__thumb {
  background-color: white;
  block-size: 15px;
  inline-size: 15px;
}

.v-switch--inset .v-switch__track {
  block-size: 18px;
  inline-size: 37px;
}

/* .data > div:nth-child(n+5) {
  margin-block-start: 25px;
} */

.v-btn__underlay {
  border-radius: 30px;
  background-color: black;
}

svg.iconify {
  border-radius: 50%;
  background-color: white;
  color: black;
}

@media (max-width: 1024px) {
  .data {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 768px) {
  .data {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .data {
    grid-template-columns: repeat(1, 1fr);
  }

  .what-apps {
    padding-block: 0;
    padding-inline: 20px;
  }
}

@media (max-width: 435px) {
  .title button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    border-radius: 50%;
    block-size: 45px;
    inline-size: 45px;
  }

  .title button p {
    display: none;
  }
}
</style>
