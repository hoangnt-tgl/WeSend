<script lang="ts">
export default {
  name: 'List',
  components: {

  },
  setup() {
    return {
      items: [
        { day: '10', time: '5h 30', month: 'September', contact: '1000', start: '10', end: '100', timeComplete: '30' },
        { day: '10', time: '5h 30', month: 'September', contact: '1000', start: '10', end: '100', timeComplete: '30' },
        { day: '10', time: '5h 30', month: 'September', contact: '1000', start: '10', end: '100', timeComplete: '30' },
        { day: '10', time: '5h 30', month: 'September', contact: '1000', start: '10', end: '100', timeComplete: '30' },
        { day: '10', time: '5h 30', month: 'September', contact: '1000', start: '10', end: '100', timeComplete: '30' },
        { day: '10', time: '5h 30', month: 'September', contact: '1000', start: '10', end: '100', timeComplete: '30' },
      ],
    }
  },
  // eslint-disable-next-line vue/component-api-style
  methods: {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onDetail() {

    },
  },
}
</script>

<template>
  <div
    v-for="item in items"
    :key="item.day"
    class="flex-container"
    :value="item.day"
  />
</template>

<style>
.flex-container {
  display: flex;
  border-style: solid;
  border-radius: 15px;
  block-size: 70px;
}

.description {
  margin: 10px;
  inline-size: 400px;
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
</style>

