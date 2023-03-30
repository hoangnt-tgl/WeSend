<script lang="ts">
import CardHistory from '@/components/histories/CardHistory.vue'
import { lastActions } from '@/data/history'

export default {
  components: {
    CardHistory,
  },
  setup() {
    return {
      lastActions,
    }
  },
}
</script>

<template>
  <VCard class="">
    <div
      v-for="(item, idx) in lastActions"
      :key="idx"
    >
      <div class="mx-6 my-1">
        <CardHistory
          :title="item.title"
          :time="item.time"
          :type="item.type"
        />
      </div>
    </div>
  </VCard>
</template>
