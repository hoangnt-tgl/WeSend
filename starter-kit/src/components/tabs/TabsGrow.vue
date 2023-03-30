<!-- eslint-disable vue/component-api-style -->
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
    v-model="currentTab"
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
        padding: '0px 30px',
      }"
      :on-vnode-mounted="removeClass()"
    >
      {{ item.label }}
    </VTab>
  </VTabs>
  <!-- <VDivider /> -->

  <VWindow
    v-model="currentTab"
    class="container"
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
  .container {
    padding: 28px;
    border-radius: 0 10px 10px;
    background: #fff;
    min-block-size: 80vh;
  }
</style>

