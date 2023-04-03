<template>
  <div>
    <div class="title">
      <v-row class="ma-0 rowTitle">
        <p ><b>WhatsApp Bots</b></p>
        <v-spacer></v-spacer>
        <v-btn prepend-icon="mdi-add">
          <p>Create New Bot</p>
        </v-btn>
      </v-row>
    </div>
    <div class="data">
        <v-card v-for="i in 12">
          <v-card-content class="v-card-content">
            <b>Haircut Menu Bot</b>
          </v-card-content>
          <v-card-text class="v-card-text1">
            Last updated: 20 mins ago
          </v-card-text>
          <v-card-text class="v-card-text2">
            “Hey thanks for contacting. WeSend team will contact you shortly otherwise select...”
          </v-card-text>
          <v-card-text class="v-card-text3">
            <p><b>Options:</b> 2</p>
            <p id="p1"><b>Refresh:</b> 15 mins</p>
          </v-card-text>
          <v-card-action class="v-card-action">
            <v-switch v-model="model" hide-details inset :label="`${label}`"></v-switch>
            <button>
              <img src="../../assets/images/trash.svg">
            </button>
          </v-card-action>
        </v-card>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      model: false,
      label: 'Deactive'
    }
  },
  watch: {
    model(e) {
      console.log(e);
      e ? this.label = 'Active' : this.label = 'Deactive'
    }
  }
};

</script>
<style>
.title{
  padding-top: 33px; 
  padding-bottom: 33px; 
  height: 114px;
}
.rowTitle{
  height: 100%;
  width: 100%;
}
.rowTitle p{
  margin: 0;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
  font-feature-settings: 'pnum' on, 'lnum' on;
  color: #111827;
}
.rowTitle button{
  height: 100%;
  border-radius: 30px;
}
.rowTitle button p{
  z-index: 1;
  height: 100%; 
  margin: 0;
  font-family: 'Lato';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #FFFFFF;
}
.data{
  display: flex; 
  justify-content:space-between; 
  flex-wrap: wrap;
}
.data .v-card{
  margin: 0; 
  padding: 0; 
  height: 233px; 
  background-color: white; 
  border-radius: 15px; 
  width: 250px; 
  padding-right: 23px; 
  padding-left: 23px; 
  padding-top: 20px;
}
.data .v-card .v-card-content{
  height: 24px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #374151;
}
.data .v-card .v-card-text1{
  margin-top: 5px;
  height: 18px;
  padding: 0; font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: #9CA3AF;
}
.v-card-text2{
  padding: 0; 
  font-size: 12px; 
  height: 54px; 
  margin-top: 14px; 
  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  color: #374151;
}
.v-card .v-card-text3{
  padding: 0; 
  margin-top: 12px;  
  font-size: 12px; 
  display: flex;
}
.v-card .v-card-text3 p{
  margin: 0;
}
.v-card-text3 #p1 {
  margin-left: 19px;
}
.v-card .v-card-text3 p b{
  font-family: 'Lato';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 150%;
  color: #111827;
}
.v-card-action{
  position: absolute; 
  left: 0; 
  right: 0; 
  bottom: 0; 
  height: 50px; 
  margin: 0; 
  padding: 0; 
  padding-right: 23px; 
  padding-left: 23px; 
  background-color: #F9F9FF; 
  display: flex; 
  align-items: center; 
  justify-content: space-between;
  margin-top: 15px;
}
.v-card-action button{
  width: 30px; 
  height: 30px; 
  background-color: #EFEFF8; 
  border-radius: 50%; 
  display: flex; 
  align-items: center; 
  justify-content: center;
}
.v-card-action button img{
  height: 15px; 
  width: 12px;
}
.v-switch .v-label{
  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  font-size: 9.18347px;
  line-height: 11px;
  color: #374151;
}
.v-selection-control--dirty .v-selection-control__wrapper .v-switch__track {
  background-color: #1FAF38;
}

.v-switch--inset .v-switch__track {
  background-color: #EBEBF8;
}

.v-switch--inset .v-switch__thumb {
  background-color: white;
  width: 15px;
  height: 15px;
}

.v-switch--inset .v-switch__track {
  width: 37px;
  height: 18px;
}

.data > div:nth-child(n+5) {
  margin-top: 25px;
}

.v-btn__underlay {
  background-color: black;
  border-radius: 30px;
}

svg.iconify {
  color: black;
  background-color: white;
  border-radius: 50%;
}
</style>
