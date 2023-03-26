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
  <div class="search__container">
    <input
      class="search__input"
      type="text"
      placeholder="Search"
    >
  </div>
</template>

<style>
@use postcss-color-function;
@use postcss-nested;
@import "https://fonts.googleapis.com/css?family=Raleway:400,700,900";

/* Base styling */

.search__container {
  padding-inline-start: 50px;
}

.search__input {
  border: 1px solid #575756;
  border-radius: 50px;
  backface-visibility: hidden;
  background-color: transparent;
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E");
  background-position: 95% center;
  background-repeat: no-repeat;
  background-size: 18px 18px;
  color: #575756;
  font-size: 14px;
  inline-size: 100%;
  line-height: 18px;
  padding-block: 12px;
  padding-inline: 24px;
  transform-style: preserve-3d;
  transition: transform 250ms ease-in-out;
  transition: all 250ms ease-in-out;
}
</style>
