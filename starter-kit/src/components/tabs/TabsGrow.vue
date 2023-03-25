<script lang="ts">
import type { Component } from 'vue'

const currentTab = ref(0)
export default {
  props: {
    items: {
      type: Array<{
        label: string
        body: Component
        icon?: string
      }>,
      required: true,
    },
  },
  setup() {
    return {
      currentTab,
    }
  },
}
</script>

<template>
  <VTabs
    v-model="currentTab"
    grow
  >
    <VTab
      v-for="(item, idx) in items"
      :key="item.label"
      :value="idx"
      :prepend-icon="item.icon"
      :style="{
        backgroundColor: currentTab === idx ? '#FFFFFF' : '',
        borderRadius: '10px 10px 0 0 !important',
        border: '0px',
        color: currentTab === idx ? '#000 !important' : '',
        fontWeight: currentTab === idx ? 'bold' : '',
        textTransform: 'capitalize',
      }"
    >
      {{ item.label }}
    </VTab>
  </VTabs>
  <!-- <VDivider /> -->

  <VWindow
    v-model="currentTab"
  >
    <div
      v-for="item in items"
      :key="item.label"
      :value="item.label"
    >
      <VWindowItem>
        <Component :is="item.body" />
      </VWindowItem>
    </div>
  </VWindow>
</template>

<style scoped>
.v-slide-group {
  inline-size: 40%;
}
</style>
