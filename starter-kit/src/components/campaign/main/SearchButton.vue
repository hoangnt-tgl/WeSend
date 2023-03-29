<script lang="ts">
export default {
  name: 'SearchButton',
  components: {

  },
  setup() {
    return {
    }
  },

}
</script>

<template>
  <input
    class="search__input"
    placeholder="Search"
  >
</template>

<style>
.search__input {
  border: 1px solid #d6d4e4;
  border-radius: 10px;
  background: url(@/assets/images/Vector.png) no-repeat scroll 5px 10px;
  background-color: white;
  block-size: 40px;
  inline-size: 219px;
}
</style>
