<script lang="ts">
import DashboardTitlee from '../dashboard-title/index.vue'

export default {
  name: 'CardNotifications',
  components: { DashboardTitlee },
  props: {
    title: {
      type: String,
      required: true,
    },
    date: { type: String, required: true },
    type: { type: String, required: true },
  },
  setup() {
    return {
      headTitle: 'Notifications',
      buttonTitle: 'View all',
    }
  },
}
</script>

<template>
  <DashboardTitlee
    :title="headTitle"
    :button-title="buttonTitle"
  />
  <VCard
    :class="type === 'deleted' ? 'notification-container deleled' : type === 'overrided' ? 'notification-container overrided'
      : 'notification-container create'
    "
  >
    <div class="d-flex flex-column-reverse flex-md-row">
      <div>
        <VCardItem>
          <VCardTitle class="notification-title">
            {{ title }}
          </VCardTitle>
        </VCardItem>

        <VCardText class="d-flex align-center flex-wrap text-body-1">
          <span class="notification-date">{{ date }}</span>
        </VCardText>
      </div>
    </div>
  </VCard>
</template>

<style>
@media screen and (min-width: 350px) {
  .notification-title {
    color: var(--text-active);
    font-size: var(--font-size-sm);
    white-space: unset;
  }

  .notification-date {
    color: var(--text-deactive);
    font-size: var(--font-size-ssm);
  }

  .notification-container {
    border-radius: 0 10px 10px 0;
    margin-block-end: 10px;
  }

  .notification-container.deleled {
    border-inline-start: 3px solid red;
  }

  .notification-container.create {
    border-inline-start: 3px solid #10b981;
  }

  .notification-container.overrided {
    border-inline-start: 3px solid #f59e0b;
  }
}

@media screen and (min-width: 425px) {
  .notification-title {
    font-size: var(--font-size);
    white-space: unset;
  }

  .notification-date {
    font-size: var(--font-size-sm);
  }
}
</style>
