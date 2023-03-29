<!-- eslint-disable vue/component-api-style -->
<script lang="ts">
import BtnRound from '@/components/buttons/roundedButton/index.vue'

const btnOutLine = {
  background: 'transparent',
  color: '#111827',
  border: ' 1px solid #000 !important',
}

export default {
  name: 'CampaignSchedule',
  components: {
    BtnRound,
  },
  setup() {
    return {
      isModalOpen: true,
      btnOutLine,
    }
  },
  methods: {
    close() {
      this.$emit('close')
    },
  },
}
</script>

<template>
  <VDialog
    v-model="isModalOpen"
    persistent
    class="v-dialog-sm"
  >
    <DialogCloseBtn
      class="close__btn"
      @click="close"
    />

    <!-- Dialog Content -->
    <VCard title="Campaign schedule">
      <div class="px-6 py-4">
        <div class="modal__label">
          Select Campaign
        </div>
        <div class="modal__input">
          <input
            type="text"
            value="Christmas Campaign 1"
          >
        </div>

        <div class="d-flex gap-4">
          <div class="w-100">
            <div class="modal__label">
              Date
            </div>
            <div class="modal__input">
              <input
                type="text"
                value="Wednesday, 26 Oct, 2022"
              >
            </div>
            <div class="modal__label">
              No. of contacts to send
            </div>
            <div class="modal__input">
              <input
                type="text"
                value="04:00 AM"
              >
            </div>
          </div>
          <div class="w-100">
            <div class="modal__label">
              Time
            </div>
            <div class="modal__input">
              <input
                type="text"
                value="1000"
              >
            </div>
            <div class="modal__label">
              Starts From
            </div>
            <div class="modal__input">
              <input
                type="text"
                value="100"
              >
            </div>
          </div>
        </div>
        <div class="modal__setting">
          <div class="setting__title">
            This campaign will run for <span>1000 contacts </span>starting from<span> 100 to 1100</span>
            and up to <span>30 mins.</span>
          </div>
          <div class="setting__des">
            We will run this campaign in <span>chunks of 200 contacts</span> with a delay of
            <span>10 mins</span> between each chunk to follow WhatsApp guidelines. Read more.
          </div>
          <div>
            <BtnRound
              button-title="Edit settings"
              color="btnOutLine.color"
              :style="btnOutLine"
              variant="'outlined'"
            />
          </div>
        </div>
      </div>
    </VCard>
  </VDialog>
</template>

<style scoped>
.close__btn {
  position: absolute;
  margin: 16px;
  background: transparent;
  background-color: transparent;
  inset-block-start: 0;
  inset-inline-end: 0;
}

.modal__group__input {
  margin-block-end: 4px;
}

.modal__label {
  color: #111827;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 23px;
  margin-block-end: 8px;
}

.modal__input input {
  padding: 15px;
  border-radius: 5px;
  background: #f3f4fb;
  block-size: 48px;
  color: #374151;
  font-size: 14px;
  inline-size: 100%;
  margin-block-end: 16px;
  outline: none;
}

.modal__setting {
  padding: 16px;
  border-radius: 5px;
  background: #f3f4fb;
}

.setting__title {
  color: #111827;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
}

.setting__title span {
  color: #6354d9;
  font-weight: 700;
}

.setting__des {
  color: #6b7280;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 17px;
}

.setting__des span {
  color: #111827;
}
</style>
