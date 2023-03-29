<template>
  <div id="main">
    <v-container id="content" flex style="margin: 0; padding: 0; align-content: center;">
      <div class="d-flex" style="margin-top: 36px ; height: 50px; align-items: center;">
        <div class="d-flex" style="justify-content:space-between; align-content: center; width: 384px">
          <p style="font-size: 24px; width: 145px; height: 36px;"><b>Contact List</b></p>
          <v-text-field prepend-inner-icon="mdi-magnify" label="Search"
            style="max-height: 40px; max-width: 219px;"></v-text-field>
        </div>
        <div class="d-flex" style="justify-content: space-between; padding-left: 282px; width: 50%">
          <v-btn class="text-none" width="171px" height="46px" color="medium-emphasis" variant="outlined"
            style="background-color: #10B981; border: 1px solid #D1D5DB; border-radius: 30px;">
            <img src="../../assets/images/iconify-svg/WhatsApp.svg.webp"
              style="width: 20px; height: 18px; margin-right: 10px;">
            <p style="padding-top: 14px;"><b style="color: white; 
            font-size: 13px;
           ">Whatsapp Sync</b></p>
          </v-btn>
          <v-btn class="text-none" prepend-icon="mdi-file-export" color="medium-emphasis" height="46px" width="111px"
            variant="outlined" style="margin-left: 13px; border: 1px solid #D1D5DB; border-radius: 30px;">
            <b>Export</b>
          </v-btn>
          <v-btn class="text-none" width="122px" height="46px" prepend-icon="mdi-add" color="medium-emphasis"
            variant="outlined" style="margin-left: 7px; border: 1px solid #D1D5DB; border-radius: 30px;">
            <b>Add new</b>
          </v-btn>
        </div>
      </div>
      <div style="margin-top: 40px; height: 400px;">
        <v-table>
          <thead style="background-color: ghostwhite;">
            <tr>
              <th class="text-left">
                NAME 
                <v-icon icon="mdi-arrow-up"></v-icon>
                <v-icon icon="mdi-arrow-down"></v-icon>
              </th>
              <th class="text-left">
                MOBILE NUMBER
                <v-icon end icon="mdi-arrow-up"></v-icon>
                <v-icon end icon="mdi-arrow-down"></v-icon>
              </th>
              <th class="text-left">
                GENDER
                <v-icon end icon="mdi-arrow-up"></v-icon>
                <v-icon end icon="mdi-arrow-down"></v-icon>
              </th>
              <th class="text-left">
                AGE
                <v-icon end icon="mdi-arrow-up"></v-icon>
                <v-icon end icon="mdi-arrow-down"></v-icon>
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
              <td class="d-flex" style="display: flex; justify-content: center; width: 100%;">
                <button style="height: 35px;"><img src="../../assets/images/iconify-svg/Group 501.png" style="height: 35px; width: 35px;"></button>
                <button style="height: 35px;"><img src="../../assets/images/iconify-svg/Group 34 (2).png" style="height: 35px; width: 35px;"><img src="../../assets/images/iconify-svg/material-symbols_block.png" style="height: 23px; width: 23px; position:sticky;"></button>
                <button style="height: 35px;"><img src="../../assets/images/iconify-svg/Group 34 (2).png" style="height: 35px; width: 35px;"><img src="../../assets/images/iconify-svg/trash 1.png" style="height: 23px; width: 23px; position:sticky;"></button>
              </td>
            </tr>
          </tbody>
        </v-table>
      </div>
      <div style="margin-top: 60px;">
        <v-pagination v-model="page" active-color="white" :length="desserts.length" :total-visible="3" rounded="0"></v-pagination>
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
<style scoped>
#main {
  margin: 0;
  padding: 0;
}

#content {
  color: black;
}
</style>