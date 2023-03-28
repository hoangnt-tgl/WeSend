<script lang="ts">
export default {
  name: 'List',
  components: {

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
      <img
        style="width: 24px;height: 24px;"
        src="@/assets/images/Vector1.png"
      >
      <h1
        class="text"
      >
        Create New Campaign
      </h1>
    </button>
  </div>
  <div class="searchbar">
    <input
      class="search__input"
      placeholder="Search"
    >
    <div>
      <div class="filterField">
        <p style="margin-block: 0.5rem;">
          Filter by
        </p>
        <input
          class="search__date"
          placeholder="Date from"
        >
        <input
          class="search__date"
          placeholder="Date to"
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
  block-size: 46px;
  gap: 10px;
  inline-size: 213px;

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
  background: url(@/assets/images/calendar-plus1.png) no-repeat scroll 110px 10px;
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

.search__input {
  position: relative;
  border: 1px solid #d6d4e4;
  border-radius: 10px;
  background: url(@/assets/images/Vector.png) no-repeat scroll 12px 10px;
  background-color: white;
  block-size: 40px;
  inline-size: 219px;
  padding-inline-start: 30px;
}
</style>

