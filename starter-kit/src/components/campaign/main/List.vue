<script lang="ts">
export default {
  name: 'List',
  components: {

  },
  // eslint-disable-next-line vue/component-api-style
  data() {
    return {
      items: [
        { text: 'Cupcake sesame snaps dessert marzipan.', date: '24 Sep 2022', contact: 'Active', status: 'Unschedule', mediatype: 'image' },
        { text: 'Jelly beans jelly-o gummi bears chupa chups marshmallow.', date: '10/10/2023', contact: '22', status: 'Unschedule', mediatype: 'img' },
        { text: 'Bonbon macaroon gummies pie jelly', date: '10/10/2023', contact: '22', status: 'Scheduled(10)', mediatype: 'img', icon: 'tabler-brand-twitter' },
        { text: 'Cupcake sesame snaps dessert marzipan.', date: '10/10/2023', contact: 'Active', status: 'Unschedule', mediatype: 'fasfasdf' },
        { text: 'Cupcake sesame snaps dessert marzipan.', date: '10/10/2023', contact: 'Scheduled(10)', status: 'Unschedule', mediatype: 'fasfasdf' },
        { text: 'Cupcake sesame snaps dessert marzipan.', date: '10/10/2023', contact: 'Active', status: 'Active', mediatype: 'fasfasdf' },
        { text: 'Cupcake sesame snaps dessert marzipan.', date: '10/10/2023', contact: 'Scheduled(10)', status: 'Unschedule', mediatype: 'fasfasdf' },
        { text: 'Cupcake sesame snaps dessert marzipan.', date: '10/10/2023', contact: 'Active', status: 'Active', mediatype: 'fasfasdf' },
        { text: 'Cupcake sesame snaps dessert marzipan.', date: '10/10/2023', contact: 'Active', status: 'Scheduled(10)', mediatype: 'fasfasdf' },
        { text: 'Cupcake sesame snaps dessert marzipan.', date: '10/10/2023', contact: 'Active', status: 'Scheduled(10)', mediatype: 'fasfasdf' },
      ],

    }
  },

  // eslint-disable-next-line vue/component-api-style
  methods: {

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
        :key="item.status"
        class="flex-container"
        :value="item.icon"
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
        <div
          class="status"
        >
          <div
            class=""
            :class="item.status === 'Scheduled(10)' ? 'statusSchedule' : item.status === 'Active' ? 'statusActive' : 'statusNone'"
          >
            {{ item.status }}
          </div>
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
              src="@/assets/images/trash1.png"
            >
          </div>
        </div>
      </li>
    </ul>

    <div class="footer">
      <div class="itemfooter">
        <img src="@/assets/images/Icon.png">
      </div>
      <div class="itemfooter">
        1
      </div>
      <div class="itemfooter">
        2
      </div>
      <div class="itemfooter">
        ...
      </div>
      <div class="itemfooter">
        9
      </div>
      <div class="itemfooter">
        10
      </div>
      <div class="itemfooter">
        <img src="@/assets/images/Icon1.png">
      </div>
    </div>
  </div>
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
  margin-block-end: 5px;
}

.flex-container {
  display: flex;
  border-radius: 10px;
  background-color: white;
  block-size: 70px;
  block-size: 64px;
  margin-block-end: 5px;
}

.description {
  block-size: 38px;
  /* stylelint-disable-next-line font-family-no-missing-generic-family-keyword */
  font-family: Lato;
  font-size: 16px;
  inline-size: 500px;
  margin-inline-start: 10px;
}

.descriptionmenu {
  block-size: 38px;
  /* stylelint-disable-next-line font-family-no-missing-generic-family-keyword */
  font-family: Poppins;
  font-size: 16px;
  inline-size: 500px;
}

.date {
  align-items: center;
  margin: auto;
  block-size: 38px;
  /* stylelint-disable-next-line font-family-no-missing-generic-family-keyword */
  font-family: Lato;
  font-size: 16px;
  font-style: regular;
  inline-size: 250px;
}

.contact {
  margin: auto;
  block-size: 38px;
  /* stylelint-disable-next-line font-family-no-missing-generic-family-keyword */
  font-family: Lato;
  font-size: 16px;
  font-style: regular;
  inline-size: 220px;
}

.mediatype {
  margin: auto;
  block-size: 38px;
  /* stylelint-disable-next-line font-family-no-missing-generic-family-keyword */
  font-family: Lato;
  font-size: 16px;
  font-style: regular;
  inline-size: 200px;
}

.status {
  margin: auto;
  block-size: 38px;
  /* stylelint-disable-next-line font-family-no-missing-generic-family-keyword */
  font-family: Lato;
  font-size: 16px;
  font-style: regular;
  inline-size: 220px;
}

.icon {
  display: flex;
  justify-content: center;
  margin: auto;
  block-size: 38px;
  inline-size: 250px;
}

.footer {
  display: flex;
  justify-content: space-between;
  margin: auto;
  background-color: white;
  block-size: 37px;
  inline-size: 284px;
  margin-block-start: 30px;
}

.buttonmini {
  padding: 5px;
  border: solid 1px #f3f4f6;
  block-size: 36px;
  inline-size: 36px;
  margin-inline: 5px;
}

.itemfooter {
  margin: auto;
}

.statusActive {
  display: flex;
  align-items: center;
  border-radius: 200px;
  background: #ecfdf5;
  block-size: 29px;
  inline-size: 70px;
  padding-block: 2px;
  padding-inline: 10px;
}

.statusSchedule {
  display: flex;
  align-items: center;
  border-radius: 200px;
  background: #e0e7ff;
  block-size: 29px;
  inline-size: 123px;
  padding-block: 2px;
  padding-inline: 18px;
}

.statusNone {
  display: flex;
  align-items: center;
  border-radius: 200px;
  background: #f3f4f6;
  block-size: 29px;
  inline-size: 123px;
  padding-block: 2px;
  padding-inline: 18px;
}
</style>

