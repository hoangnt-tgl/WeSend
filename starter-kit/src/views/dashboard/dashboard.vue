<script setup lang="ts">
import RoundedButton from '@/components/buttons/roundedButton/index.vue'
import CardNotifications from '@/components/dashboard/card-notifications/index.vue'
import Cardcampaign from '@/components/dashboard/cardcampaign/index.vue'
import DashboardTitle from '@/components/dashboard/dashboard-title/index.vue'
import { btnPurple } from '@/constant/buttonColor'
import { btnTitle, title } from '@/constant/commonTitle'
import { notifications } from '@/data/notifications'

const items = []
</script>

<template>
  <VRow>
    <!-- 👉 Influencing The Influencer -->
    <VCol
      cols="12"
      md="8"
    >
      <DashboardTitle
        :title="title.calendar"
        :button-title="btnTitle.viewAll"
        :action="() => { }"
      />
      <div>Calendar</div>
    </VCol>
    <VCol
      cols="12"
      md="4"
    >
      <div class="campaign-wrapper">
        <DashboardTitle
          :title="title.campaigns"
          :button-title="btnTitle.viewAll"
        />
        <div
          v-for="production in items"
          :key="production"
          :production="production"
        >
          <Cardcampaign />
        </div>
        <div>
          <RoundedButton
            :color="btnPurple.color"
            :button-title="btnTitle.createNewCampaign"
            :style="btnPurple"
            variant=""
          />
        </div>
      </div>
      <div class="notifications-wrapper">
        <DashboardTitle
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
  <!--
    <div class="campaign-wrapper">
    <DashboardTitle
    :title="title.campaigns"
    :button-title="btnTitle.viewAll"
    />
    <div
    v-for="production in items"
    :key="production"
    :production="production"
    >
    <Cardcampaign />
    </div>
    <div>
    <RoundedButton
    :color="btnPurple.color"
    :button-title="btnTitle.createNewCampaign"
    :style="btnPurple"
    variant=""
    />
    </div>
    </div>
    <div class="notifications-wrapper">
    <DashboardTitle
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
  -->
</template>

<style>
@media (min-width: 375px) {
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
