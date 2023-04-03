<script>
import { defineComponent } from 'vue'
import Meeting1 from '@/components/modal/Meeting1.vue'
import Meeting2 from '@/components/modal/Meeting2.vue'
import Meeting3 from '@/components/modal/Meeting3.vue'
import CalendarDate from '@/components/dashboard/calendar/index.vue'
import RoundedButton from '@/components/buttons/roundedButton/index.vue'
import { btnOutLine } from '@/constant/buttonColor'
import EditCreateNewLabel from '@/components/modal/EditCreateNewLabel.vue'

const items = ['week', 'day']
export default defineComponent({
  name: 'Calendar',
  components: {
    Meeting1,
    Meeting2,
    Meeting3,
    CalendarDate,
    RoundedButton,
    EditCreateNewLabel,
  },
  setup() {
    return {
      openMeeting1: ref(false),
      openMeeting2: ref(false),
      openMeeting3: ref(false),
      openEditCreateLabel: ref(true),
      btnOutLine,
      items,
    }
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
        <div class="d-flex align-center justify-center pa-2 mb-3 flex-column">
          <AppDateTimePicker
            :model-value="new Date().toJSON().slice(0, 10)"
            label="Inline"
            :config="{
              inline: true,
              // nextArrow: 'tabler-chevron-right',
              // prevArrow:
              //   'tabler-chevron-right',
            }"
            class="calendar-date-picker"
            @input="jumpToDate($event.target.value)"
          />
          <div class="event-list">
            <div class="event-title">
              <div>Labels</div>
              <span>
                <VIcon
                  icon="tabler-search"
                  size="18"
                />
              </span>
            </div>
            <div />
            <div class="list-event">
              <div class="event-item">
                <div class="d-flex align-center gap-2">
                  <div class="signal signal-green" />
                  <span>Senectus ultrices dia...</span>
                </div>
                <div>
                  <VIcon
                    icon="tabler-edit"
                    size="18"
                  />
                </div>
              </div>
              <div class="event-item">
                <div class="d-flex align-center gap-2">
                  <div class="signal signal-yellow" />
                  <span>Senectus ultrices dia...</span>
                </div>
                <div>
                  <VIcon
                    icon="tabler-edit"
                    size="18"
                  />
                </div>
              </div>
              <div class="event-item">
                <div class="d-flex align-center gap-2">
                  <div class="signal signal-purple" />
                  <span>Senectus ultrices dia...</span>
                </div>
                <div>
                  <VIcon
                    icon="tabler-edit"
                    size="18"
                  />
                </div>
              </div>
              <div class="event-item">
                <div class="d-flex align-center gap-2">
                  <div class="signal signal-dark-yellow" />
                  <span>Senectus ultrices dia...</span>
                </div>
                <div>
                  <VIcon
                    icon="tabler-edit"
                    size="18"
                  />
                </div>
              </div>
              <div class="event-item">
                <div class="d-flex align-center gap-2">
                  <div class="signal signal-blue" />
                  <span>Senectus ultrices dia...</span>
                </div>
                <div>
                  <VIcon
                    icon="tabler-edit"
                    size="18"
                  />
                </div>
              </div>
              <div class="event-item">
                <div class="d-flex align-center gap-2">
                  <div class="signal signal-red" />
                  <span>Senectus ultrices dia...</span>
                </div>
                <div>
                  <VIcon
                    icon="tabler-edit"
                    size="18"
                  />
                </div>
              </div>
            </div>
            <div class="w-50 mt-5">
              <RoundedButton
                icon-b="tabler-plus"
                :icon-b-color="btnOutLine.background"
                :color="btnOutLine.color"
                button-title="Add new"
                :style="btnOutLine"
                variant="outlined"
                :action="action"
              />
            </div>
          </div>
        </div>
      </VCol>
      <VCol
        cols="12"
        md="9"
      >
        <CalendarDate />
      </VCol>
    </VRow>
    <Meeting1 v-if="openMeeting1" />
    <Meeting2 v-if="openMeeting1" />
    <Meeting3 v-if="openMeeting1" />
    <EditCreateNewLabel v-if="openEditCreateLabel" />
  </div>
</template>

<style lang="scss">
.event-list {
  inline-size: 75%;
}

.event-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.event-title div {
  color: var(--text-dark);
  font-size: var(--font-size);
  font-weight: var(--font-weight-less-bold);
}

.event-title span:last-child {
  border: 1px solid #f3f4f6;
  border-radius: 5px;
  background: #fff;
  padding-block: 0;
  padding-inline: 4px;
}

.event-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  margin-block: 10px;
  margin-inline: auto;
}

.event-item span {
  overflow: hidden !important;
  color: var(--text-dark);
  inline-size: 80%;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.signal {
  border-radius: 50%;
  block-size: 13px;
  inline-size: 13px;
}

.signal-green {
  background-color: #10b981;
}

.signal-yellow {
  background-color: #fde68a;
}

.signal-dark-yellow {
  background-color: #fbbf24;
}

.signal-purple {
  background-color: #6366f1;
}

.signal-blue {
  background-color: #bfdbfe;
}

.signal-red {
  background-color: #ef4444;
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

.calendar-date-picker {
  display: none;

  +.flatpickr-input {
    +.flatpickr-calendar.inline {
      border: none;
      border-radius: 0;
      background-color: transparent;
      border-block-end: 1px solid #e5e7eb;
      box-shadow: none;
      inset-block-start: -20px;
      padding-block-end: 15px;

      .flatpickr-months {
        border-block-end: none;
      }

      .flatpickr-monthDropdown-months {
        color: var(--text-dark);
        font-weight: var(--font-weight-less-bold);
        inline-size: 50% !important;
        padding-block: 0;
        padding-inline: 0;
      }

      .numInputWrapper {
        color: var(--text-dark);
        font-weight: var(--font-weight-less-bold);
        padding-block: 0;
        padding-inline: 0;
      }

      .flatpickr-prev-month,
      .flatpickr-next-month {
        background: transparent;
        color: var(--text-dark);
      }

      .flatpickr-day {
        color: var(--text-dark);
      }

      .flatpickr-weekday {
        color: var(--text-dark);
      }
    }
  }
}
</style>
