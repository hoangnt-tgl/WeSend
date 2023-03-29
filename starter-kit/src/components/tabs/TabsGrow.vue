<script lang="ts">
export default {
  props: {
    currentTab: {
      type: String,
      required: true,
    },
    items: {
      type: Array,
      required: true,
    },
    tabItemText: {
      type: String,
      required: true,
  },
  setup() {
    return {
      
    }
  },
  methods: {
    removeClass() {
      const tabs = document.getElementsByClassName('v-tab--selected')

      tabs[0]?.classList.remove('v-tab--selected')
    },
  },
}
</script>

<template>
  <VTabs
    :v-model="currentTab"
    grow
  >
    <VTab
      v-for="item in items"
      :key="item"
      :value="item"
    >
      {{ item }}
    </VTab>
  </VTabs>
  <VDivider />

  <VWindow
    :v-model="currentTab"
    class="mt-6"
  >
    <VWindowItem
      v-for="item in items"
      :key="item"
      :value="item"
    >
      {{ tabItemText }}
    </VWindowItem>
  </VWindow>
</template>
