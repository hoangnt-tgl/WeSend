<script lang="ts">
import TabsGrow from '../../components/tabs/TabsGrow.vue'

export default {
  name: 'History',
  components: {
    TabsGrow,
  },
  setup() {
    return {
      currentTab: 'Tab 1',
      items: ['Tab 1', 'Tab 2', 'Tab 3'],
      tabItemText: 'Tab item text',
    }
  },
}
</script>

<template>
  <div>
    <TabsGrow
      :current-tab="currentTab"
      :items="items"
      :tab-item-text="tabItemText"
    />
  </div>
</template>
