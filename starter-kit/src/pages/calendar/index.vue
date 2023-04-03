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
      openMeeting1: ref(false),
      openMeeting2: ref(true),
      openMeeting3: ref(false),
    }
  },
})
</script>

<template>
  <div>
    <Meeting1 v-if="openMeeting1" />
    <Meeting2 v-if="openMeeting2" />
    <Meeting3 v-if="openMeeting3" />
    Hello World
  </div>
</template>
