<script setup lang="ts">
import CardNotifications from '@/components/dashboard/card-notifications/index.vue'
import Cardcampaign from '@/components/dashboard/cardcampaign/index.vue'

const items = [1, 2, 3, 4]
const notifications = [{ title: 'Campaign “Halloween Discount” was deleted.', date: '24 Sep 2022 / 04:30 AM', type: 'deleted' }, { title: 'Campaign “Halloween Discount” was deleted.', date: '24 Sep 2022 / 04:30 AM', type: 'create' }, { title: 'Campaign “Halloween Discount” was deleted.', date: '24 Sep 2022 / 04:30 AM', type: 'overrided' }, { title: 'Campaign “Halloween Discount” was deleted.', date: '24 Sep 2022 / 04:30 AM', type: 'overrided' }]
</script>

<template>
  <div class="campaign-wrapper">
    <!--
      <div
      v-for="production in items"
      :key="production"
      :production="production"
      >
      <Cardcampaign />
      </div>
    -->
    <Cardcampaign />
    <Cardcampaign />
    <Cardcampaign />
    <Cardcampaign />
  </div>
  <div class="notifications-wrapper">
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
</template>

<style>
/* @media (min-width: 375px) {
  .campaign-wrapper {

  }
} */

@media (min-width: 768px) {
  .campaign-wrapper {
    display: flex;
    gap: 1rem;
  }
}
</style>
