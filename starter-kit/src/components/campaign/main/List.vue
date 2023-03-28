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
  <div>
    <ul class="container">
      <li class="flex-container-menu">
        <div class="descriptionmenu">
          <div
            clas="menutitle"
          >
            CAMPAIGN NAME
            <img src="@/assets/images/arrows-sort5.png">
          </div>
        </div>
        <div class="date">
          <div
            clas="menutitle"
          >
            CREATE DATE
            <img src="@/assets/images/arrows-sort5.png">
          </div>
        </div>
        <div class="contact">
          <div
            clas="menutitle"
          >
            CONTRACT
            <img src="@/assets/images/arrows-sort5.png">
          </div>
        </div>
        <div class="status">
          <div
            clas="menutitle"
          >
            STATUS
            <img src="@/assets/images/arrows-sort5.png">
          </div>
        </div>
        <div class="mediatype">
          <div
            clas="menutitle"
          >
            MEDIA TYPE
            <img src="@/assets/images/arrows-sort5.png">
          </div>
        </div>
        <div class="icon" />
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
              class="buttonmini"
              src="@/assets/images/file-icons_microsoft-excel.png"
            >
            <img
              class="buttonmini"
              src="@/assets/images/copy1.png"
            >
            <img
              class="buttonmini"
              src="@/assets/images/trash 1.png"
            >
          </div>
        </div>
      </li>
    </ul>

    <div class="footer">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
    </div>
  </div>
  <CreateDetail
    v-if="isShowModal"
    @cancel="onDetail"
  />
</template>

<style>
.menutitle {
  /* stylelint-disable-next-line font-family-no-missing-generic-family-keyword */
  font-family: Poppins;
  font-size: 14px;
  font-style: medium;
}

.container {
  margin-block-start: 20px;
  margin-inline-end: 15px;
  margin-inline-start: 20px;
}

.flex-container-menu {
  display: flex;
  block-size: 30px;
  inline-size: 1090px;
  margin-block-end: 5px;
}

.flex-container {
  display: flex;
  border-radius: 10px;
  background-color: white;
  block-size: 70px;
  block-size: 64px;
  inline-size: 1090px;
  margin-block-end: 5px;
}

.description {
  margin: 10px;
  block-size: 38px;
  fill: Solid#374151;
  /* stylelint-disable-next-line font-family-no-missing-generic-family-keyword */
  font-family: Lato;
  font-size: 16px;
  font-style: regular;
  inline-size: 350px;
  scroll-snap-type: gray/700;
}

.descriptionmenu {
  margin: auto;
  /* stylelint-disable-next-line font-family-no-missing-generic-family-keyword */
  font-family: Poppins;
  font-size: 14px;
  font-style: medium;
  inline-size: 350px;
}

.date {
  align-items: center;
  margin: auto;
  block-size: 38px;
  /* stylelint-disable-next-line font-family-no-missing-generic-family-keyword */
  font-family: Lato;
  font-size: 16px;
  font-style: regular;
  inline-size: 150px;
}

.contact {
  margin: auto;
  block-size: 38px;
  /* stylelint-disable-next-line font-family-no-missing-generic-family-keyword */
  font-family: Lato;
  font-size: 16px;
  font-style: regular;
  inline-size: 140px;
}

.mediatype {
  margin: auto;
  block-size: 38px;
  /* stylelint-disable-next-line font-family-no-missing-generic-family-keyword */
  font-family: Lato;
  font-size: 16px;
  font-style: regular;
  inline-size: 140px;
}

.status {
  margin: auto;
  block-size: 38px;
  /* stylelint-disable-next-line font-family-no-missing-generic-family-keyword */
  font-family: Lato;
  font-size: 16px;
  font-style: regular;
  inline-size: 120px;
}

.icon {
  display: flex;
  justify-content: center;
  margin: auto;
  block-size: 38px;
  inline-size: 150px;
}

.footer {
  display: flex;
  justify-content: space-between;
  margin: auto;
  block-size: 19px;
  inline-size: 98px;
  margin-block-start: 30px;
}

.buttonmini {
  padding: 5px;
  border: solid 1px #f3f4f6;
  block-size: 36px;
  inline-size: 36px;
  margin-inline: 5px;
}
</style>

