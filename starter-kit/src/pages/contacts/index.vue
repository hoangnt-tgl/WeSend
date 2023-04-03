<script>
import Whatsapp from '../../assets/images/iconify-svg/WhatsApp.svg.webp'

export default {
  name: 'Contacts',
  data: () => {
    return {
      page: '1',
      desserts: [
        {
          name: 'NAME',
          mobileNumber: 'name',
          gender: 'name',
          age: 'name',
        },
        {
          name: 'NAME',
          mobileNumber: 'name',
          gender: 'name',
          age: 'name',
        },
        {
          name: 'NAME',
          mobileNumber: 'name',
          gender: 'name',
          age: 'name',
        },
        {
          name: 'NAME',
          mobileNumber: 'name',
          gender: 'name',
          age: 'name',
        },
        {
          name: 'NAME',
          mobileNumber: 'name',
          gender: 'name',
          age: 'name',
        },
        {
          name: 'NAME',
          mobileNumber: 'name',
          gender: 'name',
          age: 'name',
        },
        {
          name: 'NAME',
          mobileNumber: 'name',
          gender: 'name',
          age: 'name',
        },
        {
          name: 'NAME',
          mobileNumber: 'name',
          gender: 'name',
          age: 'name',
        },
      ],
    }
  },
  methods: {
    //
  },
}
</script>

<template>
  <div id="main">
    <VContainer
      id="content"
      flex
    >
      <div class="d-flex childContent">
        <div class="d-flex childContent2">
          <p><b>Contact List</b></p>
          <VTextField
            class="search"
            prepend-inner-icon="mdi-magnify"
            label="Search"
          />
        </div>
        <div class="d-flex contentBtn">
          <VBtn
            class="text-none btnWS"
            width="171px"
            height="46px"
            color="medium-emphasis"
            variant="outlined"
          >
            <img src="../../assets/images/iconify-svg/WhatsApp.svg.webp">
            <p><b>Whatsapp Sync</b></p>
          </VBtn>
          <VBtn
            class="text-none btnEp"
            prepend-icon="mdi-file-export"
            color="medium-emphasis"
            height="46px"
            width="111px"
            variant="outlined"
          >
            <b>Export</b>
          </VBtn>
          <VBtn
            class="text-none btnAn"
            width="122px"
            height="46px"
            prepend-icon="mdi-add"
            color="medium-emphasis"
            variant="outlined"
          >
            <b>Add new</b>
          </VBtn>
        </div>
      </div>
      <div class="tableDt">
        <VTable>
          <thead class="contentTt">
            <tr class="titleCt">
              <th class="text-left">
                <div>
                  NAME
                  <img src="../../assets/icons/arrows.svg">
                </div>
              </th>
              <th class="text-left">
                <div>
                  MOBILE NUMBER
                  <img src="../../assets/icons/arrows.svg">
                </div>
              </th>
              <th class="text-left">
                <div>
                  GENDER
                  <img src="../../assets/icons/arrows.svg">
                </div>
              </th>
              <th class="text-left">
                <div>
                  AGE
                  <img src="../../assets/icons/arrows.svg">
                </div>
              </th>
              <th class="text-left" />
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="item in desserts"
              :key="item.name"
            >
              <td>{{ item.name }}</td>
              <td>{{ item.mobileNumber }}</td>
              <td>{{ item.gender }}</td>
              <td>{{ item.age }}</td>
              <td class="d-flex threeBtn">
                <button class="btn1">
                  <img src="../../assets/images/iconify-svg/Group 501.png">
                </button>
                <div class="btn2">
                  <button>
                    <img
                      src="../../assets/images/iconify-svg/material-symbols_block.png"
                    >
                  </button>
                </div>
                <div class="btn3">
                  <button>
                    <img src="../../assets/images/iconify-svg/trash 1.png">
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </VTable>
      </div>
      <div class="footerPn">
        <VPagination
          v-model="page"
          active-color="white"
          :length="desserts.length"
          :total-visible="3"
          rounded="0"
        />
      </div>
    </VContainer>
  </div>
</template>

<style>
#content {
  align-content: center;
  padding: 0;
  margin: 0;
}

.childContent {
  align-items: center;
  block-size: 50px;
  margin-block-start: 36px;
}

.childContent2 {
  align-content: center;
  justify-content: space-between;
  inline-size: 384px;
}

.childContent2 p {
  block-size: 36px;
  font-size: 24px;
  inline-size: 145px;
}

.childContent2 .search {
  max-block-size: 40px;
  max-inline-size: 219px;
}

.contentBtn {
  justify-content: space-between;
  inline-size: 50%;
  padding-inline-start: 282px;
}

.btnWS {
  border: 1px solid #d1d5db;
  border-radius: 30px;
  background-color: #10b981;
}

.btnWS img {
  block-size: 18px;
  inline-size: 20px;
  margin-inline-end: 10px;
}

.btnWS p {
  padding-block-start: 14px;
}

.btnWS p b {
  color: white;
  font-size: 13px;
}

.btnEp {
  border: 1px solid #d1d5db;
  border-radius: 30px;
  margin-inline-start: 13px;
}

.btnAn {
  border: 1px solid #d1d5db;
  border-radius: 30px;
  margin-inline-start: 7px;
}

.tableDt {
  block-size: 400px;
  margin-block-start: 40px;
}

.contentTt {
  background-color: ghostwhite;
}

.titleCt th div {
  display: flex;
  align-items: center;
}

.titleCt img {
  margin-inline-start: 5px;
}

.threeBtn {
  display: flex;
  align-items: center;
  justify-content: center;
  inline-size: 100%;
}

.btn1 {
  block-size: 35px;
  margin-inline-end: 10px;
}

.btn1 img {
  block-size: 35px;
  inline-size: 35px;
}

.btn2 {
  padding: 5px;
  border: 1px #e5e7eb solid;
  border-radius: 5px;
  block-size: 35px;
  inline-size: 35px;
  margin-inline-end: 10px;
}

.btn3 {
  padding: 5px;
  border: 1px #e5e7eb solid;
  border-radius: 5px;
  block-size: 35px;
  inline-size: 35px;
}

.btn2 button,
.btn3 button {
  block-size: 100%;
  widows: 100%;
}

.btn2 button img,
.btn3 button img {
  block-size: 23px;
  widows: 23px;
}

.footerPn {
  margin-block-start: 60px;
}

.v-pagination__item {
  border-inline-end: 1px darkgrey solid;
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
}

#main {
  padding: 0;
  margin: 0;
}

#content {
  color: black;
}

.v-pagination__prev .v-btn .v-btn__content {
  display: none;

  /* Left */
}

.v-pagination__next .v-btn .v-btn__content {
  display: none;

  /* Right */
}

@media only screen and (max-width: 1230px) {
  .childContent {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .contentBtn {
    padding: 0;
  }

  .tableDt {
    margin-block-start: 60px;
  }
}

@media only screen and (max-width: 480px) {
  .childContent {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .contentBtn {
    display: flex;
    flex-direction: column;
    padding: 0;
  }

  .btnAn,
  .btnEp {
    margin: 0;
    margin-block-start: 20px;
  }

  .tableDt {
    margin-block-start: 200px;
  }
}
</style>
