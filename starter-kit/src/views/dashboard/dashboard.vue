<!-- eslint-disable vue/component-api-style -->
<script lang="ts">
import RoundedButton from '@/components/buttons/roundedButton/index.vue'
import Calendar from '@/components/dashboard/calendar/index.vue'
import CardNotifications from '@/components/dashboard/card-notifications/index.vue'
import Cardcampaign from '@/components/dashboard/cardcampaign/index.vue'
import DashboardTitle from '@/components/dashboard/dashboard-title/index.vue'
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
  },
  setup() {
    return {
      btnPurple,
      btnTitle,
      title,
      notifications,
      campaigns,
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
      this.$router.push('/create-campaign')
    },
  },
}
</script>

<template>
  <VRow>
    <VCol
      cols="12"
      md="7"
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
    >
      <div class="campaign-wrapper">
        <DashboardTitle
          :action="goToCampaign"
          :title="title.campaigns"
          :button-title="btnTitle.viewAll"
        />
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
