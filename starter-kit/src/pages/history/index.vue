<script lang="ts">
import LastActions from '@/components/histories/LastActions.vue'
import PastCampaigns from '@/components/histories/PastCampaigns.vue'
import Updates from '@/components/histories/Updates.vue'
import TabsGrow from '@/components/tabs/TabsGrow.vue'

export default {
  name: 'History',
  components: {
    TabsGrow,
  },
  setup() {
    return {
      items: [
        { label: 'Last Actions', icon: 'tabler-history', body: LastActions },
        { label: 'Past Campaigns', icon: 'tabler-message-forward', body: PastCampaigns },
        { label: 'Updates', icon: 'tabler-bell', body: Updates },
      ],
    }
  },
}
</script>

<template>
  <div>
    <div class="detail-title">
      <h2>History</h2>
      <div class="detail-title-button">
        FILTER BY
        <button>
          <VIcon icon="tabler-player-play-filled" /><span>Run Campaign Now</span>
        </button>
        <button class="delete">
          <VIcon icon="tabler-copy" /><span>Duplicate</span>
        </button>
        <button class="delete">
          <VIcon icon="tabler-trash" /><span>Delete</span>
        </button>
      </div>
    </div>
    <TabsGrow
      :items="items"
    />
  </div>
</template>

<style scoped>
.detail-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-block-end: 40px;
}

.detail-title h2 {
  color: var(--text-dark);
  font-size: 36px;
}
</style>
