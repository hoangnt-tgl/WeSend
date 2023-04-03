<!-- eslint-disable vue/component-api-style -->
<script>
import { defineComponent } from 'vue'
import Meeting1 from '@/components/modal/Meeting1.vue'
import Meeting2 from '@/components/modal/Meeting2.vue'
import Meeting3 from '@/components/modal/Meeting3.vue'
import Reminder1 from '@/components/modal/Reminder1.vue'
import Reminder2 from '@/components/modal/Reminder2.vue'
import MeetingDetail from '@/components/modal/MeetingDetail.vue'
import CalendarDate from '@/components/dashboard/calendar/index.vue'
import Calendarpicker from '@/components/calendarpicker/index.vue'
import { btnOutLine } from '@/constant/buttonColor'
import EditCreateNewLabel from '@/components/modal/EditCreateNewLabel.vue'
import CampaignSchedule from '@/components/modal/CampaignSchedule.vue'

import CalendarWeek from '@/components/calendarWeek/CalendarWeek.vue'
import CalendarDay from '@/components/calendarWeek/CalendarDay.vue'
import Datepicker from '@/components/datepicker/DatePicker.vue'

const items = ['week', 'day']
const label = ['label', 'label2', 'label3']
export default defineComponent({
  name: 'Calendar',
  components: {
    Meeting1,
    Meeting2,
    Meeting3,
    CalendarDate,
    Calendarpicker,
    EditCreateNewLabel,
    MeetingDetail,
    CampaignSchedule,
    Reminder1,
    Reminder2,
    CalendarWeek,
    CalendarDay,
    Datepicker,
  },
  setup() {
    return {
      openMeeting1: ref(false),
      openMeeting2: ref(false),
      openMeeting3: ref(false),
      openMeetingDetail: ref(false),
      openCampaign: ref(false),
      openReminder1: ref(false),
      openReminder2: ref(false),
      openEditCreateLabel: ref(false),
      btnOutLine,
      items,
      toggle: ref(false),
      isWeek: ref(true),
      selected: ref('week'),
      label,
      selectedLabel: 'label',
    }
  },
  watch: {
    selected() {
      if (this.selected === 'week')
        this.isWeek = true
      else
        this.isWeek = false
    },
  },
  methods: {
    handleMouseClick(e) {
      const element = document.querySelector('.pick-drop')

      element.style.left = `${e.clientX}px `
      element.style.top = `${e.clientY}px`
      this.toggle = !this.toggle
    },
    openMeetingModal() {
      this.openMeeting1 = true
      this.openMeeting2 = true
      this.openMeeting3 = true
      this.openMeetingDetail = true
    },
    closeMeeting1Modal() {
      this.openMeeting1 = false
    },
    closeMeeting2Modal() {
      this.openMeeting2 = false
    },
    closeMeeting3Modal() {
      this.openMeeting3 = false
    },
    closeMeetingDetailModal() {
      this.openMeetingDetail = false
    },
    openEditCreateLabelModal() {
      this.openEditCreateLabel = true
    },
    closeEditCreateLabelModal() {
      this.openEditCreateLabel = false
    },
    openCampaignModal() {
      this.openCampaign = true
    },
    closeCampaignModal() {
      this.openCampaign = false
    },
    openReminderModal() {
      this.openReminder1 = true
      this.openReminder2 = true
    },
    closeReminderModal1() {
      this.openReminder1 = false
    },
    closeReminderModal2() {
      this.openReminder2 = false
    },

    openMeetingDetailModal() {
      this.openMeetingDetail = true
    },

    jumpToDate(date) {
      console.log(date)
    },
  },
})
</script>

<template>
  <div>
    <div class="calendar-header d-flex">
      <div class="calender-title">
        Schedule
      </div>
      <div class="calender-button d-flex gap-5">
        <div class="d-flex gap-5 calendar-checkbox">
          <VCheckbox
            label="Event & Labels"
            color="primary"
          />
          <VCheckbox
            label="Campaigns"
            color="primary"
          />
        </div>
        <div class="d-flex gap-5">
          <div class="date-picker-box">
            <Datepicker />
          </div>
          <VSelect
            v-model="selectedLabel"
            variant="solo"
            single-line
            :items="label"
            class=" selected-label"
          />
        </div>
        <div>
          <VSelect

            v-model="selected"
            variant="solo"
            single-line
            :items="items"
            class="select-duration"
          />
        </div>
      </div>
    </div>
    <VRow>
      <VCol
        cols="12"
        md="3"
        class="calendarpicker-box"
        @click="openEditCreateLabelModal"
      >
        <Calendarpicker />
      </VCol>
      <VCol
        cols="12"
        md="9"
        class="calendar-box"
        @click="$event => handleMouseClick($event)"
      >
        <div
          v-if="isWeek"
          class="calendar-wrapper"
        >
          <CalendarWeek />
        </div>
        <div
          v-else
          class="calendar-wrapper"
        >
          <CalendarDay />
        </div>

        <div
          class="pick-drop"
        >
          <div v-if="toggle">
            <p @click="openMeetingModal">
              Add Meeting
            </p>
            <VDivider />
            <p @click="openCampaignModal">
              Add Campaign
            </p>
            <VDivider />
            <p @click="openReminderModal">
              Add Reminder
            </p>
          </div>
        </div>
      </VCol>
    </VRow>
    <Meeting1
      v-if="openMeeting1"
      @close="closeMeeting1Modal"
    />
    <EditCreateNewLabel
      v-if="openEditCreateLabel"
      @close="closeEditCreateLabelModal"
    />
    <Meeting2
      v-if="openMeeting2"
      @close="closeMeeting2Modal"
    />
    <Meeting3
      v-if="openMeeting3"
      @close="closeMeeting3Modal"
    />
    <MeetingDetail
      v-if="openMeetingDetail"
      @close="closeMeetingDetailModal"
    />
    <CampaignSchedule
      v-if="openCampaign"
      @close="closeCampaignModal"
    />
    <Reminder1
      v-if="openReminder1"
      @close="closeReminderModal1"
    />
    <Reminder2
      v-if="openReminder2"
      @close="closeReminderModal2"
    />
    Hello World
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
  font-weight: var(--font-weight-bold);
}

.select-duration {
  inline-size: 130px;
}

.calender-button .v-label {
  color: var(--text-dark) !important;
  font-size: var(--font-size);
  font-weight: var(--font-weigth-light);
  opacity: 1 !important;
}

.calender-button .v-field--variant-solo {
  box-shadow: none !important;
}

.select-label {
  display: none;
}

.date-picker-box {
  display: none;
}

@media (max-width: 960px) {
  .calendarpicker-box {
    display: none;
  }

  .calendar-header {
    display: block !important;
    padding-block: 0;
    padding-inline: 10px;
  }

  .calendar-wrapper {
    padding-block: 0;
    padding-inline: 10px;
  }

  .calendar-checkbox {
    display: none !important;
  }

  .select-label {
    display: block;
  }

  .date-picker-box {
    display: flex;
    justify-content: center;
    padding: 5px;
    background: #fff;
    block-size: 40px;
    inline-size: 40px;
  }

  .date-picker-box .dp__input_icon {
    position: relative;
  }

  .date-picker-box .dp__main {
    display: flex;
    justify-content: center;
  }

  .calender-button {
    justify-content: space-between;
    margin-block-start: 10px;
  }
}
</style>
