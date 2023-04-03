<!-- eslint-disable vue/component-api-style -->
<script lang="ts">
import BtnRound from '@/components/buttons/roundedButton/index.vue'
import QuillEditor from '@/components/InputEditor/QuillEditor.vue'
import { btnBlack } from '@/constant/buttonColor'

const switchOn = ref('on')
export default {
  name: 'MeetingDetail',
  components: {
    BtnRound,
    QuillEditor,
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
    <VCard>
      <div class="px-6 py-4">
        <div class="meeting-title">
          <h5>Meeting Details</h5>
          <h5 class="active">
            08 Confirmations
          </h5>
        </div>
        <div class="meeting-container">
          <div class="meeting-container-title">
            <div class="title-left">
              <div class="name">
                NAME
              </div>
              <div class="phone">
                PHONE NUMBER
              </div>
            </div>

            <div class="status">
              STATUS
            </div>
          </div>

          <div class="meeting-container-content">
            <div
              class="title-left"
            >
              <div class="name">
                Siddhant Jain
              </div>
              <div class="phone">
                +91-9999123456
              </div>
            </div>

            <div class="status ">
              <span class="comfirm">Confirmed</span>
            </div>
          </div>

          <div class="meeting-container-content">
            <div
              class="title-left"
            >
              <div class="name">
                Siddhant Jain
              </div>
              <div class="phone">
                +91-9999123456
              </div>
            </div>
            <div class="status ">
              <span class="uncomfirm">Unconfirm</span>
            </div>
          </div>

          <div class="meeting-container-content">
            <div
              class="title-left"
            >
              <div class="name">
                Siddhant Jain
              </div>
              <div class="phone">
                +91-9999123456
              </div>
            </div>
            <div class="status ">
              <span class="declined">Declined</span>
            </div>
          </div>

          <div class="meeting-container-content">
            <div
              class="title-left"
            >
              <div class="name">
                Siddhant Jain
              </div>
              <div class="phone">
                +91-9999123456
              </div>
            </div>

            <div class="status ">
              <span class="comfirm">Confirmed</span>
            </div>
          </div>

          <div class="meeting-container-content">
            <div
              class="title-left"
            >
              <div class="name">
                Siddhant Jain
              </div>
              <div class="phone">
                +91-9999123456
              </div>
            </div>
            <div class="status ">
              <span class="uncomfirm">Unconfirm</span>
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
            <div class="button-save">
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

.meeting-title {
  display: flex;
  border-block-end: 1px solid var(--border-gray);
  gap: 32px;
}

.meeting-title h5 {
  border-block-end: 3px solid transparent;
  color: #6b7280;
  font: 16px;
  font-weight: 400;
  padding-block-end: 10px;
}

.meeting-title h5.active {
  border-color: #6366f1;
  color: #374151;
  font-weight: 600;
}

.meeting-container-title {
  color: #6b7280;
}

.meeting-container-content {
  border-block-end: 1px solid var(--border-gray);
  color: var(--text-dark);
}

.meeting-container-title,
.meeting-container-content {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  padding-block: 20px;
  padding-inline: 10px;
}

.title-left {
  display: flex;
  flex: 1;
  justify-content: space-between;
}

.name {
  inline-size: 45%;
}

.phone {
  inline-size: 50%;
  text-align: start;
}

.status {
  inline-size: 100px;
  text-align: end;
}

.meeting-container-content .status span {
  border-radius: 30px;
  font-size: 14px;
  font-weight: 600;
  padding-block: 6px;
  padding-inline: 15px;
}

.meeting-container-content .status .comfirm {
  background-color: #ecfdf5;
  color: #10b981;
}

.meeting-container-content .status .uncomfirm {
  background-color: #e0e7ff;
  color: #6366f1;
}

.meeting-container-content .status .declined {
  background-color: #fef2f2;
  color: #ef4444;
}

@media (min-width: 728px) {
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

@media (max-width: 600px) {
  .bottom-schedule-1 {
    margin-block-start: 2px;
  }

  .meeting-container-title {
    display: none;
  }

  .meeting-container-content {
    align-items: center;
    padding-block: 15px;
    padding-inline: 0;
  }

  .title-left {
    flex-direction: column;
    gap: 10px;
  }

  .title-left .name,
  .title-left .phone {
    inline-size: 100%;
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
    justify-content: flex-start !important;
    gap: 0 !important;
  }

  .button-toggle {
    margin-inline-end: 20px;
  }
}
</style>
