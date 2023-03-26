<script lang="ts">
import BtnRound from '@/components/buttons/roundedButton/index.vue'
import { btnBlack } from '@/constant/buttonColor'

export default {
  name: 'Step4',
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
