<!-- eslint-disable vue/component-api-style -->
<script lang="ts">
import BtnRound from '@/components/buttons/roundedButton/index.vue'
import CampaignScheduleSetting from '@/components/modal/CampaignScheduleSetting.vue'
import { btnBlack } from '@/constant/buttonColor'

const btnOutLine = {
  background: 'transparent',
  color: '#111827',
  border: ' 1px solid #000 !important',
  padding: '5px 15px',
  fontSize: '12px',
}

const switchOn = ref('on')
export default {
  name: 'CampaignSchedule',
  components: {
    BtnRound,
    CampaignScheduleSetting,
  },
  setup() {
    return {
      defaultValue: true,
      isModalSettingOpen: ref(false),
      btnOutLine,
      btnBlack,
      switchOn,
    }
  },
  methods: {
    close() {
      this.$emit('close')
    },
    openModalSetting() {
      this.isModalSettingOpen = true
    },
    closeModalSetting() {
      this.isModalSettingOpen = false
    },
  },
}
</script>

<template>
  <VDialog
    v-model="defaultValue"
    persistent
    class="v-dialog-lg "
  >
    <DialogCloseBtn
      class="close__btn"
      @click="close"
    />

    <!-- Dialog Content -->
    <VCard
      title="Campaign schedule"
      class="campaign-schedule-modal"
    >
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
        <div class="d-flex gap-4 flex-column flex-sm-row my-6">
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
          </div>
        </div>
        <div class="d-flex gap-4 flex-column flex-sm-row my-6">
          <div class="w-100">
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

        <div class="modal__setting pa-7">
          <div class="setting__title">
            This campaign will run for <span>1000 contacts </span>starting from<span> 100 to 1100</span>
            and up to <span>30 mins.</span>
          </div>
          <div class="setting__des">
            We will run this campaign in <span>chunks of 200 contacts</span> with a delay of
            <span>10 mins</span> between each chunk to follow WhatsApp guidelines. Read more.
          </div>

          <div class="py-2">
            <BtnRound
              button-title="Edit settings"
              :color="btnOutLine.color"
              :style="{ ...btnOutLine, width: 'fit-content', height: '42px' }"
              variant="'outlined'"
              :action="openModalSetting"
            />
          </div>
        </div>
        <div class="d-flex flex-column flex-sm-row justify-content-sm-between mt-6 mb-2">
          <div class="w-100 d-flex align-center gap-5 bottom-schedule">
            <div>
              <VSwitch
                v-model="switchOn"
                label="Active"
                value="on"
                color="success"
              />
            </div>
            <div class="d-flex align-center">
              <VCheckbox
                key="color"
                class="checkbox"
                color="success"
                value="success"
              />
              <span class="text-ar"> Send to Archive</span>
            </div>
          </div>
          <div class="w-100 d-flex justify-end align-center gap-1">
            <button class="delete">
              <VIcon icon="tabler-trash" />
            </button>
            <div>
              <BtnRound
                button-title="Save"
                :color="btnBlack.color"
                :style="{ ...btnBlack, padding: '0px 35px', height: '45px' }"
                variant="'contained'"
                :action="openModalSetting"
              />
            </div>
          </div>
        </div>
      </div>
    </VCard>
    <CampaignScheduleSetting
      v-if="isModalSettingOpen"
      @close="closeModalSetting"
    />
  </VDialog>
</template>

<style>
.campaign-schedule-modal .v-card-title {
  color: var(--text-dark) !important;
  font-size: var(--font-size-md);
  opacity: 1 !important;
}

.campaign-schedule-modal .v-card-item {
  padding: 24px !important;
}

.campaign-schedule-modal .v-dialog-close-btn:hover {
  transform: translate(0.5rem, 1rem) !important;
}

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

.bottom-schedule .v-switch__thumb {
  background-color: white !important;
  block-size: 12px !important;
  inline-size: 12px !important;
}

.bottom-schedule .v-switch__track {
  block-size: 18px;
}

.bottom-schedule .v-label {
  color: var(--text-dark) !important;
  opacity: 1;
}

.text-ar {
  color: var(--text-dark);
}
</style>
