<script lang="ts">
import SearchButton from '@/components/campaign/main/SearchButton.vue'

export default {
  name: 'List',
  components: {
    SearchButton,
  },
  setup() {
    return {

    }
  },
  // eslint-disable-next-line vue/component-api-style
  methods: {

  },
}
</script>

<template>
  <div class="searchbar">
    <div style="display: flex;">
      <h1
        class="title"
        col-6
      >
        Campaign
      </h1>
      <div class="totalList">
        10
      </div>
    </div>

    <button class="btnCreate">
      <h1 style=" margin: auto;color: white; font-size: 20px;">
        Create New Campaign
      </h1>
    </button>
  </div>
  <div class="searchbar">
    <SearchButton />
    <div>
      <div class="fillerField">
        <p>Filler by</p>
        <input
          class="search__date"
          type="date"
          placeholder="Date"
        >
        <input
          class="search__date"
          type="text"
          placeholder="Status"
        >
      </div>
    </div>
  </div>
</template>

<style>
  .title {
    font-size: 30px;
  }

  .btnCreate {
    border-style: solid;
    border-radius: 15px;
    background-color: black;
  }

  .searchbar {
    display: flex;
    justify-content: space-between;
    margin-block-start: 10px;
  }

  .search__date {
    border: 1px solid #575756;
    border-radius: 50px;
  }

  .fillerField {
    display: flex;
    margin: auto;
  }
</style>

