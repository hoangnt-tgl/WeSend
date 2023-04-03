<!-- eslint-disable vue/component-api-style -->
<script>
import { defineComponent } from "vue";
import Meeting1 from "@/components/modal/Meeting1.vue";
import Meeting2 from "@/components/modal/Meeting2.vue";
import Meeting3 from "@/components/modal/Meeting3.vue";
import Reminder1 from "@/components/modal/Reminder1.vue";
import Reminder2 from "@/components/modal/Reminder2.vue";
import MeetingDetail from "@/components/modal/MeetingDetail.vue";
import CalendarDate from "@/components/dashboard/calendar/index.vue";
import Calendarpicker from "@/components/calendarpicker/index.vue";
import { btnOutLine } from "@/constant/buttonColor";
import EditCreateNewLabel from "@/components/modal/EditCreateNewLabel.vue";
import CampaignSchedule from "@/components/modal/CampaignSchedule.vue";

const items = ["week", "day"];
export default defineComponent({
  name: "Calendar",
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
    };
  },

  methods: {
    handleMouseClick(e) {
      const element = document.querySelector(".pick-drop");

      element.style.left = `${e.clientX}px `;
      element.style.top = `${e.clientY}px`;
      this.toggle = !this.toggle;
    },
    openMeetingModal() {
      this.openMeeting1 = true;
      this.openMeeting2 = true;
      this.openMeeting3 = true;
      this.openMeetingDetail = true;
    },
    closeMeeting1Modal() {
      this.openMeeting1 = false;
    },
    closeMeeting2Modal() {
      this.openMeeting2 = false;
    },
    closeMeeting3Modal() {
      this.openMeeting3 = false;
    },
    closeMeetingDetailModal() {
      this.openMeetingDetail = false;
    },
    openEditCreateLabelModal() {
      this.openEditCreateLabel = true;
    },
    closeEditCreateLabelModal() {
      this.openEditCreateLabel = false;
    },
    openCampaignModal() {
      this.openCampaign = true;
    },
    closeCampaignModal() {
      this.openCampaign = false;
    },
    openReminderModal() {
      this.openReminder1 = true;
      this.openReminder2 = true;
    },
    closeReminderModal1() {
      this.openReminder1 = false;
    },
    closeReminderModal2() {
      this.openReminder2 = false;
    },

    openMeetingDetailModal() {
      this.openMeetingDetail = true;
    },

    jumpToDate(date) {
      console.log(date);
    },
  },
});
</script>

<template>
  <div>
    <div class="calendar-header d-flex">
      <div class="calender-title">Schedule</div>
      <div class="calender-button d-flex gap-5">
        <VCheckbox label="Event & Labels" color="primary" />
        <VCheckbox label="Campaigns" color="primary" />
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
      <VCol cols="12" md="3" @click="openEditCreateLabelModal">
        <Calendarpicker />
      </VCol>
      <VCol
        cols="12"
        md="9"
        class="calendar-box"
        @click="($event) => handleMouseClick($event)"
      >
        <CalendarDate />

        <div class="pick-drop" v-show="toggle">
          <p @click="openMeetingModal">Add Meeting</p>
          <VDivider />
          <p @click="openCampaignModal">Add Campaign</p>
          <VDivider />
          <p @click="openReminderModal">Add Reminder</p>
        </div>
      </VCol>
    </VRow>
    <Meeting1 v-if="openMeeting1" @close="closeMeeting1Modal" />
    <EditCreateNewLabel
      v-if="openEditCreateLabel"
      @close="closeEditCreateLabelModal"
    />
    <Meeting2 v-if="openMeeting2" @close="closeMeeting2Modal" />
    <Meeting3 v-if="openMeeting3" @close="closeMeeting3Modal" />
    <MeetingDetail v-if="openMeetingDetail" @close="closeMeetingDetailModal" />
    <CampaignSchedule v-if="openCampaign" @close="closeCampaignModal" />
    <Reminder1 v-if="openReminder1" @close="closeReminderModal1" />
    <Reminder2 v-if="openReminder2" @close="closeReminderModal2" />
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
