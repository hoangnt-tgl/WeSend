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
        <h2>Found 200 duplicate contacts</h2>
        <span>The following contacts are present in both lists and will be deleted from the current campaign (Campaign Name).</span>
      </div>
      <div class="text-center py-15 px-4">
        <div class="text-dark">
          <VIcon icon="tabler-alert-triangle-filled" />
          Schedules are overlapping
        </div>
        <p class="text-alter py-4">
          Would you like to run this schedule now? It will stop the other schedule.
        </p>
        <div class="d-flex justify-center gap-3">
          <div />
          <div>
            <BtnRound
              button-title="Yes"
              :color="btnBlack.color"
              :style="btnBlack"
              variant="'outlined'"
              :action="close"
            />
          </div>
        </div>
      </div>
    </VCard>
  </VDialog>
</template>

<style scoped>
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
</style>
