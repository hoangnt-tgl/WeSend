<script lang="ts">
import RounedBtn from '@/components/buttons/roundedButton/index.vue';
import { btnOutLine } from '@/constant/buttonColor';

export default {
  name: 'CardHistory',
  components: {
    RounedBtn,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    time: { type: String, required: true },
    type: { type: String, required: true },
  },
  setup() {
    return {
      btnOutLine,
    }
  },
}
</script>

<template>
  <VCard
    :class="
      type === 'deleted'
        ? 'notification-container deleted'
        : type === 'overrided'
          ? 'notification-container overrided'
          : 'notification-container created'
    "
  >
    <div class="d-flex justify-content-between align-center py-3">
      <div class="w-75">
        <div class="d-flex flex-sm-column-reverse flex-column">
          <VCardTitle class="text-body-1 py-0">
            <span class="notification-date">{{ time }}</span>
          </VCardTitle>
          <VCardTitle class="notification-title py-0">
            {{ title }}
          </VCardTitle>
        </div>
      </div>
      <div
        v-if="type === 'deleted'"
        class="ms-auto me-md-7 me-4"
        @click="() => {}"
      >
        <!--
          <RounedBtn
          button-title=""
          :color="btnOutLine.color"
          :style="btnOutLine"
          variant="'outlined'"
          icon-b="tabler-rotate-2"
          class="d-block d-sm-none"
          />
        -->
        <div class="d-block d-sm-none icon-reload-phone">
          <VIcon icon="tabler-rotate-2" />
        </div>
        <RounedBtn
          button-title="Restore"
          :color="btnOutLine.color"
          :style="{ ...btnOutLine, height: '45px' }"
          variant="'outlined'"
          icon-b="tabler-rotate-2"
          class="d-none d-sm-block"
        />
      </div>
    </div>
    <!--
      <VCardItem class="notification-title-box">
      <VCardTitle class="notification-title">
      {{ title }}
      </VCardTitle>
      </VCardItem>

      <VCardText class="d-flex align-center flex-wrap text-body-1">
      <span class="notification-date">{{ time }}</span>
      </VCardText>
    -->
  </VCard>
</template>

<style>
@media screen and (min-width: 350px) {
  .notification-title-box {
    padding-block-end: 0.25rem;
  }

  .notification-title {
    color: var(--text-active);
    font-size: var(--font-size-sm);
    margin-inline: 0;
    white-space: unset;
  }

  .notification-date {
    color: var(--text-deactive);
    font-size: var(--font-size-ssm);
  }

  .notification-container {
    border-radius: 0 10px 10px 0;
    background: #f9fafb;
    margin-block-end: 10px;
  }

  .notification-container.deleted {
    border-inline-start: 3px solid red;
  }

  .notification-container.created {
    border-inline-start: 3px solid #10b981;
  }

  .notification-container.overrided {
    border-inline-start: 3px solid #f59e0b;
  }

  .icon-reload-phone {
    padding: 8px;
    border: 1px solid #d1d5db;
    border-radius: 50%;
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
