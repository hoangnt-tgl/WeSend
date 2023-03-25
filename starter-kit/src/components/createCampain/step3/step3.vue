<script lang="ts">
import BtnRound from '@/components/buttons/roundedButton/index.vue'

export default {
  name: 'Step2',
  components: {
    BtnRound,
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
  <div>
    <BtnRound
      button-title="continue"
      :action="action"
      color="{{ 'primary' }}}"
      :style="{}"
      variant="contained"
    />
  </div>
</template>
