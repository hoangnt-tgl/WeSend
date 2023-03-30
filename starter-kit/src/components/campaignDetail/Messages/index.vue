<script lang="ts">
import BtnRound from '@/components/buttons/roundedButton/index.vue'
import Message from '@/components/message/index.vue'
import { btnBlack } from '@/constant/buttonColor'

export default {
  name: 'CampaignMessage',
  components: {
    Message,
    BtnRound,
  },
  props: {
    action: {
      type: Function,
      required: true,
    },

  },
  setup() {
    return {
      btnBlack,

    }
  },
}
</script>

<template>
  <div class="message-container">
    <Message :action="action" />
    <div class=" btn-next mt-5">
      <div>
        <BtnRound
          button-title="continue"
          :action="action"
          color="btnBlack.color"
          :style="{ ...btnBlack, height: '45px', padding: '0px 30px' }"
          variant="contained"
        />
      </div>
    </div>
    <div
      class="btn-phone-container"
    >
      <div

        class="btn-text-preview"
        style="color: #374151;"
      >
        <span>Preview</span>
      </div>
      <div

        class="btn-phone"
      >
        <BtnRound
          button-title="continue"
          :action="action"
          color="btnBlack.color"
          :style="btnBlack"
          variant="contained"
        />
      </div>
    </div>
  </div>
</template>

<style>
@media (min-width: 350px) {
  .v-window {
    overflow: unset;
  }

  .message-container {
    position: relative;
  }

  .message-container .btn-next {
    position: absolute;
    z-index: 9999;
    inset-block-end: -7%;
    inset-inline-end: -3.5%;
  }

  .message-container .btn-phone-container {
    position: absolute;
    display: flex;
    justify-content: space-between;
    background: #fff;
    inset-block-end: -15%;
    inset-inline-end: -10%;
    inset-inline-start: -10%;
    padding-block: 15px;
    padding-inline: 15px;
  }
}

@media (min-width: 768px) {
  .message-container .btn-phone-container {
    display: none;
  }

  .message-container .btn-next {
    inset-block-end: -7%;
    inset-inline-end: -3.5%;
  }
}

@media (min-width: 960px) {
  .message-container .btn-next {
    inset-block-end: 0%;
    inset-inline-end: 0%;
  }
}
</style>
