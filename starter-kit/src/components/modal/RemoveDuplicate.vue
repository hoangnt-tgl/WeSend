<!-- eslint-disable vue/component-api-style -->
<script lang="ts">
import BtnRound from '@/components/buttons/roundedButton/index.vue'
import RemoveDuplicateResult from '@/components/modal/RemoveDuplicateResult.vue'
import { btnBlack } from '@/constant/buttonColor'

export default {
  name: 'RemoveDuplicate',
  components: {
    RemoveDuplicateResult,
    BtnRound,
  },

  setup() {
    return {
      defaultValue: true,
      isModalOpen: ref(false),
      btnBlack,
    }
  },
  methods: {
    close() {
      this.$emit('close')
    },
    openModal() {
      this.isModalOpen = true
    },
    closeModal() {
      this.isModalOpen = false
    },
  },
}
</script>

<template>
  <VDialog
    v-model="defaultValue"
    persistent
    class="v-dialog-xl"
  >
    <!-- Dialog Content -->
    <VCard>
      <div class="modal__title text-center">
        <div class="close-modal">
          <VIcon icon="tabler-x" />
        </div>
        <div class="modal-title">
          <h2>Remove Duplicates</h2>
          <p>Select contacts to be used as reference</p>
        </div>
        <div class="modal-input">
          <p><span>Drag n Drop your excel file or click to select.</span></p>
        </div>

        <div class="modal-button">
          <img
            src="../../assets/icons/excel.svg"
            alt="icon"
          >
          <span>Upload Contacts to check</span>
        </div>
        <div class="list">
          <div class="item active">
            <div class="item-checkbox">
              <label class="input-checkbox">
                <label>Select</label>
                <input
                  type="checkbox"
                  checked="checked"
                >
                <span class="checkmark" />
              </label>
            </div>
            <div class="item-content">
              <h6>First Name</h6>
              <p>Elizabetth</p>
              <p>Steve</p>
              <p>John</p>
              <p>Roger</p>
            </div>
          </div>
          <div class="item active">
            <div class="item-checkbox">
              <label class="input-checkbox">
                <label>Select</label>
                <input
                  type="checkbox"
                  checked="checked"
                >
                <span class="checkmark" />
              </label>
            </div>
            <div class="item-content">
              <h6>Middle Name</h6>
              <p>Elizabetth</p>
              <p>Steve</p>
              <p>John</p>
              <p>Roger</p>
            </div>
          </div>
          <div class="item">
            <div class="item-checkbox">
              <label class="input-checkbox">
                <label>Select</label>
                <input
                  type="checkbox"
                >
                <span class="checkmark" />
              </label>
            </div>
            <div class="item-content">
              <h6>Last Name</h6>
              <p>Elizabetth</p>
              <p>Steve</p>
              <p>John</p>
              <p>Roger</p>
            </div>
          </div>
          <div class="item active">
            <div class="item-checkbox">
              <label class="input-checkbox">
                <label>Select</label>
                <input
                  type="checkbox"
                  checked="checked"
                >
                <span class="checkmark" />
              </label>
            </div>
            <div class="item-content">
              <h6>Contact Number</h6>
              <p>Elizabetth</p>
              <p>Steve</p>
              <p>John</p>
              <p>Roger</p>
            </div>
          </div>
          <div class="item">
            <div class="item-checkbox">
              <label class="input-checkbox">
                <label>Select</label>
                <input
                  type="checkbox"
                >
                <span class="checkmark" />
              </label>
            </div>
            <div class="item-content">
              <h6>Gender</h6>
              <p>Elizabetth</p>
              <p>Steve</p>
              <p>John</p>
              <p>Roger</p>
            </div>
          </div>
        </div>
        <div class="or">
          <span />
          <p>or</p>
          <span />
        </div>
        <h6>Select contacts from an existing campaign</h6>
        <div class="modal-select">
          <select class="modal-option">
            <option>Select Campaign Name</option>
            <option>2</option>
            <option>3</option>
          </select>
          <VIcon icon="tabler-chevron-down" />
        </div>

        <button>Continue</button>
      </div>
    </VCard>
    <RemoveDuplicateResult
      v-if="isModalOpen"
      @close="closeModal"
    />
  </VDialog>
</template>

<style scoped>
/* .v-dialog .v-overlay__content > .v-card {
  overflow: unset;
} */

.v-dialog .v-overlay__content {
  max-block-size: 100% !important;
  min-block-size: 100vh !important;
}

.text-dark {
  color: #374151;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
}

.text-alter {
  color: #374151;
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
}

.modal__title {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-radius: 12px;
  gap: 16px;
}

.close-modal {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  block-size: 36px;
  color: #9ca3af;
  cursor: pointer;
  inline-size: 36px;
  inset-block-start: 0;
  inset-inline-end: 0;
}

.modal-title h2 {
  color: #000;
  font-size: 24px;
}

.modal-title p {
  color: #4b5563;
  margin-block-end: 0;
}

