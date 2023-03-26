<script lang="ts">
import BtnRound from '@/components/buttons/roundedButton/index.vue'
import QuillEditorCustomer from '@/components/InputEditor/QuillEditor.vue'
import { btnBlack } from '@/constant/buttonColor'

export default {
  name: 'Step3',
  components: {
    BtnRound,
    QuillEditorCustomer,
  },
  props: {
    action: {
      type: Function,
      required: true,
    },
  },
  setup() {
    return {
      btnBlack,
    }
  },
}
</script>

<template>
  <div>
    <VCard class="pa-6">
      <div class="d-flex flex-column flex-sm-row gap-4 row">
        <div class="col-md-7 col-12">
          <h4>Preview</h4>
          <div class="mb-4">
            <QuillEditorCustomer />
          </div>
          <div class="">
            <QuillEditorCustomer />
          </div>
        </div>
        <div class="col-md-5 col-12">
          <h4>Preview</h4>
        </div>
      </div>
    </VCard>
    <div class="my-6 btn-next">
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

<style>
@media (min-width: 350px) {
  .btn-next {
    display: none;
  }
}

@media (min-width: 768px) {
  .btn-next {
    display: flex;
    justify-content: center;
  }
}
</style>
