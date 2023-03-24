<script  lang="ts">
import RounedBtn from '@/components/buttons/roundedButton/index.vue'
import { btnOutLine } from '@/constant/buttonColor'

export default {
  name: 'DashboardTitle',
  components: {
    RounedBtn,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    buttonTitle: {
      type: String,
      required: true,
    },
    action: {
      type: Function,
      required: true,
    },
  },
  setup() {
    return {
      btnOutLine,
    }
  },
}
</script>

<template>
  <div class="dash-title-box">
    <div class="dash-title">
      {{ title }}
    </div>
    <div>
      <RounedBtn
        :button-title="buttonTitle"
        color="btnOutLine.color"
        :style="btnOutLine"
        variant="'outlined'"
        :@click="action"
      />
    </div>
  </div>
</template>

<style>
@media screen and (min-width: 350px) {
  .dash-title-box {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-block-end: 1rem;
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