.modal-input {
  padding: 12px;
  border-radius: 8px;
  background: #f3f4fb;
  block-size: 130px;
  inline-size: 520px;
}

.modal-input p {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px dashed #d7d4e6;
  border-radius: 8px;
  block-size: 100%;
  inline-size: 100%;
}

.modal-button {
  display: flex;
  align-items: center;
  border: 1px solid var(--border-gray);
  border-radius: 30px;
  cursor: pointer;
  gap: 8px;
  padding-block: 10px;
  padding-inline: 12px;
  transition: var(--smooth);
}

.modal-button span {
  color: var(--text-dark);
  font-size: 13px;
  font-weight: 600;
}

.modal-button:hover {
  border-color: var(--text-dark);
}

.input-checkbox {
  position: relative;
  display: block;
  cursor: pointer;
  inline-size: 100%;
  margin-block-end: 20px;
  margin-block-start: 2px;
  padding-inline-start: 20px;
  user-select: none;
}

.input-checkbox input {
  position: absolute;
  block-size: 0;
  cursor: pointer;
  inline-size: 0;
  opacity: 0;
}

.input-checkbox label {
  position: absolute;
  color: #374151;
  font-size: 14px;
  font-weight: 400;
  inline-size: calc(100% - 30px);
  inset-block-start: 0;
  inset-block-start: -1px;
  inset-inline-start: 0;
}

.checkmark {
  position: absolute;
  border: 1px solid var(--border-gray);
  border-radius: 5px;
  block-size: 18px;
  inline-size: 18px;
  inset-inline-start: 0;
}

.input-checkbox input:checked ~ .checkmark {
  background: #11b981;
}

.checkmark::after {
  position: absolute;
  display: none;
  content: "";
}

.input-checkbox input:checked ~ .checkmark::after {
  display: block;
}

.input-checkbox .checkmark::after {
  border: solid white;
  border-width: 0 2px 2px 0;
  block-size: 8px;
  inline-size: 4px;
  inset-block-start: 3px;
  inset-inline-start: 6px;
  transform: rotate(45deg);
}

.list {
  display: grid;
  column-gap: 10px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  inline-size: 100%;
  overflow-x: scroll;
}

.item {
  min-inline-size: 160px;
}

.item-checkbox {
  border: 1px solid var(--border-gray);
  border-radius: 5px;
  margin-block-end: 10px;
  padding-block: 8px;
  padding-inline: 12px;
}

.item-content {
  display: flex;
  flex-direction: column;
  padding: 12px;
  border: 1px solid #e5e7eb;
  border-radius: 5px;
  gap: 2px;
  text-align: start;
}

.item-content h6 {
  color: #374151;
  font-size: 15px;
  font-weight: 600;
  margin-block-end: 10px;
}

.item-content p {
  color: #374151;
  font-size: 14px;
  margin-block-end: 0;
}

.item.active .item-content {
  border-color: #f3f4fb;
  background: #f3f4fb;
}

.item.active .input-checkbox label {
  font-weight: 600;
}

.modal-select {
  position: relative;
  inline-size: 400px;
}

.modal-option {
  border: 1px solid var(--border-gray);
  border-radius: 5px;
  color: var(--text-dark);
  cursor: pointer;
  font-size: 14px;
  inline-size: 100%;
  outline: none;
  padding-block: 10px;
  padding-inline: 12px;
}

.modal-select svg {
  position: absolute;
  inset-block-start: 50%;
  inset-inline-end: 10px;
  transform: translateY(-50%);
}

.modal__title > button {
  border-radius: 50px;
  background-color: var(--text-dark);
  color: #fff;
  padding-block: 10px;
  padding-inline: 32px;
  transition: var(--smooth);
}

.or {
  display: flex;
  align-items: center;
  gap: 8px;
}

.or span {
  background: var(--border-gray);
  block-size: 1px;
  inline-size: 200px;
}

.or p {
  font-style: italic;
  margin-block-end: 0;
}

.modal__title h6 {
  color: #374151;
  font-size: 14px;
}

.modal__title > button:hover {
  background-color: rgba(17, 24, 39, 80%);
}

@media (max-width: 1300px) {
  .v-dialog-xl {
    inline-size: calc(100%) !important;
  }
}

@media (max-width: 620px) {
  .modal-input {
    inline-size: 100%;
  }

  .modal-input p {
    padding-block: 0;
    padding-inline: 10px;
  }

  .or span {
    display: block;
    inline-size: 100px;
  }

  .modal-select {
    inline-size: 100%;
  }
}

@media (max-width: 480px) {
  .close-modal {
    background: transparent;
    color: #9ca3af;
  }

  .close-modal svg {
    inset-block-start: 12px;
    inset-inline-end: 10px;
  }

  .modal-title {
    inline-size: 100%;
  }

  .modal-title h2 {
    font-size: 16px;
    margin-block-end: 20px;
    text-align: start;
  }

  .v-dialog .v-overlay__content > .v-card {
    margin: -24px;
    block-size: 100%;
    overflow-y: scroll;
  }
}
</style>
