<!-- eslint-disable vue/component-api-style -->
<script lang="ts">
import BtnRound from '@/components/buttons/roundedButton/index.vue'
import { btnBlack } from '@/constant/buttonColor'

const switchOn = ref('on')
export default {
  name: 'Reminder1',
  components: {
    BtnRound,
  },
  setup() {
    return {
      isModalOpen: true,
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

        <div class="meeting">
          <div class="meeting-left">
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
          <div class="meeting-right">
            <div class="meeting-header">
              <div class="meeting-header-left">
                <p>Label</p>
                <div class="d-flex gap-1 align-items-center button-toggle">
                  <div class="toggle-1">
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
                  <span class="text-ar-1">Custom message</span>
                </div>
              </div>
              <div class="meeting-header-right">
                <VIcon icon="tabler-search" />
                <input
                  type="text"
                  placeholder="Search"
                >
              </div>
            </div>
            <div class="meeting-container">
              <div class="meeting-item active">
                <div class="meeting-item-left">
                  <span class="red" />
                  <p>New Year Greeting</p>
                </div>
                <img
                  src="../../assets/icons/check.svg"
                  alt="icon"
                >
              </div>

              <div class="meeting-item">
                <div class="meeting-item-left">
                  <span class="orange" />
                  <p>Birthday Wish</p>
                </div>
                <img
                  src="../../assets/icons/check.svg"
                  alt="icon"
                >
              </div>
              <div class="meeting-item">
                <div class="meeting-item-left">
                  <span class="green" />
                  <p>Weekend Offer</p>
                </div>
                <img
                  src="../../assets/icons/check.svg"
                  alt="icon"
                >
              </div>
              <div class="meeting-item">
                <div class="meeting-item-left">
                  <span class="blue" />
                  <p>3O% Discount Week</p>
                </div>
                <img
                  src="../../assets/icons/check.svg"
                  alt="icon"
                >
              </div>
            </div>
          </div>
        </div>

        <div class="meeting">
          <div class="meeting-left">
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
          <div class="meeting-right">
            <div class="meeting-header">
              <div class="meeting-header-left">
                <p>Label</p>
                <div class="d-flex gap-1 align-items-center button-toggle">
                  <div class="toggle-1">
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
                  <span class="text-ar-1">Custom message</span>
                </div>
              </div>
              <div class="meeting-header-select">
                <div class="modal-select">
                  <select class="modal-option">
                    <option>15 min</option>
                    <option>30 min</option>
                    <option>1 hour</option>
                  </select>
                  <VIcon icon="tabler-chevron-down" />
                </div>
                <span>Delay Sending time</span>
              </div>
            </div>
            <div class="meeting-container">
              <div class="meeting-item active">
                <div class="meeting-item-left">
                  <span class="red" />
                  <p>New Year Greeting</p>
                </div>
                <img
                  src="../../assets/icons/check.svg"
                  alt="icon"
                >
              </div>

              <div class="meeting-item">
                <div class="meeting-item-left">
                  <span class="orange" />
                  <p>Birthday Wish</p>
                </div>
                <img
                  src="../../assets/icons/check.svg"
                  alt="icon"
                >
              </div>
              <div class="meeting-item">
                <div class="meeting-item-left">
                  <span class="green" />
                  <p>Weekend Offer</p>
                </div>
                <img
                  src="../../assets/icons/check.svg"
                  alt="icon"
                >
              </div>
              <div class="meeting-item">
                <div class="meeting-item-left">
                  <span class="blue" />
                  <p>3O% Discount Week</p>
                </div>
                <img
                  src="../../assets/icons/check.svg"
                  alt="icon"
                >
              </div>
            </div>
          </div>
        </div>

        <div class="meeting-mobile">
          <div class="meeting-right">
            <div class="meeting-header">
              <div class="meeting-header-left">
                <div class="meeting-left">
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
                <p>Label</p>
                <div class="d-flex gap-1 align-items-center button-toggle">
                  <div class="toggle-1">
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
                  <span class="text-ar-1">Custom message</span>
                </div>
              </div>
              <div class="meeting-header-right">
                <VIcon icon="tabler-search" />
                <input
                  type="text"
                  placeholder="Search"
                >
              </div>
            </div>
            <div class="meeting-container">
              <div class="meeting-item active">
                <div class="meeting-item-left">
                  <span class="red" />
                  <p>New Year Greeting</p>
                </div>
                <img
                  src="../../assets/icons/check.svg"
                  alt="icon"
                >
              </div>

              <div class="meeting-item">
                <div class="meeting-item-left">
                  <span class="orange" />
                  <p>Birthday Wish</p>
                </div>
                <img
                  src="../../assets/icons/check.svg"
                  alt="icon"
                >
              </div>
              <div class="meeting-item">
                <div class="meeting-item-left">
                  <span class="green" />
                  <p>Weekend Offer</p>
                </div>
                <img
                  src="../../assets/icons/check.svg"
                  alt="icon"
                >
              </div>
              <div class="meeting-item">
                <div class="meeting-item-left">
                  <span class="blue" />
                  <p>3O% Discount Week</p>
                </div>
                <img
                  src="../../assets/icons/check.svg"
                  alt="icon"
                >
              </div>
            </div>
          </div>
        </div>

        <div class="meeting-mobile">
          <div class="meeting-right">
            <div class="meeting-header">
              <div class="meeting-header-left">
                <div class="meeting-left">
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
                <p>Label</p>
                <div class="d-flex gap-1 align-items-center button-toggle">
                  <div class="toggle-1">
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
                  <span class="text-ar-1">Custom message</span>
                </div>
              </div>
              <div class="meeting-header-select">
                <div class="modal-select">
                  <select class="modal-option">
                    <option>15 min</option>
                    <option>30 min</option>
                    <option>1 hour</option>
                  </select>
                  <VIcon icon="tabler-chevron-down" />
                </div>
                <span>Delay Sending time</span>
              </div>
            </div>
            <div class="meeting-container">
              <div class="meeting-item active">
                <div class="meeting-item-left">
                  <span class="red" />
                  <p>New Year Greeting</p>
                </div>
                <img
                  src="../../assets/icons/check.svg"
                  alt="icon"
                >
              </div>

              <div class="meeting-item">
                <div class="meeting-item-left">
                  <span class="orange" />
                  <p>Birthday Wish</p>
                </div>
                <img
                  src="../../assets/icons/check.svg"
                  alt="icon"
                >
              </div>
              <div class="meeting-item">
                <div class="meeting-item-left">
                  <span class="green" />
                  <p>Weekend Offer</p>
                </div>
                <img
                  src="../../assets/icons/check.svg"
                  alt="icon"
                >
              </div>
              <div class="meeting-item">
                <div class="meeting-item-left">
                  <span class="blue" />
                  <p>3O% Discount Week</p>
                </div>
                <img
                  src="../../assets/icons/check.svg"
                  alt="icon"
                >
              </div>
            </div>
          </div>
        </div>

        <div class="d-flex justify-content-sm-between mt-4 mb-2 gap-3 modal-footer">
          <div class="w-100 d-flex align-center gap-3 bottom-schedule">
            <div class="d-flex gap-1 align-items-center button-toggle">
              <div class="toggle-1">
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
  margin-block-end: 0;
}

.toggle-1 {
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
  inline-size: 110px;
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
  font-weight: 600;
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

.toggle-1 .switch {
  position: relative;
  display: block;
  overflow: hidden;
  border-radius: 100rem;
  background: #e0e7ff;
  block-size: 20px;
  cursor: pointer;
  inline-size: 40px;
  margin-block: 0;
  margin-inline: auto;
  transition: background-color 0.25s linear;
}

.toggle-1 .switch::after {
  position: absolute;
  border-radius: 40px;
  background-color: #10b981;
  block-size: 15px;
  content: "";
  inline-size: 15px;
  inset-block-start: 2.5px;
  inset-inline-start: 3px;
  transition: background-color 0.25s linear, transform 0.25s linear;
}

.toggle-1 .switch-input {
  display: none;
}

.toggle-1 .switch-input:checked + .switch {
  background-color: #10b981;
}

.toggle-1 .switch-input:checked + .switch::after {
  background-color: #fff;
}

.toggle-1 .switch-input:checked + .switch::after {
  background-color: white;
  transform: translateX(19px);
}

.meeting {
  display: flex;
  gap: 10px;
  margin-block: 10px 20px;
  margin-inline: 0;
}

.meeting-mobile {
  display: none;
}

.meeting-left {
  display: flex;
  align-items: flex-start;
  color: var(--text-dark);
  font-size: 14px;
  inline-size: 120px;
  margin-block-end: 0;
  padding-block-start: 10px;
}

.meeting-left .text-ar-1 {
  display: flex;
  align-items: center;
  font-size: 14px;
  gap: 4px;
}

.meeting-left .v-input {
  margin-block-start: -8px;
}

.meeting-right {
  flex: 1;
}

.meeting-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.meeting-header-left {
  display: flex;
  align-items: center;
  color: var(--text-dark);
  font-size: 14px !important;
  gap: 14px;
}

.meeting-header-left p {
  margin-block-end: 0;
}

.meeting-header-left span {
  font-size: 14px !important;
}

.meeting-header-right {
  display: flex;
  border-radius: 3px;
  background: #f3f4fb;
  color: #6b7280;
  gap: 10px;
  inline-size: 180px;
  padding-block: 8px;
  padding-inline: 12px;
}

.meeting-header-right input {
  border: 0;
  color: #6b7280;
  font-size: 13px;
  inline-size: 100%;
  outline: none;
}

.meeting-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-block-start: 10px;
}

.meeting-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border: 1px solid var(--border-gray);
  border-radius: 5px;
  cursor: pointer;
  transition: var(--smooth);
}

.meeting-item img {
  display: none;
}

.meeting-item.active,
.meeting-item:hover {
  border-color: #10b981;
}

.meeting-item.active img {
  display: block;
}

.meeting-item-left {
  display: flex;
  align-items: center;
  gap: 8px;
}

.meeting-item p {
  color: #374151;
  margin-block-end: 0;
}

.meeting-item span {
  display: block;
  border-radius: 50%;
  block-size: 9px;
  inline-size: 9px;
}

.meeting-item span.red {
  background: #ef4444;
}

.meeting-item span.orange {
  background: #f59e0b;
}

.meeting-item span.green {
  background: #10b981;
}

.meeting-item span.blue {
  background: #3b82f6;
}

.meeting-header-select {
  display: flex;
  align-items: center;
  gap: 6px;
}

.meeting-header-select span {
  color: var(--text-dark);
  font-size: 14px;
}

.modal-select {
  position: relative;
  inline-size: 80px;
}

.modal-option {
  border: 1px solid var(--border-gray);
  border-radius: 5px;
  color: var(--text-dark);
  cursor: pointer;
  font-size: 14px;
  inline-size: 100%;
  outline: none;
  padding-block: 9px;
  padding-inline: 8px;
}

.modal-select svg {
  position: absolute;
  inset-block-start: 50%;
  inset-inline-end: 10px;
  transform: translate(7px, -50%);
}

@media (min-width: 600px) {
  .v-dialog.v-dialog-sm,
  .v-dialog.v-dialog-lg,
  .v-dialog.v-dialog-xl {
    inline-size: 680px !important;
  }
}

.bottom-schedule-1 button {
  border-radius: 50px !important;
}

@media (max-width: 728px) {
  .modal-footer {
    flex-direction: column;
  }

  .bottom-schedule-1 {
    justify-content: center !important;
  }

  .meeting {
    display: none;
  }

  .meeting-mobile {
    display: block;
    margin-block: 10px 20px;
    margin-inline: 0;
  }

  .meeting-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }

  .meeting-left {
    padding-block-start: 6px;
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

  .meeting-header-left {
    flex-wrap: wrap;
  }
}

@media (max-width: 407px) {
  .bottom-schedule {
    flex-wrap: wrap;
    gap: 0 !important;
  }

  .button-toggle {
    margin-inline-end: 20px;
  }
}
</style>
