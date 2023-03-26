<script lang="ts">
import CreateDetail from '@/components/campaign/detail/createDetailModal.vue'

export default {
  name: 'List',
  components: {
    CreateDetail,
  },
  setup() {
    return {
      items: [
        { text: 'Cupcake sesame snaps dessert marzipan.', date: '10/10/2023', contact: 'Active', status: 'Y', mediatype: 'fasfasdf' },
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
      isShowModal: false,
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
        <VIcon>
          material-symbols:delete-outline
        </VIcon>
        <VIcon>
          iconoir:multiple-pages
        </VIcon>
        <VIcon>
          iconoir:multiple-pages-delete
        </VIcon>
      </div>
    </li>
  </ul>
  <CreateDetail
    v-if="isShowModal"
    @cancel="onDetail"
  />
  <div class="footer">
    1   2   3   4   5
  </div>
</template>

<style>
.container {
  margin-block-start: 20px;
  margin-inline-end: 15px;
  margin-inline-start: 20px;
}

.flex-container {
  display: flex;
  border-style: solid;
  border-radius: 15px;
  block-size: 70px;
}

.description {
  margin: 10px;
  inline-size: 500px;
}

.date {
  padding: 20px;
  margin: 10px;
}

.contact {
  padding: 20px;
  margin: 10px;
  inline-size: 60px;
}

.mediatype {
  padding: 20px;
  margin: 10px;
  inline-size: 100px;
}

.status {
  padding: 20px;
  margin: 10px;
  inline-size: 120px;
}

.icon {
  padding: 20px;
  margin: 10px;
  inline-size: 120px;
}

.footer {
  margin-block-start: 20px;
  text-align: center;
}
</style>

