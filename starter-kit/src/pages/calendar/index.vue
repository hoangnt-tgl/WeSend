<script>
import { defineComponent } from 'vue'
import Meeting1 from '@/components/modal/Meeting1.vue'
import Meeting2 from '@/components/modal/Meeting2.vue'
import Meeting3 from '@/components/modal/Meeting3.vue'
import CalendarDate from '@/components/dashboard/calendar/index.vue'
import Calendarpicker from '@/components/calendarpicker/index.vue'
import RoundedButton from '@/components/buttons/roundedButton/index.vue'
import { btnOutLine } from '@/constant/buttonColor'

const items = ['week', 'day']
export default defineComponent({
  name: 'Calendar',
  components: {
    Meeting1,
    Meeting2,
    Meeting3,
    CalendarDate,
    Calendarpicker,
  },
  setup() {
    return {
      openMeeting1: ref(false),
      openMeeting2: ref(false),
      openMeeting3: ref(false),
      btnOutLine,
      items,
      toggle: ref(false),
    }
  },
  methods: {
    handleMouseClick(e) {
      const element = document.querySelector('.pick-drop')

      element.style.left = `${e.clientX}px `
      element.style.top = `${e.clientY}px`
      this.toggle = !this.toggle
    },
  },

})
</script>

<template>
  <div>
    <div class="calendar-header  d-flex  ">
      <div class="calender-title">
        Schedule
      </div>
      <div class="calender-button d-flex gap-5">
        <VCheckbox
          label="Event & Labels"
          color="primary"
        />
        <VCheckbox
          label="Campaigns"
          color="primary"
        />
        <VSelect
          v-model="items[0]"
          variant="solo"
          single-line
          :items="items"
          class="select-duration"
        />
      </div>
    </div>
    <VRow>
      <VCol
        cols="12"
        md="3"
      >
        <Calendarpicker />
      </VCol>
      <VCol
        cols="12"
        md="9"
        class="calendar-box"
        @click="$event => handleMouseClick($event)"
      >
        <CalendarDate />

        <div
          class="pick-drop"
        >
          <div v-if="toggle">
            <p>Add Meeting</p>
            <VDivider />
            <p>Add Campaign</p>
            <VDivider />
            <p>Add Reminder</p>
          </div>
        </div>
      </VCol>
    </VRow>
    <Meeting1 v-if="openMeeting1" />
    <Meeting2 v-if="openMeeting1" />
    <Meeting3 v-if="openMeeting1" />
  </div>
</template>

<style lang="css">
.pick-drop {
  position: absolute;
  padding: 10px;
  border-radius: 9px;
  background: #fff;
  box-shadow: 0 10px 60px rgba(215, 218, 241, 40%);
  inset-block-start: 50%;
  inset-inline-start: 50%;
}

.pick-drop p {
  border-radius: 5px;
  color: var(--text-dark);
  cursor: pointer;
  font-size: 13px;
  font-weight: 400;
  margin-block: 10px;
  margin-inline: auto;
  transition: all 0.4s;
}

.calendar-header {
  flex-wrap: wrap;
  justify-content: space-between;
  inline-size: 100%;
  margin-block-end: 30px;
  padding-inline-start: 46px;
}

.select-type-date {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid transparent;
  border-radius: 5px;
  background: #fff;
  color: var(--text-dark);
  cursor: pointer;
  font-size: 13px;
  font-weight: 400;
  gap: 15px;
  inline-size: 146px;
  padding-block: 11px;
  padding-inline: 20px;
  text-align: center;
  transition: all 0.4s;
}

.calender-title {
  color: var(--text-dark);
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight);
}

.select-duration {
  inline-size: 130px;
}

.calender-button .v-label {
  color: var(--text-dark) !important;
  font-size: var(--font-size);
  font-weight: var(--font-weigth-light);
}
</style>
