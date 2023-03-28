<script lang="ts">
import SearchButton from '@/components/campaign/main/SearchButton.vue';

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
    <div class="campaign">
      <h1
        class="title"
      >
        Campaign
      </h1>
      <div class="totalList">
        10
      </div>
    </div>

    <button class="btnCreate">
      <h1
        class="text"
      >
        Create New Campaign
      </h1>
      <img
        style="width: 20px;height: 20px;"
        src="@/assets/images/Vector.png"
      >
    </button>
  </div>
  <div class="searchbar">
    <SearchButton />
    <div>
      <div class="filterField">
        <p style="margin-block: 0.5rem;">
          Filter by
        </p>
        <input
          class="search__date"
          placeholder="Date"
        >
        <input
          class="search__date2"
          type="text"
          placeholder="Status"
        >
      </div>
    </div>
  </div>
</template>

<style>
.campaign {
  display: flex;
  align-items: center;
}

.totalList {
  display: flex;
  align-items: center;
  border-radius: 200px;
  background: #e0e7ff;
  block-size: 30px;
  margin-inline-start: 10px;
  padding-block: 2px;
  padding-inline: 10px;
}

.title {
  font-size: 24px;
}

.btnCreate {
  display: flex;
  align-items: center;
  justify-content: center;
  border-style: solid;
  border-radius: 30px;
  background-color: black;
  block-size: 44px;
  gap: 10px;
  inline-size: 245px;

  /* padding-block: 10px;
  padding-inline: 40px; */
}

.searchbar {
  display: flex;
  justify-content: space-between;
  block-size: 40px;
  margin-block-end: 35px;
  margin-block-start: 10px;
  margin-inline-start: 30px;
}

.search__date {
  border: 1px solid #d6d4e4;
  border-radius: 10px;
  background: url(@/assets/images/fluent-mdl2_date-time.png) no-repeat scroll 108px 7px;
  inline-size: 146px;
  margin-inline: 10px;
  padding-inline-end: 30px;
  padding-inline-start: 10px;
}

.search__date2 {
  border: 1px solid #d6d4e4;
  border-radius: 10px;
  background: url(@/assets/images/akar-icons_chevron-down.png) no-repeat scroll 182px 7px;
  inline-size: 219px;
  padding-inline-end: 30px;
  padding-inline-start: 10px;
}

.filterField {
  display: flex;
  margin: auto;
}

.text {
  color: white;
  /* stylelint-disable-next-line font-family-no-missing-generic-family-keyword */
  font-family: Lato;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  inline-size: 158px;
  line-height: 19px;
}

.page-content-container {
  background-color: #f5f5f5;
}
</style>

