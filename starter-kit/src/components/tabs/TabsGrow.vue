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
    >
      <VIcon
        start
        :icon="item.icon"
      />
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
