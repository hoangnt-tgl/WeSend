<script lang="ts">
import LastActionCard from '@/components/histories/LastActionCard.vue'
import { lastAction } from '@/data/history'

export default {
  components: {
    LastActionCard,
  },
  setup() {
    return {
      lastAction,
    }
  },
}
</script>

<template>
  <VCard>
    <div
      v-for="(item, idx) in lastAction"
      :key="idx"
    >
      <div class="mx-4 my-2">
        <LastActionCard :item="item" />
      </div>
    </div>
  </VCard>
</template>
