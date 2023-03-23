<script  lang="ts">
export default {
  name: 'DashboardTitle',
  props: {
    title: {
      type: String,
      required: true,
    },
    buttonTitle: {
      type: String,
      required: true,
    },
  },
}
</script>

<template>
  <VCard
    class=" "
  >
    <div class="d-flex flex-column-reverse flex-md-row">
      <div>
        <VCardItem>
          <VCardTitle class="notification-title">
            {{ title }}
          </VCardTitle>
          <VBtnGroup>{{ buttonTitle }}</VBtnGroup>
        </VCardItem>
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
