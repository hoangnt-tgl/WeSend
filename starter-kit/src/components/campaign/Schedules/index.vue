<script lang="ts">
import SchedulesCard from '@/components/campaign/Schedules/SchedulesCard.vue'

export default {
  name: 'CampaignSchedules',
  components: {
    SchedulesCard,
  },
  setup() {
    return {
      items: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
      ],
    }
  },
}
</script>

<template>
  <div>
    <div v-if="items.length > 0">
      <div
        v-for="item in items"
        :key="item"
      >
        <SchedulesCard />
      </div>
    </div>
    <div v-else>
      Ko có lịck
    </div>
  </div>
</template>
