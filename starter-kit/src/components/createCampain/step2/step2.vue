<script lang="ts">
import BtnRound from '@/components/buttons/roundedButton/index.vue'
import { btnBlack } from '@/constant/buttonColor'

export default {
  name: 'Step2',
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
      btnBlack,
    }
  },
}
</script>

<template>
  <div class="container-step-2-create">
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
</template>
