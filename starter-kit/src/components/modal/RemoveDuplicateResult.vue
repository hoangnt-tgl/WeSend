<!-- eslint-disable vue/component-api-style -->
<script lang="ts">
import { btnBlack } from '@/constant/buttonColor'

export default {
  name: 'RemoveDuplicate',
  components: {

  },
  setup() {
    return {
      isModalOpen: true,
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
    class="v-dialog-xl"
  >
    <!-- Dialog Content -->
    <VCard>
      <div class="modal__title text-center">
        <div
          class="close-modal"
          @click="close"
        >
          <VIcon icon="tabler-x" />
        </div>
        <div class="modal-title">
          <div class="content">
            <h2>Found <span>200</span> duplicate contacts</h2>
            <span>The following contacts are present in both lists and will be deleted from the current campaign (Campaign Name).</span>
          </div>
          <div class="button">
            <button><VIcon icon="tabler-trash" /><span>Delete</span></button>
          </div>
        </div>
        <div class="modal-container">
          <div class="modal-container-title">
            <div class="title-name">
              NAME
            </div>
            <div class="title-phone">
              PHONE NUMBER
            </div>
            <div class="title-gender">
              GENDER
            </div>
            <div class="title-age">
              AGE
            </div>
          </div>
          <div class="modal-container-content">
            <div class="content-name">
              Varun Gupta
            </div>
            <div class="content-phone">
              +91-9999123456
            </div>
            <div class="content-gender">
              M
            </div>
            <div class="content-age">
              38
            </div>
          </div>
          <div class="modal-container-content">
            <div class="content-name">
              Varun Gupta
            </div>
            <div class="content-phone">
              +91-9999123456
            </div>
            <div class="content-gender">
              M
            </div>
            <div class="content-age">
              38
            </div>
          </div>
          <div class="modal-container-content">
            <div class="content-name">
              Varun Gupta
            </div>
            <div class="content-phone">
              +91-9999123456
            </div>
            <div class="content-gender">
              M
            </div>
            <div class="content-age">
              38
            </div>
          </div>
          <div class="modal-container-content">
            <div class="content-name">
              Varun Gupta
            </div>
            <div class="content-phone">
              +91-9999123456
            </div>
            <div class="content-gender">
              M
            </div>
            <div class="content-age">
              38
            </div>
          </div>
        </div>
      </div>
    </VCard>
  </VDialog>
</template>

<style scoped>
/* .v-dialog-xl {
  inline-size: 650px !important;
}

.v-dialog .v-overlay__content > .v-card {
  inline-size: 650px !important;
  margin-block: auto;
  margin-inline: auto;
} */

.v-dialog .v-overlay__content > .v-card {
  inline-size: 650px !important;
  margin-block: 0;
  margin-inline: auto;
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
  padding: 20px;
  inline-size: 650px;
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

.modal-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-block-end: 30px;
  text-align: start;
}

.modal-title .content h2 {
  font-size: 20px;
}

.modal-title .content h2 span {
  color: #ef4444;
}

.modal-title .content > span {
  display: block;
  color: #4b5563;
  font-size: 14px;
  max-inline-size: 380px;
}

.modal-title button {
  display: flex;
  align-items: center;
  border-radius: 40px;
  background-color: #ef4444;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  gap: 8px;
  padding-block: 12px;
  padding-inline: 20px;
  transition: var(--smooth);
}

.modal-title button:hover {
  background-color: rgba(239, 68, 68, 80%);
}

.modal-container {
  overflow-x: scroll;
}

.modal-container-title,
.modal-container-content {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  inline-size: 500px;
  text-align: start;
}

.title-name,
.content-name {
  flex: 1;
}

.title-phone,
.content-phone {
  inline-size: 32%;
}

.title-gender,
.content-gender {
  inline-size: 15%;
}

.content-age,
.title-age {
  inline-size: 7%;
}

.modal-container-title {
  color: #6b7280;
  font-size: 14px;
}

.modal-container-content {
  border-block-end: 1px solid var(--border-gray);
  color: #000;
  font-size: 16px;
  padding-block: 20px;
  padding-inline: 0;
}

.modal-container-content:last-child {
  border-block-end: 0;
}

@media (max-width: 992px) {
  .modal__title {
    inline-size: auto;
  }

  .v-dialog .v-overlay__content > .v-card {
    inline-size: auto !important;
    margin-block: 0;
    margin-inline: -24px;
  }
}

@media (max-width: 480px) {
  .modal-title .content h2 {
    font-size: 16px;
  }

  .modal-title .content > span {
    font-size: 12px;
  }
}
</style>
