<script lang="ts">
import CreateDetail from '@/components/campaign/detail/createDetailModal.vue'

export default {
  name: 'List',
  components: {
    CreateDetail,
  },
  // eslint-disable-next-line vue/component-api-style
  data() {
    return {
      isShowModal: false,
      items: [
        { text: 'Cupcake sesame snaps dessert marzipan.', date: '24 Sep 2022', contact: 'Active', status: 'Y', mediatype: 'image' },
        { text: 'Jelly beans jelly-o gummi bears chupa chups marshmallow.', date: '10/10/2023', contact: '22', status: 'Y', mediatype: 'img' },
        { text: 'Bonbon macaroon gummies pie jelly', date: '10/10/2023', contact: '22', status: 'Y', mediatype: 'img', icon: 'tabler-brand-twitter' },
        { text: 'Cupcake sesame snaps dessert marzipan.', date: '10/10/2023', contact: 'Active', status: 'Y', mediatype: 'fasfasdf' },
        { text: 'Cupcake sesame snaps dessert marzipan.', date: '10/10/2023', contact: 'Active', status: 'Y', mediatype: 'fasfasdf' },
        { text: 'Cupcake sesame snaps dessert marzipan.', date: '10/10/2023', contact: 'Active', status: 'Y', mediatype: 'fasfasdf' },
        { text: 'Cupcake sesame snaps dessert marzipan.', date: '10/10/2023', contact: 'Active', status: 'Y', mediatype: 'fasfasdf' },
        { text: 'Cupcake sesame snaps dessert marzipan.', date: '10/10/2023', contact: 'Active', status: 'Y', mediatype: 'fasfasdf' },
        { text: 'Cupcake sesame snaps dessert marzipan.', date: '10/10/2023', contact: 'Active', status: 'Y', mediatype: 'fasfasdf' },
        { text: 'Cupcake sesame snaps dessert marzipan.', date: '10/10/2023', contact: 'Active', status: 'Y', mediatype: 'fasfasdf' },
      ],

    }
  },

  // eslint-disable-next-line vue/component-api-style
  methods: {

    onDetail() {
      this.isShowModal = !this.isShowModal
      console.log('trigger!!!!!')
    },
  },

}
</script>

<template>
  <div style="background: #f3f4fb;">
    <ul class="container">
      <li class="flex-container-menu">
        <div class="descriptionmenu">
          <div style="font-size: 18px;">
            Campaign Name
            <img src="@/assets/images/bxs_down-arrow.png">
          </div>
        </div>
        <div class="date">
          <div style="font-size: 18px;">
            Date
            <img src="@/assets/images/bxs_down-arrow.png">
          </div>
        </div>
        <div class="contact">
          <div style="font-size: 18px;">
            Contract
            <img src="@/assets/images/bxs_down-arrow.png">
          </div>
        </div>
        <div class="status">
          Status
          <img src="@/assets/images/bxs_down-arrow.png">
        </div>
        <div class="mediatype">
          Media Type
          <img src="@/assets/images/bxs_down-arrow.png">
        </div>
      </li>
    </ul>
    <ul class="container">
      <li
        v-for="item in items"
        :key="item.text"
        class="flex-container"
        :value="item.icon"
        @click="onDetail"
      >
        <div class="description">
          {{ item.text }}
        </div>
        <div class="date">
          {{ item.date }}
        </div>
        <div class="contact">
          {{ item.contact }}
        </div>
        <div class="status">
          {{ item.status }}
        </div>
        <div class="mediatype">
          {{ item.mediatype }}
        </div>
        <div class="icon">
          <div style="height: 38px ;">
            <img
              style=" width: 20px;height: 20px;"
              src="@/assets/images/file-icons_microsoft-excel.png"
            >

            <img
              style=" width: 20px;height: 20px;"
              src="@/assets/images/copy 1.png"
            >

            <img
              style=" width: 20px;height: 20px;"
              src="@/assets/images/trash 1.png"
            >
          </div>
        </div>
      </li>
    </ul>

    <div class="footer">
      1   2   3   4   5
    </div>
  </div>
  <CreateDetail
    v-if="isShowModal"
    @cancel="onDetail"
  />
</template>

<style>
.container {
  margin-block-start: 20px;
  margin-inline-end: 15px;
  margin-inline-start: 20px;
}

.flex-container-menu {
  display: flex;
  block-size: 30px;
  inset-block: 26.85% 67.36%;
  inset-inline: 21.25% 3.06%;
  margin-block-end: 5px;
}

.flex-container {
  display: flex;
  border-radius: 10px;
  background: #fff;
  block-size: 70px;
  inset-block: 26.85% 67.36%;
  inset-inline: 21.25% 3.06%;
  margin-block-end: 5px;
}

.description {
  margin: 10px;
  inline-size: 350px;
}

.descriptionmenu {
  margin: auto;
  inline-size: 350px;
}

.date {
  align-items: center;
  margin: auto;
  inline-size: 150px;
}

.contact {
  margin: auto;
  inline-size: 140px;
}

.mediatype {
  margin: auto;
  inline-size: 140px;
}

.status {
  margin: auto;
  inline-size: 120px;
}

.icon {
  display: flex;
  justify-content: center;
  margin: auto;
  inline-size: 130px;
}

.footer {
  margin-block-start: 20px;
  text-align: center;
}
</style>

