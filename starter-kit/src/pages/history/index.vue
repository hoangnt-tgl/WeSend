<script lang="ts">
import TabsGrow from '@/components/tabs/TabsGrow.vue'
import LastActions from '@/components/histories/LastActions.vue'
import PastCampaigns from '@/components/histories/PastCampaigns.vue'
import Updates from '@/components/histories/Updates.vue'

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
    <TabsGrow
      :items="items"
    />
  </div>
</template>
