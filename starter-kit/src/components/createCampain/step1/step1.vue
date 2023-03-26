<script lang="ts">
import MicrosoftExcelIcon from '@/assets/images/svg/microsoft-excel.svg'
import WhatsAppIcon from '@/assets/images/svg/whatsapp.svg'
import BtnRound from '@/components/buttons/roundedButton/index.vue'
import { btnBlack } from '@/constant/buttonColor'

export default {
  name: 'Step1',
  components: {
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
      WhatsAppIcon,
      MicrosoftExcelIcon,
      btnBlack,
    }
  },
}
</script>

<template>
  <div class="">
    <VCard class="mb-4 pa-6">
      <div class="input-field">
        <h3 class="mb-3">
          Campaign Title
        </h3>
        <input
          type="text"
          placeholder="Type here"
          class="phone-number"
        >
      </div>
    </VCard>
    <VCard class="pa-6">
      <h3 class="mb-3">
        Import contacts from
      </h3>
      <div class="">
        <VBtn class="button-excel button-import v-btn--rounded">
          <VImg
            :src="MicrosoftExcelIcon"
            width="20"
            height="20"
          />
          <span>Excel</span>
        </VBtn>
        <VBtn class="button-import v-btn--rounded">
          <VImg
            :src="WhatsAppIcon"
            width="20"
            height="20"
          />
          Whatsapp Group
        </VBtn>
        <VBtn class="button-import v-btn--rounded">
          <VImg
            :src="WhatsAppIcon"
            width="20"
            height="20"
          />
          Whatsapp Contacts
        </VBtn>
      </div>
      <h4 class="mb-3">
        Expiry Date
      </h4>
      <div class="input-field input-file">
        <input
          type="file"
          class="phone-number"
        >
        <button
          class="button-browse"
          type="button"
          @click="action"
        >
          Browse
        </button>
      </div>
    </VCard>
    <div class="my-4">
      <div>
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

<style scoped>
.input-field.input-file {
  display: flex;
}

input[type="file"] {
  border-radius: 5px 0 0 5px !important;
  color: #374151;
}

.input-field input {
  padding: 15px;
  border-radius: 5px;
  background: #f3f4fb;
  block-size: 48px;
  color: #374151;
  font-size: 14px;
  outline: none;
}

.phone-number {
  inline-size: 100%;
}

.button-import {
  border: 1px solid #d1d5db;
  background: transparent !important;
  color: #374151 !important;
  letter-spacing: 0.2px;
  margin-block-end: 10px;
  margin-inline-end: 10px;
  text-transform: none;
}

.button-excel {
  background: #10b981 !important;
  color: white !important;
}

::-webkit-file-upload-button {
  display: none;
}

.button-browse {
  padding: 10px;
  border-radius: 0 5px 5px 0;
  background: #e5e7eb;
  color: black;
  font-weight: 600;
}
</style>
