<!-- eslint-disable vue/component-api-style -->
<script lang="ts">
import RoundedButton from '@/components/buttons/roundedButton/index.vue'
import Calendar from '@/components/dashboard/calendar/index.vue'
import CardNotifications from '@/components/dashboard/card-notifications/index.vue'
import Cardcampaign from '@/components/dashboard/cardcampaign/index.vue'
import DashboardTitle from '@/components/dashboard/dashboard-title/index.vue'
import NoCampaign from '@/components/dashboard/no-campaign/index.vue'
import { btnPurple } from '@/constant/buttonColor'
import { btnTitle, title } from '@/constant/commonTitle'
import { campaigns } from '@/data/campaign'
import { notifications } from '@/data/notifications'

export default {
  components: {
    RoundedButton,
    Calendar,
    CardNotifications,
    Cardcampaign,
    DashboardTitle,
    NoCampaign,
  },
  setup() {
    return {
      btnPurple,
      btnTitle,
      title,
      notifications,
      campaigns: ref(campaigns),
    }
  },
  methods: {

    goToCampaign() {
      this.$router.push('/campaign')
    },
    goToCalendar() {
      this.$router.push('/calendar')
    },
    goToNotifications() {
      this.$router.push('/history')
    },
    goToCreateCampaign() {
      this.addDataCampaign()

      // this.$router.push('/create-campaign')
    },
    addDataCampaign() {
      this.campaigns = [{
        id: '1',
        date: '25',
        month: 'December',
        time: '  05:30 AM',
        process: 1723,
        totalProcess: 4500,
        status: 'RUNNING',
        des: 'Lorem lacus vulputate amet integer diam arcu.',
      },
      {
        id: '3',
        date: '26',
        month: 'December',
        time: '  08:30 AM',
        process: 0,
        totalProcess: 4500,
        status: 'IN QUEUE',
        des: 'Lorem lacus vulputate amet integer diam arcu.',
      },
      {
        id: '2',
        date: '26',
        month: 'December',
        time: '  8:30 AM',
        process: 1723,
        totalProcess: 4500,
        status: 'PAUSE',
        des: 'Lorem lacus vulputate amet integer diam arcu.',
      }]
    },
  },
}
</script>

<template>
  <VRow>
    <VCol
      cols="12"
      md="7"
      class="pa-6"
    >
      <DashboardTitle
        :title="title.calendar"
        :button-title="btnTitle.viewAll"
        :action="goToCalendar"
      />
      <Calendar />
    </VCol>
    <VCol
      cols="12"
      md="5"
      class="pa-6"
    >
      <div class="campaign-wrapper">
        <DashboardTitle
          :action="goToCampaign"
          :title="title.campaigns"
          :button-title="btnTitle.viewAll"
        />
        <div v-if="campaigns.length > 0">
          <div
            v-for="(campaign, idx) in campaigns"

            :key="campaign.id"
          >
            <Cardcampaign
              v-if="idx < 2"
              :date="campaign.date"
              :month="campaign.month"
              :time="campaign.time"
              :process="campaign.process"
              :total-process="campaign.totalProcess"
              :status="campaign.status"
              :des="campaign.des"
            />
          </div>
        </div>
        <div v-else>
          <NoCampaign />
        </div>
        <div>
          <RoundedButton
            icon-a="tabler-plus"
            :icon-a-color="btnPurple.background"
            :color="btnPurple.color"
            :button-title="btnTitle.createNewCampaign"
            :style="btnPurple"
            variant=""
            :action="goToCreateCampaign"
          />
        </div>
      </div>
      <div class="notifications-wrapper">
        <DashboardTitle
          :action="goToNotifications"
          :title="title.notifications"
          :button-title="btnTitle.viewAll"
        />
        <div
          v-for="notification in notifications"
          :key="notification.title"
          :notification="notification"
        >
          <CardNotifications
            :type="notification.type"
            :date="notification.date"
            :title="notification.title"
          />
        </div>
      </div>
    </VCol>
  </VRow>
</template>

<style>
@media (min-width: 350px) {
  .notifications-wrapper,
  .campaign-wrapper {
    margin-block-end: 60px;
  }
}

@media (min-width: 768px) {
  .campaign-wrapper {
    /* display: flex; */

    /* gap: 1rem; */
  }
}
</style>
