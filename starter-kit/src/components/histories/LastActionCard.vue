<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  setup() {
    return {
    }
  },
})
</script>

<template>
  <VAlert
    border="start"
    border-color="primary"
  >
    Cake sweet roll sesame snaps cheesecake halvah apple pie gingerbread cake.
  </VAlert>
</template>
