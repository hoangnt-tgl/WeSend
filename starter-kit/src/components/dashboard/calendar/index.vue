<script setup lang="ts">
import '@fullcalendar/core/vdom' // solves problem with Vite

// Local imports

// import { blankEvent, useCalendar } from '@/views/apps/calendar/useCalendar'
import FullCalendar from '@fullcalendar/vue3'
import { blankEvent, useCalendar } from '@/components/calendar/useCalendar'

import { useResponsiveLeftSidebar } from '@core/composable/useResponsiveSidebar'

// Components
import CalendarEventHandler from '@/components/calendar/CalendarEventHandler.vue'

// 👉 Event
const event = ref(structuredClone(blankEvent))
const isEventHandlerSidebarActive = ref(false)

watch(isEventHandlerSidebarActive, val => {
  if (!val)
    event.value = structuredClone(blankEvent)
})

const { isLeftSidebarOpen } = useResponsiveLeftSidebar()

// 👉 useCalendar
const { refCalendar, calendarOptions, addEvent, updateEvent, removeEvent, jumpToDate } = useCalendar(event, isEventHandlerSidebarActive, isLeftSidebarOpen)

if (window.innerWidth < 576) {
  calendarOptions.views = {
    timeGridDay: {
      type: 'timeGrid',
      duration: { days: 1 },
      buttonText: '1 day',
    },
  }
}
else {
  calendarOptions.views = {
    timeGridDay: {
      type: 'timeGrid',
      duration: { days: 3 },
      buttonText: '3 day',
    },
  }
}

// !SECTION
</script>

<template>
  <div>
    <VCard>
      <!-- `z-index: 0` Allows overlapping vertical nav on calendar -->
      <VLayout style="z-index: 0;">
        <VMain>
          <VCard flat>
            <FullCalendar
              ref="refCalendar"
              :options="calendarOptions"
            />
          </VCard>
        </VMain>
      </VLayout>
    </VCard>
    <CalendarEventHandler
      v-model:isDrawerOpen="isEventHandlerSidebarActive"
      :event="event"
      @add-event="addEvent"
      @update-event="updateEvent"
      @remove-event="removeEvent"
    />
  </div>
</template>

<style lang="scss">
@use "@core/scss/template/libs/full-calendar";
</style>

<style lang="scss" scoped>
.v-layout {
  overflow: visible !important;

  .v-card {
    overflow: visible;
  }
}
</style>
