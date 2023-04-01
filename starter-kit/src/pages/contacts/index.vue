<template>
  <div id="main">
    <v-container id="content" flex>
      <div class="d-flex childContent">
        <div class="d-flex childContent2">
          <p><b>Contact List</b></p>
          <v-text-field class="search" prepend-inner-icon="mdi-magnify" label="Search"></v-text-field>
        </div>
        <div class="d-flex contentBtn">
          <v-btn class="text-none btnWS" width="171px" height="46px" color="medium-emphasis" variant="outlined">
            <img src="../../assets/images/iconify-svg/WhatsApp.svg.webp">
            <p><b>Whatsapp Sync</b></p>
          </v-btn>
          <v-btn class="text-none btnEp" prepend-icon="mdi-file-export" color="medium-emphasis" height="46px"
            width="111px" variant="outlined">
            <b>Export</b>
          </v-btn>
          <v-btn class="text-none btnAn" width="122px" height="46px" prepend-icon="mdi-add" color="medium-emphasis"
            variant="outlined">
            <b>Add new</b>
          </v-btn>
        </div>
      </div>
      <div class="tableDt">
        <v-table>
          <thead class="contentTt">
            <tr class="titleCt">
              <th class="text-left">
                <div>
                  NAME
                  <img src="../../assets/images/svg/arrows-sort 5.svg" />
                </div>
              </th>
              <th class="text-left">
                <div>
                  MOBILE NUMBER
                  <img src="../../assets/images/svg/arrows-sort 5.svg" />
                </div>
              </th>
              <th class="text-left">
                <div>
                  GENDER
                  <img src="../../assets/images/svg/arrows-sort 5.svg" />
                </div>
              </th>
              <th class="text-left">
                <div>
                  AGE
                  <img src="../../assets/images/svg/arrows-sort 5.svg" />
                </div>
              </th>
              <th class="text-left">
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in desserts" :key="item.name">
              <td>{{ item.name }}</td>
              <td>{{ item.mobileNumber }}</td>
              <td>{{ item.gender }}</td>
              <td>{{ item.age }}</td>
              <td class="d-flex threeBtn">
                <button class="btn1"><img src="../../assets/images/iconify-svg/Group 501.png"></button>
                <div class="btn2"><button><img src="../../assets/images/iconify-svg/material-symbols_block.png"></button>
                </div>
                <div class="btn3"><button><img src="../../assets/images/iconify-svg/trash 1.png"></button></div>
              </td>
            </tr>
          </tbody>
        </v-table>
      </div>
      <div class="footerPn">
        <v-pagination v-model="page" active-color="white" :length="desserts.length" :total-visible="3"
          rounded="0"></v-pagination>
      </div>
    </v-container>
  </div>
</template>

<script>
import Whatsapp from '../../assets/images/iconify-svg/WhatsApp.svg.webp'
export default {
  name: 'Contacts',
  data: () => {
    return {
      page: '1',
      desserts: [
        {
          'name': 'NAME',
          'mobileNumber': 'name',
          'gender': 'name',
          'age': 'name'
        },
        {
          'name': 'NAME',
          'mobileNumber': 'name',
          'gender': 'name',
          'age': 'name'
        },
        {
          'name': 'NAME',
          'mobileNumber': 'name',
          'gender': 'name',
          'age': 'name'
        },
        {
          'name': 'NAME',
          'mobileNumber': 'name',
          'gender': 'name',
          'age': 'name'
        },
        {
          'name': 'NAME',
          'mobileNumber': 'name',
          'gender': 'name',
          'age': 'name'
        },
        {
          'name': 'NAME',
          'mobileNumber': 'name',
          'gender': 'name',
          'age': 'name'
        },
        {
          'name': 'NAME',
          'mobileNumber': 'name',
          'gender': 'name',
          'age': 'name'
        },
        {
          'name': 'NAME',
          'mobileNumber': 'name',
          'gender': 'name',
          'age': 'name'
        },
      ]
    }
  },
  methods: {
    //
  },
};

</script>
<style>
#content {
  margin: 0;
  padding: 0;
  align-content: center;
}

.childContent {
  margin-top: 36px;
  height: 50px;
  align-items: center;
}

.childContent2 {
  justify-content: space-between;
  align-content: center;
  width: 384px;
}

.childContent2 p {
  font-size: 24px;
  width: 145px;
  height: 36px;
}

.childContent2 .search {
  max-height: 40px;
  max-width: 219px;
}

.contentBtn {
  justify-content: space-between;
  padding-left: 282px;
  width: 50%;
}

.btnWS {
  background-color: #10B981;
  border: 1px solid #D1D5DB;
  border-radius: 30px;
}

.btnWS img {
  width: 20px;
  height: 18px;
  margin-right: 10px;
}

.btnWS p {
  padding-top: 14px;
}

.btnWS p b {
  color: white;
  font-size: 13px;
}

.btnEp {
  margin-left: 13px;
  border: 1px solid #D1D5DB;
  border-radius: 30px;
}

.btnAn {
  margin-left: 7px;
  border: 1px solid #D1D5DB;
  border-radius: 30px;
}

.tableDt {
  margin-top: 40px;
  height: 400px;
}

.contentTt {
  background-color: ghostwhite;
}

.titleCt th div {
  display: flex;
  align-items: center;
}

.titleCt img {
  margin-left: 5px;
}

.threeBtn {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.btn1 {
  height: 35px;
  margin-right: 10px;
}

.btn1 img {
  height: 35px;
  width: 35px;
}

.btn2 {
  margin-right: 10px;
  border: 1px #E5E7EB solid;
  height: 35px;
  width: 35px;
  border-radius: 5px;
  padding: 5px;
}

.btn3 {
  border: 1px #E5E7EB solid;
  height: 35px;
  width: 35px;
  border-radius: 5px;
  padding: 5px;
}

.btn2 button,
.btn3 button {
  height: 100%;
  widows: 100%;
}

.btn2 button img,
.btn3 button img {
  height: 23px;
  widows: 23px;
}

.footerPn {
  margin-top: 60px;
}

.v-pagination__item {
  border-right: 1px darkgrey solid;
}

.v-pagination__item:nth-last-child(2) {
  border: none !important;
}

.v-pagination__item,
.v-pagination__first,
.v-pagination__prev,
.v-pagination__next,
.v-pagination__last {
  margin: 0 !important;
  ;
}

#main {
  margin: 0;
  padding: 0;
}

#content {
  color: black;
}

.v-pagination__prev .v-btn .v-btn__content{
  display: none;
/* Left */
}
.v-pagination__next .v-btn .v-btn__content{
  display: none;
/* Right */
}
@media only screen and (max-width: 1230px){
    .childContent{
      display: flex; flex-direction: column; align-items: flex-start;
    }
    .contentBtn{
      padding: 0;
    }
    .tableDt{
      margin-top: 60px;
    }
}
@media only screen and (max-width: 480px){
  .childContent{
      display: flex; flex-direction: column; align-items: flex-start;
    }
  .contentBtn{
    padding: 0; display: flex; flex-direction: column;
  }
  .btnAn, .btnEp{
    margin: 0;
    margin-top: 20px;
  }
  .tableDt{
    margin-top: 200px;
  }
}
</style>