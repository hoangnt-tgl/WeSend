<script>
// import Whatsapp from '../../assets/images/iconify-svg/WhatsApp.svg.webp'

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
      style=" align-content: center; padding: 0;margin: 0;"
    >
      <div
        class="d-flex"
        style=" height: 50px; align-items: center;margin-top: 36px ;"
      >
        <div
          class="d-flex"
          style=" width: 384px; align-content: center;justify-content: space-between;"
        >
          <p style=" width: 145px; height: 36px;font-size: 24px;">
            <b>Contact List</b>
          </p>
          <VTextField
            prepend-inner-icon="mdi-magnify"
            label="Search"
            style=" max-width: 219px;max-height: 40px;"
          />
        </div>
        <div
          class="d-flex"
          style=" width: 50%;justify-content: space-between; padding-left: 282px;"
        >
          <VBtn
            class="text-none"
            width="171px"
            height="46px"
            color="medium-emphasis"
            variant="outlined"
            style=" border: 1px solid #d1d5db; border-radius: 30px;background-color: #10b981;"
          >
            <img
              src="../../assets/images/iconify-svg/WhatsApp.svg.webp"
              style="width: 20px; height: 18px; margin-right: 10px;"
            >
            <p style="padding-top: 14px;">
              <b
                style="color: white;
            font-size: 13px;
"
              >Whatsapp Sync</b>
            </p>
          </VBtn>
          <VBtn
            class="text-none"
            prepend-icon="mdi-file-export"
            color="medium-emphasis"
            height="46px"
            width="111px"
            variant="outlined"
            style=" border: 1px solid #d1d5db; border-radius: 30px;margin-left: 13px;"
          >
            <b>Export</b>
          </VBtn>
          <VBtn
            class="text-none"
            width="122px"
            height="46px"
            prepend-icon="mdi-add"
            color="medium-emphasis"
            variant="outlined"
            style=" border: 1px solid #d1d5db; border-radius: 30px;margin-left: 7px;"
          >
            <b>Add new</b>
          </VBtn>
        </div>
      </div>
      <div style=" height: 400px;margin-top: 40px;">
        <VTable>
          <thead style="background-color: ghostwhite;">
            <tr>
              <th class="text-left">
                NAME
                <VIcon icon="mdi-arrow-up" />
                <VIcon icon="mdi-arrow-down" />
              </th>
              <th class="text-left">
                MOBILE NUMBER
                <VIcon
                  end
                  icon="mdi-arrow-up"
                />
                <VIcon
                  end
                  icon="mdi-arrow-down"
                />
              </th>
              <th class="text-left">
                GENDER
                <VIcon
                  end
                  icon="mdi-arrow-up"
                />
                <VIcon
                  end
                  icon="mdi-arrow-down"
                />
              </th>
              <th class="text-left">
                AGE
                <VIcon
                  end
                  icon="mdi-arrow-up"
                />
                <VIcon
                  end
                  icon="mdi-arrow-down"
                />
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
              <td
                class="d-flex"
                style="display: flex; width: 100%; justify-content: center;"
              >
                <button style="height: 35px;">
                  <img
                    src="../../assets/images/iconify-svg/Group 501.png"
                    style=" width: 35px;height: 35px;"
                  >
                </button>
                <button style="height: 35px;">
                  <img
                    src="../../assets/images/iconify-svg/Group 34 (2).png"
                    style=" width: 35px;height: 35px;"
                  ><img
                    src="../../assets/images/iconify-svg/material-symbols_block.png"
                    style=" position: sticky; width: 23px;height: 23px;"
                  >
                </button>
                <button style="height: 35px;">
                  <img
                    src="../../assets/images/iconify-svg/Group 34 (2).png"
                    style=" width: 35px;height: 35px;"
                  ><img
                    src="../../assets/images/iconify-svg/trash 1.png"
                    style=" position: sticky; width: 23px;height: 23px;"
                  >
                </button>
              </td>
            </tr>
          </tbody>
        </VTable>
      </div>
      <div style="margin-top: 60px;">
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
#main {
  padding: 0;
  margin: 0;
}

#content {
  color: black;
}
</style>
