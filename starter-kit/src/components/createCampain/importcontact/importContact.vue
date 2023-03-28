<script lang="ts">
const items = ['Foo', 'Bar', 'Fizz', 'Buzz']
export default {
  name: 'ImportContact',
  setup() {
    return {
      items,
    }
  },
}
</script>

<template>
  <div>
    <h2>Import Contacts</h2>
    <div class="import-container">
      <div class="import-grid">
        <div class="col col-1">
          <VSelect
            :items="items"
            label="Standard"
          />
        </div>
        <div class="col col-2">
          <VSelect
            :items="items"
            label="Standard"
          />
        </div>
        <div class="col col-3">
          <VSelect
            :items="items"
            label="Standard"
          />
        </div>
        <div class="col col-4">
          <VSelect
            :items="items"
            label="Standard"
          />
        </div>
        <div class="col col-5">
          <VSelect
            :items="items"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .import-container {
    background-color: #fff;
    block-size: 100%;
    max-inline-size: 1234px;
  }

  .import-grid {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    inline-size: 1234px;
  }

  .col {
    flex: 1;
  }
</style>
