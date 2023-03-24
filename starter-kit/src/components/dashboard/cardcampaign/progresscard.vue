<script lang="ts">
export default {
  name: 'Progresscard',
  props: {
    progress: {
      type: Number,
      required: true,
    },
    progressTotal: {
      type: Number,
      required: true,
    },
    isRunning: {
      type: Boolean,
      required: true,
    },
  },
}
</script>

<template>
  <div class="progress-box">
    <div class="text-subtitle-1">
      <div v-if="isRunning">
        <VChip
          color="success"
          class="text-uppercase chip-status"
        >
          <div class="test">
            running
          </div>
        </VChip>
      </div>
      <div v-else>
        <VChip
          color="primary"
          class="text-uppercase"
        >
          in queue
        </VChip>
      </div>
    </div>
    <div>
      <span class="progress">{{ progress }}</span> / <span class="progressTotal">{{ progressTotal }}</span>
    </div>
  </div>
</template>

  <style>
@media (min-width: 350px) {
  .progress-box {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

  .test {
    font-size: var(--font-size-ssm) !important;
  }

  .progress,
  .progressTotal {
    font-size: var(--font-size-ssm);
  }

  .progress {
    color: var(--text-active);
  }

  .progressTotal {
    color: var(--text-deactive);
  }
}

@media (min-width: 425px) {

}

@media (min-width: 600px) {

}

@media (min-width: 768px) {

}

@media (min-width: 950px) {

}

@media (min-width: 1200px) {

}

@media (min-width: 1440px) {
}

@media (min-width: 1900px) {
}

@media (min-width: 2000px) {
}
</style>

