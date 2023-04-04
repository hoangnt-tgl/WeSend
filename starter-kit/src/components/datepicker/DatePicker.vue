<script lang="ts">
import VueDatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'

const date = null
export default {
  name: 'Datepicker',
  components: {
    VueDatePicker,
  },
  setup() {
    return {
      date,
    }
  },
  methods: {
    format(date) {
      return date.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' })
    },
  },
}
</script>

<template>
  <VueDatePicker
    v-model="date"
    calendar-cell-class-name="dp-custom-cell"
    :offset="30"
    :format="format"
  >
    <template #input-icon>
      <VIcon icon="tabler-calendar-due" />
    </template>
  </VueDatePicker>
</template>

<style>
.dp__main {
  /* flex: 1; */

  /* inline-size: fit-content; */
  inline-size: 15%;
}

.dp-custom-cell {
  border-radius: 50%;
}

.dp__input {
  display: none;
}
</style>
