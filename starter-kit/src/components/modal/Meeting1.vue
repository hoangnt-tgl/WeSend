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
        <div class="d-flex gap-4 flex-column flex-sm-row mb-4">
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
          <div class="w-100 d-flex gap-4">
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
        </div>
        <div class="d-flex gap-4 flex-column flex-sm-row mb-4">
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
                <p class="text-ar-1">
                  <span>Include me</span>
                  <img
                    src="../../assets/icons/question.svg"
                    alt="icon"
                  >
                </p>
              </div>
            </div>
          </div>
        </div>
        <VChip
          variant="outlined"
          closable
          class="me-2 mb-2 style-chip"
          @click:close="{}"
        >
          Nikhil Jain / +919953199609
        </VChip>
        <VChip
          variant="outlined"
          closable
          class="me-2 mb-2 style-chip"
          @click:close="{}"
        >
          Varun Gupta / +919953199609
        </VChip>
        <VChip
          variant="outlined"
          class="me-2 mb-2 style-chip"
          @click:close="{}"
        >
          ...
        </VChip>

        <div class="input-checkbox mt-2">
          <div class="d-flex align-center icon-checkbox">
            <VCheckbox
              key="color"
              class="checkbox"
              color="success"
              value="success"
            />
            <p class="text-ar-1">
              <span>Message</span>
              <img
                src="../../assets/icons/question.svg"
                alt="icon"
              >
            </p>
          </div>
          <div class="d-flex align-center icon-checkbox">
            <VCheckbox
              key="color"
              class="checkbox"
              color="success"
              value="success"
            />
            <p class="text-ar-1">
              <span>Reminder</span>
              <img
                src="../../assets/icons/question.svg"
                alt="icon"
              >
            </p>
          </div>
        </div>
        <div class="d-flex justify-content-sm-between mt-4 mb-2 gap-3 modal-footer">
          <div class="w-100 d-flex align-center gap-3 bottom-schedule">
            <div class="d-flex gap-1 align-items-center button-toggle">
              <div class="toggle">
                <input
                  id="switch"
                  type="checkbox"
                  class="switch-input"
                >
                <label
                  for="switch"
                  class="switch"
                />
              </div>
              <span class="text-ar-1">Active</span>
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
            <div class="d-flex align-center">
              <VCheckbox
                key="color"
                class="checkbox"
                color="success"
                value="success"
              />
              <span class="text-ar-1"> Ask Confirmation</span>
            </div>
          </div>
          <div class="d-flex justify-end align-center gap-2 bottom-schedule-1 ">
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
.v-overlay__content .v-card-title {
  color: var(--text-dark) !important;
}

.close__btn {
  position: absolute;
  margin: 16px;
  background: transparent !important;
  box-shadow: none;
}

.text-ar-1 {
  color: var(--text-dark);
  font-size: 13px;
}

.toggle {
  block-size: 20px;
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

.modal__input .icon-checkbox p {
  display: flex;
  align-items: center;
  color: var(--text-dark);
  font-size: 14px;
  gap: 4px;
  inline-size: 120px;
  margin-block-end: 0;
}

.modal__input .icon-checkbox p img {
  cursor: pointer;
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

.input-checkbox p {
  display: flex;
  align-items: center;
  color: var(--text-dark);
  font-size: 14px;
  gap: 4px;
  inline-size: 120px;
  margin-block-end: 0;
}

.input-checkbox .icon-checkbox p img {
  cursor: pointer;
}

.style-chip {
  border-color: var(--border-gray);
  block-size: fit-content;
  color: var(--text-dark);
  padding-block: 6px;
  padding-inline: 16px;
}

.delete {
  border: 1px solid var(--border-gray);
  padding-block: 9px;
  padding-inline: 9.5px;
  transition: var(--smooth);
}

.delete:hover {
  border-color: var(--text-dark);
}

.switch {
  position: relative;
  display: block;
  overflow: hidden;
  border-radius: 100rem;
  background: var(--text-dark);
  block-size: 20px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 10%);
  cursor: pointer;
  inline-size: 40px;
  margin-block: 0;
  margin-inline: auto;
  transition: background-color 0.25s linear;
}

.switch::after {
  position: absolute;
  border-radius: 40px;
  background-color: #fff;
  block-size: 15px;
  content: "";
  inline-size: 15px;
  inset-block-start: 2.5px;
  inset-inline-start: 3px;
  transition: background-color 0.25s linear, transform 0.25s linear;
}

.switch-input {
  display: none;
}

.switch-input:checked + .switch {
  background-color: #10b981;
}

.switch-input:checked + .switch::after {
  background-color: white;
  transform: translateX(19px);
}

@media (min-width: 600px) {
  .v-dialog.v-dialog-sm,
  .v-dialog.v-dialog-lg,
  .v-dialog.v-dialog-xl {
    inline-size: 640px !important;
  }
}

.bottom-schedule-1 button {
  border-radius: 50px !important;
}

@media (max-width: 688px) {
  .modal-footer {
    flex-direction: column;
  }

  .bottom-schedule-1 {
    justify-content: center !important;
  }

  .modal__input {
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
}

@media (max-width: 480px) {
  .v-dialog .v-overlay__content > .v-card {
    margin-block: 0;
    margin-inline: -24px;
    overflow-y: scroll;
  }

  .bottom-schedule {
    flex-wrap: wrap;
    gap: 0 !important;
  }

  .button-toggle {
    margin-inline-end: 20px;
  }
}
</style>
