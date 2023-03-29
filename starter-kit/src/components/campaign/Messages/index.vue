<script lang="ts">
import Message from '@/components/createCampain/step3/step3.vue'

export default {
  name: 'CampaignMessage',
  components: {
    Message,
  },
  props: {
    action: {
      type: Function,
      required: true,
    },
  },
}
</script>

<template>
  <Message :action="action" />
</template>
