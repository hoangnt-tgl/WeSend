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
  <div>
    <div class="title">
      <VRow class="ma-0 rowTitle">
        <p><b>WhatsApp Bots</b></p>
        <VSpacer />
        <VBtn prepend-icon="mdi-add">
          <p>Create New Bot</p>
        </VBtn>
      </VRow>
    </div>
    <div class="data">
      <VCard v-for="i in 12">
        <VCardContent class="v-card-content">
          <b>Haircut Menu Bot</b>
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
  block-size: 114px;
  padding-block: 33px;
}

.rowTitle {
  block-size: 100%;
  inline-size: 100%;
}

.rowTitle p {
  margin: 0;
  color: #111827;
  font-family: Poppins;
  font-feature-settings: "pnum" on, "lnum" on;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 36px;
}

.rowTitle button {
  border-radius: 30px;
  block-size: 100%;
}

.rowTitle button p {
  z-index: 1;
  margin: 0;
  block-size: 100%;
  color: #fff;
  font-family: Lato;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 19px;
}

.data {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.data .v-card {
  padding: 0;
  border-radius: 15px;
  margin: 0;
  background-color: white;
  block-size: 233px;
  inline-size: 250px;
  padding-block-start: 20px;
  padding-inline: 23px;
}

.data .v-card .v-card-content {
  block-size: 24px;
  color: #374151;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
}

.data .v-card .v-card-text1 {
  padding: 0;
  block-size: 18px;
  color: #9ca3af;
  font-family: Poppins;
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
  font-family: Lato;
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
  font-family: Lato;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
}

.v-card-action {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0;
  margin: 0;
  background-color: #f9f9ff;
  block-size: 50px;
  inset-block-end: 0;
  inset-inline: 0;
  margin-block-start: 15px;
  padding-inline: 23px;
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
  font-family: Lato;
  font-size: 9.18347px;
  font-style: normal;
  font-weight: 400;
  line-height: 11px;
}

.v-selection-control--dirty .v-selection-control__wrapper .v-switch__track {
  background-color: #1faf38;
}

.v-switch--inset .v-switch__track {
  background-color: #ebebf8;
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

.data > div:nth-child(n+5) {
  margin-block-start: 25px;
}

.v-btn__underlay {
  border-radius: 30px;
  background-color: black;
}

svg.iconify {
  border-radius: 50%;
  background-color: white;
  color: black;
}
</style>
