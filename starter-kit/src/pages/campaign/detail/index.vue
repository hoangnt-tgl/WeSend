<script lang="ts">
import { defineComponent } from 'vue'
import CampaignContacts from '@/components/campaign/Contacts/index.vue'
import CampaignMessage from '@/components/campaign/Messages/index.vue'
import CampaignSchedules from '@/components/campaign/Schedules/index.vue'
import TabsGrow from '@/components/tabs/TabsGrow.vue'

export default defineComponent({
  name: 'CampaignDetail',
  components: {
    TabsGrow,
  },
  setup() {
    return {
      items: [
        {
          label: 'Schedules',
          icon: 'tabler-calendar-event',
          body: CampaignSchedules,
        },
        {
          label: 'Contacts',
          icon: 'tabler-phone',
          body: CampaignContacts,
        },
        {
          label: 'Messages',
          icon: 'mdi-message-text',
          body: CampaignMessage,
        },
      ],
    }
  },
})
</script>

<template>
  <div>
    <TabsGrow :items="items" />
  </div>
</template>
