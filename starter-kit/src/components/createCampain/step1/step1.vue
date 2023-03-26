<script lang="ts">
import MicrosoftExcelIcon from '@/assets/images/svg/microsoft-excel.svg'
import WhatsAppIcon from '@/assets/images/svg/whatsapp.svg'
import BtnRound from '@/components/buttons/roundedButton/index.vue'

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
    }
  },
}
</script>

<template>
  <div class="">
    <VCard class="mb-4 pa-6">
      <div class="input-number">
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
        <VBtn
          class="button-import v-btn--rounded"
          color="transparent"
        >
          <VImg
            :src="MicrosoftExcelIcon"
            width="20"
            height="20"
          />
          Excel
        </VBtn>
        <VBtn class="button-import">
          <VImg
            :src="WhatsAppIcon"
            width="20"
            height="20"
          />
          Whatsapp Group
        </VBtn>
        <VBtn class="button-import">
          <VImg
            :src="WhatsAppIcon"
            width="20"
            height="20"
          />
          Whatsapp Contacts
        </VBtn>
      </div>
    </VCard>

    <BtnRound
      button-title="continue"
      :action="action"
      color="{{ 'primary' }}}"
      :style="{}"
      variant="contained"
    />
  </div>
</template>

<style scoped>
.input-number input {
  padding: 15px;
  border-radius: 5px;
  background: #f3f4fb;
  color: #374151;
  font-size: 14px;
  outline: none;
}

.phone-number {
  inline-size: 100%;
}

.button-import {

}
</style>

