<!-- eslint-disable vue/component-api-style -->
<script lang="ts">
import BtnRound from '@/components/buttons/roundedButton/index.vue'
import { btnBlack } from '@/constant/buttonColor'

const btnOutLine = {
  background: 'transparent',
  color: '#111827',
  border: ' 1px solid #000 !important',
}

const switchOn = ref('on')
export default {
  name: 'CampaignSchedule',
  components: {
    BtnRound,
  },
  setup() {
    return {
      isModalOpen: true,
      btnOutLine,
      switchOn,
      btnBlack,
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
    <VCard title="Meeting">
      <div class="px-6 py-4">
        <div class="modal__label">
          Select Title
        </div>
        <div class="modal__input mb-4">
          <input
            type="text"
            value="New Year Greeting"
          >
        </div>
        <div class="d-flex gap-4 flex-column flex-sm-row">
          <div class="w-100">
            <div class="modal__label">
              Date and Time
            </div>
            <div class="modal__input">
              <input
                type="text"
                value="Wednesday, 26 Oct, 2022"
              >
            </div>
          </div>
          <div class="w-50">
            <div class="modal__label">
              To
            </div>
            <div class="modal__input">
              <input
                type="text"
                value="04:00 AM"
              >
            </div>
          </div>
          <div class="w-50">
            <div class="modal__label">
              From
            </div>
            <div class="modal__input">
              <input
                type="text"
                value="--/--"
              >
            </div>
          </div>
        </div>
        <div class="d-flex gap-4 flex-column flex-sm-row">
          <div class="w-100">
            <div class="modal__label">
              Select Contacts
            </div>
            <div class="modal__input">
              <input
                type="text"
                value="Siddhant Jain / +91971v1469568"
              >
              <div class="d-flex align-center icon-checkbox">
                <VCheckbox
                  key="color"
                  class="checkbox"
                  color="success"
                  value="success"
                />
                <span class="text-ar-1"> Include me</span>
              </div>
            </div>
          </div>
        </div>
        <VChip
          variant="outlined"
          closable
          class="me-2 mb-2"
          @click:close="{}"
        >
          01 - 200 / 04:00 AM
        </VChip>
        <VChip
          variant="outlined"
          closable
          class="me-2 mb-2"
          @click:close="{}"
        >
          201 - 600 / 04:20 AM
        </VChip>
        <VChip
          variant="outlined"
          closable
          class="me-2 mb-2"
          @click:close="{}"
        >
          601  - 800 / 04:40 AM
        </VChip>
        <VChip
          variant="outlined"
          closable
          class="me-2 mb-2"
          @click:close="{}"
        >
          801 - 1000 / 05:00 AM
        </VChip>
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
              <span class="text-ar-1"> Send to Archive</span>
            </div>
          </div>
          <div class="w-100 d-flex justify-end align-center gap-2 bottom-schedule-1">
            <button class="delete">
              <VIcon icon="tabler-trash" />
            </button>
            <div>
              <BtnRound
                button-title="Save"
                :color="btnBlack.color"
                :style="{ ...btnBlack, padding: '0px 35px', height: '45px' }"
                variant="'contained'"
                :action="close"
              />
            </div>
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

.text-ar-1 {
  font-size: var(--font-size-ssm);
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

.modal__input {
  display: flex;
  align-items: center;
  gap: 10px;
}

.modal__input .icon-checkbox span {
  color: var(--text-dark);
  font-size: 14px;
  inline-size: 124px;
}

.modal__input input {
  position: relative;
  padding: 15px;
  border-radius: 5px;
  background: #f3f4fb;
  block-size: 48px;
  color: #374151;
  font-size: 14px;
  inline-size: 100%;
  outline: none;
}

.modal__input > span {
  position: absolute;
  inset-inline-end: 8px;
  transform: translate(-100%, 50%);
}

.modal__input__des {
  block-size: 17px;
  color: #6b7280;
  font-size: 12px;
  font-weight: 400;
  line-height: 17px;
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
