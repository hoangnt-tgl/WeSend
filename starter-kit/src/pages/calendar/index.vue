<script>
import { defineComponent } from 'vue'
import Meeting1 from '@/components/modal/Meeting1.vue'
import Meeting2 from '@/components/modal/Meeting2.vue'
import Meeting3 from '@/components/modal/Meeting3.vue'

export default defineComponent({
  name: 'Calendar',
  components: {
    Meeting1,
    Meeting2,
    Meeting3,
  },
  setup() {
    return {
      openMeeting1: ref(true),
      openMeeting2: ref(false),
      openMeeting3: ref(false),
    }
  },
})
</script>

<template>
  <div>
    <Meeting1 v-if="openMeeting1" />
    <Meeting2 v-if="openMeeting1" />
    <Meeting3 v-if="openMeeting1" />
    Hello World
  </div>
</template>
